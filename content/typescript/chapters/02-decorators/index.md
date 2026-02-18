# Chapter 2: Decorators

**Duration**: 40 minutes | **Difficulty**: Advanced

---

## Learning Objectives

By the end of this chapter, you will be able to:

- Create and apply class, method, and property decorators
- Build decorator factories for reusable decorator logic
- Use metadata reflection for runtime type information
- Apply decorators in real-world scenarios (logging, validation, authorization)

---

## Prerequisites

- Understanding of classes and OOP in TypeScript
- Familiarity with higher-order functions
- TypeScript compiler configuration (decorators enabled)

---

## Configuration

Enable decorators in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Install reflect-metadata:
```bash
npm install reflect-metadata
```

---

## Topics

### Topic 1: Class Decorators

Class decorators are applied to class constructors and can modify or replace the class.

#### Example 2.1: Basic Class Decorator

```typescript
function Frozen(constructor: Function) {
  Object.freeze(constructor.prototype);
  Object.freeze(constructor.prototype.constructor);
}

@Frozen
class Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());

// This will throw an error in strict mode:
// person.age = 31;  // Cannot assign to read-only property

// Output:
// Hello, I'm Alice
```

**Explanation**: The `@Frozen` decorator freezes the class prototype, preventing modifications to methods and properties.

**Output**:
```
Hello, I'm Alice
```

#### Example 2.2: Class Decorator with Metadata

```typescript
import "reflect-metadata";

const CLASS_METADATA_KEY = "class_metadata";

function RegisterComponent(name: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata(CLASS_METADATA_KEY, name, constructor);
    console.log(`Registered component: ${name}`);
  };
}

@RegisterComponent("UserProfile")
class UserProfile {
  constructor(public userId: number) {}
}

@RegisterComponent("Dashboard")
class Dashboard {
  constructor(public data: any) {}
}

// Retrieve metadata
const componentName = Reflect.getMetadata(CLASS_METADATA_KEY, UserProfile);
console.log(`Component name: ${componentName}`);

// Output:
// Registered component: UserProfile
// Registered component: Dashboard
// Component name: UserProfile
```

**Explanation**: Decorators can attach metadata to classes using the reflect-metadata library.

**Output**:
```
Registered component: UserProfile
Registered component: Dashboard
Component name: UserProfile
```

---

### Topic 2: Method Decorators

Method decorators are applied to methods and can modify their behavior.

#### Example 2.3: Logging Decorator

```typescript
function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${propertyKey}:`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.multiply(4, 7);

// Output:
// Calling add with arguments: [5, 3]
// Result of add: 8
// Calling multiply with arguments: [4, 7]
// Result of multiply: 28
```

**Explanation**: The `@Log` decorator wraps the original method to add logging before and after execution.

**Output**:
```
Calling add with arguments: [5, 3]
Result of add: 8
Calling multiply with arguments: [4, 7]
Result of multiply: 28
```

#### Example 2.4: Timing Decorator

```typescript
function Timing(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const start = performance.now();
    const result = await originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`${propertyKey} took ${(end - start).toFixed(2)}ms`);
    return result;
  };

  return descriptor;
}

class DataService {
  @Timing
  async fetchData(delay: number): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, delay));
    return ["item1", "item2", "item3"];
  }
}

// Usage
const service = new DataService();
service.fetchData(100).then(data => console.log(data));

// Output:
// fetchData took 101.23ms
// ['item1', 'item2', 'item3']
```

**Explanation**: The `@Timing` decorator measures and logs method execution time.

---

### Topic 3: Property Decorators

Property decorators are applied to class properties.

#### Example 2.5: ReadOnly Decorator

```typescript
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    enumerable: true,
    configurable: true
  });
}

class Config {
  @ReadOnly
  readonly version: string = "1.0.0";

  @ReadOnly
  readonly appName: string = "MyApp";

  mutableProperty: string = "can change";
}

const config = new Config();
console.log(`Version: ${config.version}`);
console.log(`App: ${config.appName}`);

// This would throw an error in strict mode:
// config.version = "2.0.0";

config.mutableProperty = "changed";
console.log(`Mutable: ${config.mutableProperty}`);

// Output:
// Version: 1.0.0
// App: MyApp
// Mutable: changed
```

**Explanation**: The `@ReadOnly` decorator makes properties immutable after initialization.

**Output**:
```
Version: 1.0.0
App: MyApp
Mutable: changed
```

#### Example 2.6: Validation Decorator

```typescript
function MinLength(minLength: number) {
  return function (target: any, propertyKey: string) {
    const validationKey = `__validate_${propertyKey}`;

    target[validationKey] = function (value: any) {
      if (typeof value === "string" && value.length < minLength) {
        throw new Error(
          `${propertyKey} must be at least ${minLength} characters`
        );
      }
    };
  };
}

function MaxLength(maxLength: number) {
  return function (target: any, propertyKey: string) {
    const validationKey = `__validate_${propertyKey}`;

    target[validationKey] = function (value: any) {
      if (typeof value === "string" && value.length > maxLength) {
        throw new Error(
          `${propertyKey} must be at most ${maxLength} characters`
        );
      }
    };
  };
}

class User {
  @MinLength(3)
  username: string;

  @MaxLength(50)
  email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
    this.validate();
  }

  validate(): void {
    const props = ["username", "email"];
    props.forEach(prop => {
      const validator = this[`__validate_${prop}`];
      if (validator) {
        validator.call(this, this[prop]);
      }
    });
  }
}

// Usage
const user1 = new User("alice", "alice@example.com");  // OK
console.log("User created:", user1.username);

try {
  const user2 = new User("ab", "alice@example.com");  // Error
} catch (error) {
  console.log("Error:", (error as Error).message);
}

// Output:
// User created: alice
// Error: username must be at least 3 characters
```

**Explanation**: Property decorators can add validation logic that runs during object construction.

---

### Topic 4: Decorator Factories

Decorator factories are functions that return decorators, allowing parameterization.

#### Example 2.7: Authorization Decorator Factory

```typescript
function Authorize(...roles: string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (userRole: string, ...args: any[]) {
      if (!roles.includes(userRole)) {
        throw new Error(
          `Access denied. Required roles: ${roles.join(", ")}`
        );
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class AdminService {
  @Authorize("admin")
  deleteUser(userId: number): void {
    console.log(`User ${userId} deleted`);
  }

  @Authorize("admin", "manager")
  viewReports(): string {
    return "Here are the reports";
  }

  @Authorize("admin", "manager", "user")
  viewProfile(userId: number): string {
    return `Profile for user ${userId}`;
  }
}

// Usage
const service = new AdminService();

try {
  service.viewProfile("user", 123);  // OK
  service.viewReports("manager");    // OK
  service.deleteUser("admin", 456);  // OK
  
  service.deleteUser("user", 789);   // Error!
} catch (error) {
  console.log("Error:", (error as Error).message);
}

// Output:
// Profile for user 123
// Here are the reports
// User 456 deleted
// Error: Access denied. Required roles: admin
```

**Explanation**: Decorator factories allow passing parameters to decorators for flexible behavior.

---

### Topic 5: Metadata Reflection

Metadata reflection allows storing and retrieving metadata at runtime.

#### Example 2.8: ORM-style Decorators with Metadata

```typescript
import "reflect-metadata";

const COLUMN_KEY = "column_metadata";

function Column(options: { name?: string; type?: string } = {}) {
  return function (target: any, propertyKey: string) {
    const metadata = {
      name: options.name || propertyKey,
      type: options.type || "string"
    };
    
    // Store metadata for the property
    Reflect.defineMetadata(COLUMN_KEY, metadata, target, propertyKey);
  };
}

function Table(name: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("table_name", name, constructor);
  };
}

@Table("users")
class User {
  @Column({ name: "id", type: "number" })
  id: number;

  @Column({ name: "username", type: "string" })
  username: string;

  @Column({ name: "email", type: "string" })
  email: string;

  @Column({ name: "created_at", type: "date" })
  createdAt: Date;
}

// ORM-like metadata reader
class ORM {
  static getTableName(model: Function): string {
    return Reflect.getMetadata("table_name", model) || "unknown";
  }

  static getColumns(model: Function): Record<string, any> {
    const instance = new (model as any)();
    const properties = Object.getOwnPropertyNames(
      Object.getPrototypeOf(instance)
    );
    
    const columns: Record<string, any> = {};
    
    for (const prop of properties) {
      const metadata = Reflect.getMetadata(COLUMN_KEY, instance, prop);
      if (metadata) {
        columns[prop] = metadata;
      }
    }
    
    return columns;
  }

  static generateCreateTable(model: Function): string {
    const tableName = this.getTableName(model);
    const columns = this.getColumns(model);
    
    const columnDefs = Object.entries(columns).map(([key, col]: [string, any]) => {
      return `  ${col.name} ${col.type.toUpperCase()}`;
    });
    
    return `CREATE TABLE ${tableName} (\n${columnDefs.join(",\n")}\n);`;
  }
}

// Usage
console.log("Table:", ORM.getTableName(User));
console.log("\nColumns:", ORM.getColumns(User));
console.log("\nSQL:");
console.log(ORM.generateCreateTable(User));

// Output:
// Table: users
//
// Columns: {
//   id: { name: 'id', type: 'number' },
//   username: { name: 'username', type: 'string' },
//   email: { name: 'email', type: 'string' },
//   createdAt: { name: 'created_at', type: 'date' }
// }
//
// SQL:
// CREATE TABLE users (
//   id NUMBER,
//   username STRING,
//   email STRING,
//   created_at DATE
// );
```

**Explanation**: Metadata reflection enables powerful patterns like ORMs by storing type information at runtime.

---

## Summary

Key takeaways from this chapter:

1. **Class decorators** modify or annotate class constructors
2. **Method decorators** intercept and modify method behavior
3. **Property decorators** add metadata or validation to properties
4. **Decorator factories** create parameterized decorators
5. **Metadata reflection** enables runtime type information

---

## Quiz

1. What compiler option enables decorators?
   - a) `allowDecorators`
   - b) `experimentalDecorators` ✓
   - c) `enableDecorators`
   - d) `useDecorators`

2. Which library provides metadata reflection?
   - a) `metadata-api`
   - b) `reflect-metadata` ✓
   - c) `typescript-metadata`
   - d) `runtime-types`

3. What parameters does a method decorator receive?
   - a) target, propertyKey
   - b) target, propertyKey, descriptor ✓
   - c) constructor, propertyName
   - d) target, key, value

4. Decorator factories return:
   - a) A class
   - b) A method
   - c) A decorator ✓
   - d) Metadata

5. Can property decorators modify property values directly?
   - a) Yes, always
   - b) No, they can only add metadata ✓
   - c) Only with special syntax
   - d) Only for static properties

---

## Next Steps

Continue to Chapter 3: Advanced Generics
