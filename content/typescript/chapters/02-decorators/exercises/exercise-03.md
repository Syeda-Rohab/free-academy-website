# Exercise 3: Validate Decorator with Metadata

**Chapter**: 2 - Decorators

**Difficulty**: Advanced | **Estimated Time**: 30 minutes

---

## Problem Statement

Create a validation system using property decorators and metadata reflection. The system should validate class properties based on decorator constraints.

---

## Requirements

1. Create the following property decorators:
   - `@MinLength(min: number)` - validates string minimum length
   - `@MaxLength(max: number)` - validates string maximum length
   - `@Min(min: number)` - validates number minimum value
   - `@Max(max: number)` - validates number maximum value
   - `@IsEmail()` - validates email format
   - `@IsPositive()` - validates number is positive

2. Create a `Validator` class with:
   - Static method `validate(obj: any): ValidationError[]` that returns array of validation errors
   - Should use metadata reflection to get validation rules

3. Create a `User` class with validated properties:
   - `username`: string, min 3, max 20
   - `email`: string, must be valid email
   - `age`: number, min 0, max 150
   - `bio`: string, max 500 characters, optional

4. Create a `Product` class with validated properties:
   - `name`: string, min 1, max 100
   - `price`: number, must be positive
   - `stock`: number, min 0

---

## Starter Code

```typescript
import "reflect-metadata";

const VALIDATION_METADATA_KEY = "validation_rules";

function MinLength(min: number) {
  return function (target: any, propertyKey: string) {
    // Store validation rule using metadata
  };
}

function MaxLength(max: number) {
  return function (target: any, propertyKey: string) {
    // Store validation rule using metadata
  };
}

// Add more decorators...

class Validator {
  static validate(obj: any): ValidationError[] {
    // Implement validation logic using metadata
    const errors: ValidationError[] = [];
    return errors;
  }
}

class ValidationError {
  constructor(
    public property: string,
    public value: any,
    public message: string
  ) {}
}

// Test
const user = new User("ab", "invalid", -5);
const errors = Validator.validate(user);
console.log("Validation errors:", errors);
```

---

## Constraints

- Use `reflect-metadata` for storing validation rules
- The `validate` method should check all properties with validation rules
- Return all errors (don't stop at first error)

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const user = new User("ab", "test@example.com", 25);
const errors = Validator.validate(user);
console.log(errors);
```

**Expected Output**:
```
[
  ValidationError {
    property: "username",
    value: "ab",
    message: "username must be at least 3 characters"
  }
]
```

### Test Case 2

**Input**:
```typescript
const user = new User("alice", "invalid-email", 200);
const errors = Validator.validate(user);
```

**Expected Output**:
```
[
  ValidationError { property: "email", value: "invalid-email", message: "Invalid email format" },
  ValidationError { property: "age", value: 200, message: "age must be at most 150" }
]
```

### Test Case 3

**Input**:
```typescript
const product = new Product("A", -10, 5);
const errors = Validator.validate(product);
```

**Expected Output**:
```
[
  ValidationError { property: "price", value: -10, message: "price must be positive" }
]
```

---

## Hints

<details>
<summary>Hint 1</summary>

Use `Reflect.defineMetadata(key, value, target, propertyKey)` to store validation rules per property.

</details>

<details>
<summary>Hint 2</summary>

Store validation rules as an array so multiple decorators can add rules to the same property.

</details>

<details>
<summary>Hint 3</summary>

Use `Object.getOwnPropertyNames(Object.getPrototypeOf(obj))` to get property names from the prototype.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
import "reflect-metadata";

const VALIDATION_METADATA_KEY = "validation_rules";

type ValidationRule = {
  type: string;
  value?: any;
  message: string;
};

class ValidationError {
  constructor(
    public property: string,
    public value: any,
    public message: string
  ) {}
}

function MinLength(min: number) {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "minLength",
      value: min,
      message: `${propertyKey} must be at least ${min} characters`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function MaxLength(max: number) {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "maxLength",
      value: max,
      message: `${propertyKey} must be at most ${max} characters`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function Min(min: number) {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "min",
      value: min,
      message: `${propertyKey} must be at least ${min}`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function Max(max: number) {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "max",
      value: max,
      message: `${propertyKey} must be at most ${max}`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function IsEmail() {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "email",
      message: `Invalid email format: ${propertyKey}`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function IsPositive() {
  return function (target: any, propertyKey: string) {
    const rule: ValidationRule = {
      type: "positive",
      message: `${propertyKey} must be positive`
    };
    addValidationRule(target, propertyKey, rule);
  };
}

function addValidationRule(target: any, propertyKey: string, rule: ValidationRule) {
  const existingRules: ValidationRule[] = Reflect.getMetadata(
    VALIDATION_METADATA_KEY,
    target,
    propertyKey
  ) || [];
  existingRules.push(rule);
  Reflect.defineMetadata(VALIDATION_METADATA_KEY, existingRules, target, propertyKey);
}

class Validator {
  static validate(obj: any): ValidationError[] {
    const errors: ValidationError[] = [];
    const prototype = Object.getPrototypeOf(obj);
    const propertyNames = Object.getOwnPropertyNames(prototype).filter(
      name => name !== "constructor"
    );

    for (const propName of propertyNames) {
      const rules: ValidationRule[] = Reflect.getMetadata(
        VALIDATION_METADATA_KEY,
        prototype,
        propName
      );

      if (!rules) continue;

      const value = obj[propName];

      for (const rule of rules) {
        if (this.validateRule(propName, value, rule)) {
          errors.push(new ValidationError(propName, value, rule.message));
        }
      }
    }

    return errors;
  }

  private static validateRule(
    property: string,
    value: any,
    rule: ValidationRule
  ): boolean {
    // Skip validation if value is null/undefined (optional)
    if (value == null) return false;

    switch (rule.type) {
      case "minLength":
        return typeof value === "string" && value.length < rule.value;
      case "maxLength":
        return typeof value === "string" && value.length > rule.value;
      case "min":
        return typeof value === "number" && value < rule.value;
      case "max":
        return typeof value === "number" && value > rule.value;
      case "positive":
        return typeof value === "number" && value <= 0;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return typeof value === "string" && !emailRegex.test(value);
      default:
        return false;
    }
  }
}

// User class
class User {
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsEmail
  email: string;

  @Min(0)
  @Max(150)
  age: number;

  @MaxLength(500)
  bio?: string;

  constructor(username: string, email: string, age: number, bio?: string) {
    this.username = username;
    this.email = email;
    this.age = age;
    this.bio = bio;
  }
}

// Product class
class Product {
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsPositive
  price: number;

  @Min(0)
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// Test
console.log("=== Testing User Validation ===\n");

const validUser = new User("alice_dev", "alice@example.com", 25);
console.log("Valid user errors:", Validator.validate(validUser));

const invalidUser1 = new User("ab", "test@example.com", 25);
console.log("\nInvalid user 1 (short username):");
console.log(Validator.validate(invalidUser1));

const invalidUser2 = new User("alice", "invalid-email", 200);
console.log("\nInvalid user 2 (bad email, age > 150):");
console.log(Validator.validate(invalidUser2));

console.log("\n=== Testing Product Validation ===\n");

const validProduct = new Product("Laptop", 999.99, 10);
console.log("Valid product errors:", Validator.validate(validProduct));

const invalidProduct = new Product("A", -10, -5);
console.log("\nInvalid product (negative price, negative stock):");
console.log(Validator.validate(invalidProduct));
```

**Explanation**: Each decorator stores validation rules as metadata. The Validator class retrieves all rules for each property and checks them against the actual values.

</details>

---

## Submission

Complete the decorators and Validator class. Run with `npx ts-node --experimentalDecorators --emitDecoratorMetadata filename.ts`.
