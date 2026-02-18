// ============================================
// TYPESCRIPT ADVANCED COURSE - INTERMEDIATE TO ADVANCED
// Chapters 8-13
// ============================================

console.log("=== TYPESCRIPT ADVANCED COURSE ===\n");

// ============================================
// 8. DECORATORS
// ============================================

console.log("=== Chapter 8: Decorators ===");

// Class Decorator - logs when class is created
function LogClass(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@LogClass
class PersonDecorated {
  constructor(public name: string) {}
}

const personDecorated = new PersonDecorated("Alice");
console.log(`Person: ${personDecorated.name}`);

// Note: Method decorators require experimentalDecorators in tsconfig
// Decorator pattern example without actual decorator syntax
class CalculatorWithLogging {
  add(a: number, b: number): number {
    console.log(`[LOG] Adding ${a} + ${b}`);
    return a + b;
  }
}

const calcWithLog = new CalculatorWithLogging();
console.log(`Result: ${calcWithLog.add(5, 3)}`);

// Decorator Factory Pattern
function MethodLogger(prefix: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix} Calling ${propertyKey}`);
      return original.apply(this, args);
    };
  };
}

// ============================================
// 9. ASYNC/AWAIT AND PROMISES
// ============================================

console.log("\n=== Chapter 9: Async/Await and Promises ===");

// Promise Type
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 100);
  });
}

// Async/Await
async function loadData() {
  const data = await fetchData();
  console.log(`Async Result: ${data}`);
  return data;
}

// Run async function
loadData().then(result => {
  console.log(`Promise resolved: ${result}`);
});

// Promise.all
async function loadAllData() {
  const promise1 = Promise.resolve("First");
  const promise2 = Promise.resolve("Second");
  const promise3 = Promise.resolve("Third");

  const results = await Promise.all([promise1, promise2, promise3]);
  console.log(`Promise.all Results: ${results}`);
}

loadAllData();

// Async function with error handling
async function fetchWithRetry(url: string, retries: number = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`Attempt ${i + 1} for ${url}`);
      return `Data from ${url}`;
    } catch (error) {
      console.log(`Retry ${i + 1} failed`);
    }
  }
  throw new Error("All retries failed");
}

fetchWithRetry("https://api.example.com/data").then(result => {
  console.log(`Fetch Result: ${result}`);
});

// ============================================
// 10. MODULES AND IMPORTS/EXPORTS
// ============================================

console.log("\n=== Chapter 10: Modules ===");

// Named exports (simulated in single file)
export const PI = 3.14159;
export function circleArea(radius: number): number {
  return PI * radius * radius;
}

// Default export (simulated)
export default class Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

console.log(`Circle Area (r=5): ${circleArea(5)}`);

// Module augmentation pattern
declare global {
  interface String {
    toTitleCase(): string;
  }
}

String.prototype.toTitleCase = function(): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log(`Title Case: ${"hello".toTitleCase()}`);

// ============================================
// 11. TYPE GUARDS AND NARROWING
// ============================================

console.log("\n=== Chapter 11: Type Guards and Narrowing ===");

// typeof guard
function processValue(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    console.log(`Number: ${value * 2}`);
  } else {
    console.log(`Boolean: ${!value}`);
  }
}

processValue("hello");
processValue(42);
processValue(true);

// Custom Type Guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processUnknown(value: unknown) {
  if (isString(value)) {
    console.log(`Is String: ${value.toUpperCase()}`);
  }
}

processUnknown("test");

// Discriminated Unions
interface Square {
  kind: "square";
  size: number;
}

interface Circle3 {
  kind: "circle";
  radius: number;
}

type Shape2 = Square | Circle3;

function getArea(shape: Shape2): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      const _exhaustive: never = shape;
      throw new Error(`Unexpected shape: ${_exhaustive}`);
  }
}

console.log(`Square Area: ${getArea({ kind: "square", size: 5 })}`);
console.log(`Circle Area: ${getArea({ kind: "circle", radius: 3 })}`);

// Nullable types
function greetNullable(name: string | null | undefined) {
  if (name == null) {
    console.log("Hello, Guest!");
    return;
  }
  console.log(`Hello, ${name}!`);
}

greetNullable(null);
greetNullable("Alice");

// Non-null assertion
function processValueNonNull(value: string | null | undefined): number {
  return value!.length;  // Using ! to assert non-null
}

console.log(`Length: ${processValueNonNull("hello")}`);

// ============================================
// 12. MAPPED TYPES
// ============================================

console.log("\n=== Chapter 12: Mapped Types ===");

// Basic Mapped Type
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

interface Point2D {
  x: number;
  y: number;
}

const readonlyPoint: ReadonlyType<Point2D> = { x: 10, y: 20 };
console.log(`Readonly Point: (${readonlyPoint.x}, ${readonlyPoint.y})`);

// Partial Mapped Type
type PartialType<T> = {
  [P in keyof T]?: T[P];
};

interface Config {
  debug: boolean;
  timeout: number;
  url: string;
}

const partialConfig: PartialType<Config> = {
  debug: true
  // timeout and url are optional
};
console.log(`Partial Config: ${JSON.stringify(partialConfig)}`);

// Record Mapped Type
type Keys = "success" | "error" | "warning";
type Messages = Record<Keys, string>;

const messages: Messages = {
  success: "Operation completed",
  error: "Something went wrong",
  warning: "Check your input"
};
console.log(`Messages: ${JSON.stringify(messages)}`);

// Pick using Mapped Types
type PickType<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserNameOnly = PickType<User, 'name' | 'email'>;
const userName: UserNameOnly = { name: "Alice", email: "alice@example.com" };
console.log(`User Name Only: ${JSON.stringify(userName)}`);

// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedConfig {
  database: {
    host: string;
    port: number;
  };
  cache: {
    enabled: boolean;
    ttl: number;
  };
}

const deepPartialConfig: DeepPartial<NestedConfig> = {
  database: {
    host: "localhost"
    // port is optional now
  }
  // cache is optional now
};
console.log(`Deep Partial: ${JSON.stringify(deepPartialConfig)}`);

// ============================================
// 13. CONDITIONAL TYPES
// ============================================

console.log("\n=== Chapter 13: Conditional Types ===");

// Basic Conditional Type
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;  // true
type Test2 = IsString<number>;  // false

console.log("Conditional Types compiled successfully!");

// Extract Utility (Conditional Type)
type MyExtract<T, U> = T extends U ? T : never;

type Colors = "red" | "green" | "blue";
type PrimaryColors = MyExtract<Colors, "red" | "blue">;  // "red" | "blue"

const primary: PrimaryColors = "red";
console.log(`Primary Color: ${primary}`);

// Exclude Utility
type MyExclude<T, U> = T extends U ? never : T;

type SecondaryColors = MyExclude<Colors, "red">;  // "green" | "blue"
const secondary: SecondaryColors = "green";
console.log(`Secondary Color: ${secondary}`);

// Infer Keyword
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : never;

type FuncReturn = ReturnType2<() => string>;  // string
const returnVal: FuncReturn = "test";
console.log(`Inferred Return: ${returnVal}`);

// Extract Promise Type
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseResult = UnwrapPromise<Promise<string>>;  // string
type NonPromiseResult = UnwrapPromise<number>;  // number

const promiseResult: PromiseResult = "resolved";
const nonPromiseResult: NonPromiseResult = 42;
console.log(`Promise Result: ${promiseResult}`);
console.log(`Non-Promise Result: ${nonPromiseResult}`);

// Conditional Type with Arrays
type UnwrapArray<T> = T extends (infer U)[] ? U : T;

type ArrayElement = UnwrapArray<string[]>;  // string
type NonArray = UnwrapArray<number>;  // number

const arrayElement: ArrayElement = "item";
const nonArray: NonArray = 100;
console.log(`Array Element: ${arrayElement}`);
console.log(`Non-Array: ${nonArray}`);

// Advanced: Flatten nested types
type Flatten<T> = T extends Array<infer U> ? U : T;

type NestedArray = Flatten<number[][]>;  // number[]
const nested: NestedArray = [1, 2, 3];
console.log(`Flattened: ${nested}`);

// ============================================
// ADVANCED COURSE COMPLETION MESSAGE
// ============================================

console.log("\n" + "=".repeat(50));
console.log("🎉 TYPESCRIPT ADVANCED COURSE COMPLETED!");
console.log("=".repeat(50));
console.log("You've learned (Chapters 8-13):");
console.log("  ✓ Decorators (Class, Method, Property)");
console.log("  ✓ Async/Await and Promises");
console.log("  ✓ Modules and Imports/Exports");
console.log("  ✓ Type Guards and Narrowing");
console.log("  ✓ Mapped Types");
console.log("  ✓ Conditional Types");
console.log("=".repeat(50));
console.log("\n🏆 Congratulations! You've completed both Basic and Advanced TypeScript courses!");
console.log("=".repeat(50));
