# Chapter 3: Advanced Generics

**Duration**: 50 minutes | **Difficulty**: Advanced

---

## Learning Objectives

By the end of this chapter, you will be able to:

- Apply generic constraints using `extends`
- Create generic functions and classes
- Use `keyof` and indexed access types
- Build reusable generic utilities

---

## Prerequisites

- Understanding of basic generics (`<T>`)
- Familiarity with interfaces and type aliases

---

## Topics

### Topic 1: Generic Constraints

Generic constraints allow you to restrict what types can be used with a generic.

#### Example 3.1: Basic Constraint with `extends`

```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

logLength("hello");      // OK - string has length
logLength([1, 2, 3]);    // OK - array has length
logLength({ length: 5 }); // OK - object has length
// logLength(5);         // Error - number doesn't have length

// Output:
// Length: 5
// Length: 3
// Length: 5
```

**Explanation**: `T extends Lengthwise` ensures the type has a `length` property.

---

### Topic 2: Generic Functions and Classes

#### Example 3.2: Generic Function with Multiple Type Parameters

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "Alice" }, { age: 30 });
console.log(result);  // { name: "Alice", age: 30 }
console.log(result.name);  // OK
console.log(result.age);   // OK

// With constraint
function mergeConstrained<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}
```

---

### Topic 3: Keyof and Indexed Access Types

#### Example 3.3: Using `keyof` Operator

```typescript
interface Person {
  name: string;
  age: number;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30, email: "alice@example.com" };

console.log(getProperty(person, "name"));  // "Alice"
console.log(getProperty(person, "age"));   // 30
// getProperty(person, "invalid");  // Error

// keyof Person = "name" | "age" | "email"
type PersonKeys = keyof Person;
```

---

### Topic 4: Generic Utilities

#### Example 3.4: Building Generic Utilities

```typescript
// Extract property names of a specific type
type PropertyNamesOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  active: boolean;
}

type StringProps = PropertyNamesOfType<User, string>;  // "name" | "email"
type NumberProps = PropertyNamesOfType<User, number>;  // "id" | "age"

// Readonly by specific keys
type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type PartialReadonlyUser = ReadonlyByKeys<User, "id" | "email">;
```

---

## Summary

1. **Generic constraints** use `extends` to restrict type parameters
2. **Multiple type parameters** enable flexible combinations
3. **`keyof`** extracts property names as a union type
4. **Indexed access** (`T[K]`) gets property types dynamically

---

## Next Steps

Continue to Chapter 4: Modules and Namespaces
