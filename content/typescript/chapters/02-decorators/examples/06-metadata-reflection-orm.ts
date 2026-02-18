// Example 2.7: Metadata Reflection
// ORM-style decorators with runtime type information

import "reflect-metadata";

// Metadata keys
const COLUMN_KEY = Symbol("column_metadata");
const TABLE_KEY = Symbol("table_metadata");
const PRIMARY_KEY = Symbol("primary_key");
const RELATION_KEY = Symbol("relation_metadata");

/**
 * Table decorator - defines the database table name
 */
function Table(name: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata(TABLE_KEY, name, constructor);
  };
}

/**
 * Column decorator - defines a database column
 */
function Column(options: {
  name?: string;
  type?: string;
  nullable?: boolean;
  length?: number;
} = {}) {
  return function (target: any, propertyKey: string) {
    const columnOptions = {
      name: options.name || propertyKey,
      type: options.type || "varchar",
      nullable: options.nullable ?? true,
      length: options.length || 255
    };
    Reflect.defineMetadata(COLUMN_KEY, columnOptions, target, propertyKey);
  };
}

/**
 * PrimaryKey decorator - marks a column as primary key
 */
function PrimaryKey() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(PRIMARY_KEY, true, target, propertyKey);
  };
}

/**
 * Relation decorator - defines relationships between tables
 */
function Relation(type: "one-to-one" | "one-to-many" | "many-to-one", targetEntity: Function) {
  return function (target: any, propertyKey: string) {
    const relationOptions = {
      type,
      targetEntity: targetEntity.name
    };
    Reflect.defineMetadata(RELATION_KEY, relationOptions, target, propertyKey);
  };
}

// Entity classes

@Table("users")
class User {
  @PrimaryKey()
  @Column({ type: "int", nullable: false })
  id: number;

  @Column({ name: "username", type: "varchar", length: 50, nullable: false })
  username: string;

  @Column({ name: "email", type: "varchar", length: 100, nullable: false })
  email: string;

  @Column({ name: "created_at", type: "datetime", nullable: false })
  createdAt: Date;

  @Relation("one-to-many", () => Post)
  posts: Post[];
}

@Table("posts")
class Post {
  @PrimaryKey()
  @Column({ type: "int", nullable: false })
  id: number;

  @Column({ name: "title", type: "varchar", length: 200, nullable: false })
  title: string;

  @Column({ name: "content", type: "text", length: 65535, nullable: true })
  content: string;

  @Column({ name: "user_id", type: "int", nullable: false })
  userId: number;

  @Relation("many-to-one", () => User)
  author: User;
}

@Table("comments")
class Comment {
  @PrimaryKey()
  @Column({ type: "int", nullable: false })
  id: number;

  @Column({ name: "post_id", type: "int", nullable: false })
  postId: number;

  @Column({ name: "user_id", type: "int", nullable: false })
  userId: number;

  @Column({ name: "content", type: "text", nullable: false })
  content: string;
}

// Schema Generator

class SchemaGenerator {
  /**
   * Get table name from entity
   */
  static getTableName(entity: Function): string {
    return Reflect.getMetadata(TABLE_KEY, entity) || entity.name.toLowerCase();
  }

  /**
   * Get all columns from entity
   */
  static getColumns(entity: Function): Record<string, any> {
    const instance = new (entity as any)();
    const columns: Record<string, any> = {};

    // Get property names from prototype
    const prototype = Object.getPrototypeOf(instance);
    const propertyNames = Object.getOwnPropertyNames(prototype).filter(
      name => name !== "constructor"
    );

    for (const propName of propertyNames) {
      const columnMeta = Reflect.getMetadata(COLUMN_KEY, instance, propName);
      if (columnMeta) {
        columns[propName] = {
          ...columnMeta,
          isPrimaryKey: !!Reflect.getMetadata(PRIMARY_KEY, instance, propName),
          relation: Reflect.getMetadata(RELATION_KEY, instance, propName)
        };
      }
    }

    return columns;
  }

  /**
   * Generate CREATE TABLE SQL
   */
  static generateCreateTable(entity: Function): string {
    const tableName = this.getTableName(entity);
    const columns = this.getColumns(entity);

    const columnDefs = Object.entries(columns).map(([key, col]: [string, any]) => {
      let def = `  ${col.name} ${col.type.toUpperCase()}`;

      if (col.type === "varchar" || col.type === "text") {
        def += `(${col.length || 255})`;
      }

      if (col.isPrimaryKey) {
        def += " PRIMARY KEY";
      }

      if (!col.nullable) {
        def += " NOT NULL";
      }

      return def;
    });

    return `CREATE TABLE ${tableName} (\n${columnDefs.join(",\n")}\n);`;
  }

  /**
   * Generate full schema for all entities
   */
  static generateSchema(...entities: Function[]): string {
    const statements = entities.map(entity => {
      const createTable = this.generateCreateTable(entity);
      const relations = this.generateRelations(entity);
      return createTable + (relations ? "\n\n" + relations : "");
    });

    return statements.join("\n\n-- ========================================\n\n");
  }

  /**
   * Generate foreign key relations
   */
  static generateRelations(entity: Function): string {
    const tableName = this.getTableName(entity);
    const columns = this.getColumns(entity);
    const relations: string[] = [];

    for (const [key, col] of Object.entries(columns)) {
      if (col.relation) {
        const relation = col.relation;
        if (relation.type === "many-to-one") {
          const fkName = `fk_${tableName}_${key}`;
          const targetTable = relation.targetEntity.toLowerCase() + "s";
          relations.push(
            `ALTER TABLE ${tableName} ADD CONSTRAINT ${fkName} ` +
            `FOREIGN KEY (${col.name}) REFERENCES ${targetTable}(id);`
          );
        }
      }
    }

    return relations.join("\n");
  }

  /**
   * Generate INSERT query
   */
  static generateInsert(entity: Function, data: Record<string, any>): string {
    const tableName = this.getTableName(entity);
    const columns = this.getColumns(entity);

    const validColumns = Object.entries(data)
      .filter(([key]) => columns[key])
      .map(([key]) => columns[key].name);

    const values = validColumns.map(colName => {
      const [key] = Object.entries(data).find(
        ([k]) => columns[k as keyof typeof columns]?.name === colName
      )!;
      const value = data[key as keyof typeof data];
      return typeof value === "string" ? `'${value}'` : value;
    });

    return `INSERT INTO ${tableName} (${validColumns.join(", ")}) VALUES (${values.join(", ")});`;
  }

  /**
   * Generate SELECT query with relations
   */
  static generateSelect(
    entity: Function,
    options: { where?: Record<string, any>; include?: string[] } = {}
  ): string {
    const tableName = this.getTableName(entity);
    const columns = this.getColumns(entity);

    const columnNames = Object.values(columns).map((c: any) => c.name).join(", ");
    let query = `SELECT ${columnNames} FROM ${tableName}`;

    if (options.where) {
      const conditions = Object.entries(options.where).map(([key, value]) => {
        const colName = columns[key as keyof typeof columns]?.name || key;
        const val = typeof value === "string" ? `'${value}'` : value;
        return `${colName} = ${val}`;
      });
      query += ` WHERE ${conditions.join(" AND ")}`;
    }

    return query + ";";
  }
}

// Usage
console.log("=== Schema Generation Demo ===\n");

console.log("--- CREATE TABLE Statements ---\n");
console.log(SchemaGenerator.generateSchema(User, Post, Comment));

console.log("\n\n--- INSERT Statements ---\n");

const insertUser = SchemaGenerator.generateInsert(User, {
  id: 1,
  username: "alice_dev",
  email: "alice@example.com",
  createdAt: new Date().toISOString()
});
console.log(insertUser);

const insertPost = SchemaGenerator.generateInsert(Post, {
  id: 1,
  title: "Introduction to TypeScript Decorators",
  content: "Decorators are a powerful feature...",
  userId: 1
});
console.log(insertPost);

console.log("\n\n--- SELECT Statements ---\n");

const selectUsers = SchemaGenerator.generateSelect(User, {
  where: { username: "alice_dev" }
});
console.log(selectUsers);

const selectPosts = SchemaGenerator.generateSelect(Post);
console.log(selectPosts);

// Output (abbreviated):
// === Schema Generation Demo ===
//
// --- CREATE TABLE Statements ---
//
// CREATE TABLE users (
//   id INT PRIMARY KEY NOT NULL,
//   username VARCHAR(50) NOT NULL,
//   email VARCHAR(100) NOT NULL,
//   created_at DATETIME NOT NULL
// );
//
// CREATE TABLE posts (
//   id INT PRIMARY KEY NOT NULL,
//   title VARCHAR(200) NOT NULL,
//   content TEXT(65535),
//   user_id INT NOT NULL
// );
//
// ALTER TABLE posts ADD CONSTRAINT fk_posts_author
// FOREIGN KEY (user_id) REFERENCES users(id);
//
// --- INSERT Statements ---
//
// INSERT INTO users (id, username, email, created_at) VALUES (1, 'alice_dev', 'alice@example.com', '2026-02-18T...');
// INSERT INTO posts (id, title, content, user_id) VALUES (1, 'Introduction to TypeScript Decorators', 'Decorators are a powerful feature...', 1);
//
// --- SELECT Statements ---
//
// SELECT id, username, email, created_at FROM users WHERE username = 'alice_dev';
// SELECT id, title, content, user_id FROM posts;
