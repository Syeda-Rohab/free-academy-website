// Example 2.5: Property Decorator - ReadOnly and Validation
// Makes properties immutable and adds validation

import "reflect-metadata";

/**
 * Makes a property read-only after initialization
 */
function ReadOnly(target: any, propertyKey: string) {
  const internalKey = `_${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    get(this: any) {
      return this[internalKey];
    },
    set(this: any, value: any) {
      // Only allow setting if internal key doesn't exist (first time)
      if (!this[internalKey]) {
        this[internalKey] = value;
      } else {
        console.warn(`Cannot modify read-only property: ${propertyKey}`);
      }
    },
    enumerable: true,
    configurable: true
  });
}

/**
 * Validates that a string property has minimum length
 */
function MinLength(minLength: number) {
  return function (target: any, propertyKey: string) {
    const validationKey = `__validate_${propertyKey}`;
    const internalKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
      get(this: any) {
        return this[internalKey];
      },
      set(this: any, value: any) {
        if (value && typeof value === "string" && value.length < minLength) {
          throw new Error(
            `${propertyKey} must be at least ${minLength} characters (got ${value.length})`
          );
        }
        this[internalKey] = value;
      },
      enumerable: true,
      configurable: true
    });
  };
}

/**
 * Validates that a number property is within a range
 */
function Range(min: number, max: number) {
  return function (target: any, propertyKey: string) {
    const internalKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
      get(this: any) {
        return this[internalKey];
      },
      set(this: any, value: number) {
        if (value < min || value > max) {
          throw new Error(
            `${propertyKey} must be between ${min} and ${max} (got ${value})`
          );
        }
        this[internalKey] = value;
      },
      enumerable: true,
      configurable: true
    });
  };
}

/**
 * Validates email format
 */
function IsEmail(target: any, propertyKey: string) {
  const internalKey = `_${propertyKey}`;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Object.defineProperty(target, propertyKey, {
    get(this: any) {
      return this[internalKey];
    },
    set(this: any, value: string) {
      if (value && !emailRegex.test(value)) {
        throw new Error(`Invalid email format: ${value}`);
      }
      this[internalKey] = value;
    },
    enumerable: true,
    configurable: true
  });
}

/**
 * Trims whitespace from string properties
 */
function Trim(target: any, propertyKey: string) {
  const internalKey = `_${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    get(this: any) {
      return this[internalKey];
    },
    set(this: any, value: string) {
      this[internalKey] = value?.trim() ?? value;
    },
    enumerable: true,
    configurable: true
  });
}

class User {
  @MinLength(3)
  username: string;

  @IsEmail
  email: string;

  @Trim
  fullName: string;

  @Range(0, 150)
  age: number;

  @ReadOnly
  readonly id: string;

  @ReadOnly
  readonly createdAt: Date;

  constructor(
    username: string,
    email: string,
    fullName: string,
    age: number
  ) {
    this.id = `user-${Date.now()}`;
    this.createdAt = new Date();
    this.username = username;
    this.email = email;
    this.fullName = fullName;
    this.age = age;
  }

  getInfo(): string {
    return `${this.fullName} (@${this.username}, ${this.age}yo)`;
  }
}

// Usage
console.log("=== Creating Valid User ===");
const user1 = new User("alice_dev", "alice@example.com", "  Alice Smith  ", 28);
console.log(user1.getInfo());
console.log(`ID: ${user1.id}`);
console.log(`Created: ${user1.createdAt.toISOString()}`);
console.log(`Username: "${user1.username}"`);
console.log(`FullName: "${user1.fullName}"`);

console.log("\n=== Trying Invalid Values ===");

try {
  const user2 = new User("ab", "alice@example.com", "Bob", 25);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

try {
  const user3 = new User("bob", "invalid-email", "Bob", 25);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

try {
  const user4 = new User("bob", "bob@test.com", "Bob", 200);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

console.log("\n=== Trying to Modify ReadOnly ===");
user1.username = "new_username";  // This works (not readonly)
console.log("Username changed:", user1.username);

try {
  (user1 as any).id = "hacked-id";  // This should warn
  console.log("ID:", user1.id);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

// Output:
// === Creating Valid User ===
// Alice Smith (@alice_dev, 28yo)
// ID: user-1708272000000
// Created: 2026-02-18T...
// Username: "alice_dev"
// FullName: "Alice Smith"
//
// === Trying Invalid Values ===
// Error: username must be at least 3 characters (got 2)
// Error: Invalid email format: invalid-email
// Error: age must be between 0 and 150 (got 200)
//
// === Trying to Modify ReadOnly ===
// Username changed: new_username
// Cannot modify read-only property: id
// ID: user-1708272000000
