// TypeScript Course Chapters - Complete Course
import { Chapter } from './types';

export const typescriptChapters: Chapter[] = [
  // CHAPTER 1: INTRODUCTION TO TYPESCRIPT
  {
    id: 'ts-ch1-intro',
    title: 'Chapter 1: Introduction to TypeScript',
    introduction: 'Learn what TypeScript is, why it\'s useful, and how to set up your development environment.',
    topics: ['What is TypeScript?', 'Benefits of TypeScript', 'Installation', 'First Program', 'tsconfig.json'],
    content: `
# What is TypeScript?

TypeScript is a **typed superset of JavaScript** that compiles to plain JavaScript. It was developed by Microsoft and adds optional static typing to JavaScript.

## Key Features

- **Static Typing**: Define types for variables, functions, and objects
- **Type Inference**: TypeScript can infer types automatically
- **Error Detection**: Catch errors during development, not at runtime
- **IDE Support**: Better autocomplete and IntelliSense
- **Modern JavaScript**: Use latest ES6+ features

## TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|---------|-----------|------------|
| Type System | Dynamic | Static (optional) |
| Error Detection | Runtime | Compile-time |
| IDE Support | Good | Excellent |
| Learning Curve | Easy | Moderate |
| File Extension | .js | .ts |
`,
    codeExamples: [
      {
        title: 'First TypeScript Program',
        code: `// Variable with type annotation
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

console.log(\`Hello, \${name}!\`);
console.log(\`Age: \${age}\`);
console.log(\`Active: \${isActive}\`);

// Function with types
function greet(person: string): string {
  return "Hello, " + person;
}

console.log(greet("Bob"));`,
        explanation: 'TypeScript adds type annotations to variables and functions for better type safety.'
      },
      {
        title: 'Type Inference',
        code: `// TypeScript infers types automatically
let message = "Hello";  // inferred as string
let count = 42;         // inferred as number
let flag = true;        // inferred as boolean

// This will cause an error:
// message = 123;  // Error: Type 'number' is not assignable to type 'string'`,
        explanation: 'TypeScript can automatically infer types, so explicit annotations are often optional.'
      },
      {
        title: 'tsconfig.json Setup',
        code: `{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}`,
        explanation: 'tsconfig.json configures how TypeScript compiles your code.'
      }
    ],
    quiz: {
      id: 'ts-ch1-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is TypeScript?',
          options: [
            'A typed superset of JavaScript',
            'A programming language',
            'A database',
            'A web framework'
          ],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'How do you install TypeScript?',
          options: [
            'npm install -g typescript',
            'pip install typescript',
            'yarn add typescript',
            'npm install typescript --save'
          ],
          correctAnswer: 0
        },
        {
          id: 'q3',
          question: 'What file extension does TypeScript use?',
          options: ['.ts', '.js', '.tsx', '.ts and .tsx'],
          correctAnswer: 3
        }
      ]
    },
    summary: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, better IDE support, and catches errors at compile-time.'
  },

  // CHAPTER 2: BASIC TYPES
  {
    id: 'ts-ch2-basic-types',
    title: 'Chapter 2: Basic Types',
    introduction: 'Learn about TypeScript basic types including strings, numbers, booleans, arrays, and more.',
    topics: ['String', 'Number', 'Boolean', 'Array', 'Tuple', 'Enum', 'Any', 'Void', 'Null and Undefined'],
    content: `
# Basic Types in TypeScript

TypeScript provides several basic types that you can use to annotate your variables and functions.

## String

Strings represent text data.

\`\`\`typescript
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = \`Hello \${firstName}\`;
\`\`\`

## Number

Numbers in TypeScript are floating point values (like JavaScript).

\`\`\`typescript
let age: number = 25;
let price: number = 19.99;
let binary: number = 0b1010;  // Binary
let hex: number = 0xA;        // Hexadecimal
\`\`\`

## Boolean

Booleans represent true/false values.

\`\`\`typescript
let isActive: boolean = true;
let isComplete: boolean = false;
\`\`\`

## Array

Arrays can be typed in two ways:

\`\`\`typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
\`\`\`

## Tuple

Tuples are arrays with fixed length and known types.

\`\`\`typescript
let person: [string, number] = ["Alice", 25];
let first: string = person[0];  // "Alice"
let second: number = person[1]; // 25
\`\`\`

## Enum

Enums allow you to define named constants.

\`\`\`typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let favoriteColor: Color = Color.Red;
\`\`\`

## Any

Use 'any' when you don't know the type (avoid when possible).

\`\`\`typescript
let flexible: any = 4;
flexible = "now a string";
flexible = { key: "value" };
\`\`\`

## Void

Void represents the absence of a value (used for functions).

\`\`\`typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement needed
}
\`\`\`

## Null and Undefined

\`\`\`typescript
let u: undefined = undefined;
let n: null = null;
\`\`\`
`,
    codeExamples: [
      {
        title: 'All Basic Types',
        code: `// String
let name: string = "Alice";

// Number
let age: number = 25;
let price: number = 19.99;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let person: [string, number, boolean] = ["Alice", 25, true];

// Enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

let currentStatus: Status = Status.Pending;

// Any (use sparingly!)
let unknown: any = "can be anything";

// Void
function log(msg: string): void {
  console.log(msg);
}

console.log(\`Name: \${name}\`);
console.log(\`Age: \${age}\`);
console.log(\`Status: \${currentStatus}\`);`,
        explanation: 'This example demonstrates all the basic types available in TypeScript.'
      },
      {
        title: 'Type Safety Example',
        code: `let score: number = 100;

// These work:
score = 95;
score = score + 5;

// This causes a compile error:
// score = "100";  // Error: Type 'string' is not assignable to type 'number'

let colors: string[] = ["red", "green", "blue"];

// This works:
colors.push("yellow");

// This causes an error:
// colors.push(123);  // Error: Type 'number' is not assignable to type 'string'`,
        explanation: 'TypeScript catches type errors at compile-time, preventing runtime bugs.'
      }
    ],
    quiz: {
      id: 'ts-ch2-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you declare an array of numbers?',
          options: [
            'let nums: number[]',
            'let nums: Array<number>',
            'Both of the above',
            'None of the above'
          ],
          correctAnswer: 2
        },
        {
          id: 'q2',
          question: 'What type represents no value?',
          options: ['null', 'undefined', 'void', 'any'],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'What is a Tuple?',
          options: [
            'An array with fixed length and known types',
            'A regular array',
            'An object',
            'A function'
          ],
          correctAnswer: 0
        }
      ]
    },
    summary: 'TypeScript basic types include string, number, boolean, array, tuple, enum, any, void, null, and undefined. Using these types helps catch errors early and improves code documentation.'
  },

  // CHAPTER 3: INTERFACES AND TYPE ALIASES
  {
    id: 'ts-ch3-interfaces',
    title: 'Chapter 3: Interfaces and Type Aliases',
    introduction: 'Learn how to define custom types using interfaces and type aliases.',
    topics: ['Interfaces', 'Type Aliases', 'Optional Properties', 'Readonly Properties', 'Intersection Types'],
    content: `
# Interfaces and Type Aliases

TypeScript allows you to define custom types for complex objects.

## Interfaces

Interfaces define the shape of an object.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
\`\`\`

## Type Aliases

Type aliases create a name for any type.

\`\`\`typescript
type Point = {
  x: number;
  y: number;
};

type Color = "red" | "green" | "blue";

type ID = string | number;
\`\`\`

## Interface vs Type Alias

| Feature | Interface | Type Alias |
|---------|-----------|------------|
| Object Shapes | ✓ | ✓ |
| Unions | ✗ | ✓ |
| Tuples | ✗ | ✓ |
| Declaration Merging | ✓ | ✗ |
| Extends | ✓ | ✓ (with &) |

## Optional Properties

Mark properties as optional with \`?\`:

\`\`\`typescript
interface Car {
  make: string;
  model: string;
  year?: number;  // Optional
  color?: string; // Optional
}
\`\`\`

## Readonly Properties

Make properties immutable:

\`\`\`typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = 2;  // Error! Cannot assign to 'id'
\`\`\`
`,
    codeExamples: [
      {
        title: 'Interface Example',
        code: `interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;  // Optional
  readonly createdAt: Date;
}

const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 1999,
  description: "Powerful laptop",
  createdAt: new Date()
};

console.log(laptop.name);
console.log(laptop.price);`,
        explanation: 'Interfaces define the structure of objects with required and optional properties.'
      },
      {
        title: 'Type Alias Example',
        code: `type Point = {
  x: number;
  y: number;
};

type Color = "red" | "green" | "blue";

type Circle = {
  center: Point;
  radius: number;
  color: Color;
};

const myCircle: Circle = {
  center: { x: 0, y: 0 },
  radius: 10,
  color: "red"
};

console.log(myCircle);`,
        explanation: 'Type aliases can create complex types including unions and nested objects.'
      },
      {
        title: 'Intersection Types',
        code: `interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// Intersection type
type Staff = Person & Employee;

const manager: Staff = {
  name: "John",
  age: 35,
  employeeId: 123,
  department: "Engineering"
};

console.log(manager);`,
        explanation: 'Intersection types combine multiple types into one.'
      }
    ],
    quiz: {
      id: 'ts-ch3-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you make a property optional?',
          options: ['name?: string', 'name: string?', 'optional name: string', 'name?: string?'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'What keyword makes a property immutable?',
          options: ['final', 'const', 'readonly', 'immutable'],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'How do you combine two types?',
          options: ['A + B', 'A | B', 'A & B', 'A && B'],
          correctAnswer: 2
        }
      ]
    },
    summary: 'Interfaces and type aliases allow you to define custom types. Interfaces are best for object shapes, while type aliases are more flexible and support unions and tuples.'
  },

  // CHAPTER 4: FUNCTIONS IN TYPESCRIPT
  {
    id: 'ts-ch4-functions',
    title: 'Chapter 4: Functions',
    introduction: 'Learn how to type functions, parameters, return types, and function overloads.',
    topics: ['Function Types', 'Optional Parameters', 'Default Parameters', 'Rest Parameters', 'Function Overloads'],
    content: `
# Functions in TypeScript

TypeScript provides powerful ways to type functions.

## Basic Function Types

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
};
\`\`\`

## Optional Parameters

\`\`\`typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}
\`\`\`

## Default Parameters

\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}
\`\`\`

## Rest Parameters

\`\`\`typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5);  // 15
\`\`\`

## Function Overloads

Define multiple function signatures:

\`\`\`typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Typed Functions',
        code: `// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with void return
function log(message: string): void {
  console.log(message);
}

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`;
}

// Function with default parameter
function welcome(name: string, title: string = "Mr."): string {
  return \`Welcome, \${title} \${name}!\`;
}

// Function with rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(add(5, 3));
console.log(greet("Alice"));
console.log(sumAll(1, 2, 3, 4, 5));`,
        explanation: 'Functions in TypeScript can have typed parameters, return types, optional parameters, default values, and rest parameters.'
      },
      {
        title: 'Function Overloads',
        code: `// Function overloads
function makeGreeting(name: string): string;
function makeGreeting(names: string[]): string[];
function makeGreeting(input: any): any {
  if (Array.isArray(input)) {
    return input.map(name => \`Hello, \${name}!\`);
  }
  return \`Hello, \${input}!\`;
}

console.log(makeGreeting("Alice"));
console.log(makeGreeting(["Alice", "Bob", "Charlie"]));`,
        explanation: 'Function overloads allow you to define multiple call signatures for a single function.'
      },
      {
        title: 'Function Type Alias',
        code: `// Type alias for function
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));`,
        explanation: 'You can create type aliases for function signatures to reuse them.'
      }
    ],
    quiz: {
      id: 'ts-ch4-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you specify a function return type?',
          options: ['function foo(): number {}', 'function foo -> number {}', 'function number foo() {}', 'def foo() -> number'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'What symbol makes a parameter optional?',
          options: ['*', '?', '!', '#'],
          correctAnswer: 1
        },
        {
          id: 'q3',
          question: 'How do you define rest parameters?',
          options: ['...args', '**args', '*args', 'args...'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Functions in TypeScript can have typed parameters and return types. You can use optional parameters, default values, rest parameters, and function overloads for flexible function definitions.'
  },

  // CHAPTER 5: GENERICS
  {
    id: 'ts-ch5-generics',
    title: 'Chapter 5: Generics',
    introduction: 'Learn about generics - a way to create reusable components that work with multiple types.',
    topics: ['Generic Functions', 'Generic Interfaces', 'Generic Constraints', 'Utility Types'],
    content: `
# Generics in TypeScript

Generics allow you to write reusable code that works with multiple types.

## Generic Functions

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
\`\`\`

## Generic Constraints

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Hello");  // Works
logLength([1, 2, 3]);  // Works
// logLength(42);  // Error: number doesn't have length
\`\`\`

## Common Generic Patterns

\`\`\`typescript
// Array type
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Object with key-value
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Generic Function',
        code: `// Generic identity function
function identity<T>(arg: T): T {
  return arg;
}

// Type is inferred
let result1 = identity("Hello");  // string
let result2 = identity(42);       // number

// Or explicitly specified
let result3 = identity<boolean>(true);

console.log(result1);
console.log(result2);
console.log(result3);`,
        explanation: 'Generics allow functions to work with any type while maintaining type safety.'
      },
      {
        title: 'Generic Interface',
        code: `interface Container<T> {
  value: T;
  getValue(): T;
}

class Box<T> implements Container<T> {
  constructor(public value: T) {}
  
  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(42);

console.log(stringBox.getValue());
console.log(numberBox.getValue());`,
        explanation: 'Generic interfaces and classes can work with any type specified at instantiation.'
      },
      {
        title: 'Generic Constraints',
        code: `// Constraint: T must have a length property
interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(item: T): void {
  console.log(\`\${item} has length \${item.length}\`);
}

printLength("Hello");      // String has length
printLength([1, 2, 3]);    // Array has length
// printLength(42);        // Error: number has no length

// Multiple constraints
function merge<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
console.log(merged);`,
        explanation: 'Constraints limit what types can be used with generics, ensuring required properties exist.'
      }
    ],
    quiz: {
      id: 'ts-ch5-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What symbol is used for generics?',
          options: ['<T>', '(T)', '{T}', '[T]'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'How do you constrain a generic type?',
          options: ['T extends Constraint', 'T implements Constraint', 'T : Constraint', 'T where Constraint'],
          correctAnswer: 0
        },
        {
          id: 'q3',
          question: 'Can generics work with multiple types?',
          options: ['Yes, <T, U, V>', 'No, only one type', 'Only with interfaces', 'Only with classes'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Generics enable writing reusable, type-safe code that works with multiple types. They are essential for creating flexible libraries and utilities.'
  },

  // CHAPTER 6: ADVANCED TYPES
  {
    id: 'ts-ch6-advanced-types',
    title: 'Chapter 6: Advanced Types',
    introduction: 'Explore advanced TypeScript types including unions, intersections, type guards, and utility types.',
    topics: ['Union Types', 'Intersection Types', 'Type Guards', 'Type Predicates', 'Utility Types', 'Mapped Types'],
    content: `
# Advanced Types

## Union Types

Combine multiple types:

\`\`\`typescript
type ID = string | number;

function printId(id: ID) {
  console.log(\`ID: \${id}\`);
}
\`\`\`

## Type Guards

Narrow down types at runtime:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function process(value: string | number) {
  if (typeof value === 'string') {
    // value is string here
    return value.toUpperCase();
  } else {
    // value is number here
    return value.toFixed(2);
  }
}
\`\`\`

## Utility Types

TypeScript provides built-in utility types:

- \`Partial<T>\`: Make all properties optional
- \`Required<T>\`: Make all properties required
- \`Readonly<T>\`: Make all properties readonly
- \`Pick<T, K>\`: Pick specific properties
- \`Omit<T, K>\`: Omit specific properties
- \`Record<K, T>\`: Create object type with keys
\`\`\`
`,
    codeExamples: [
      {
        title: 'Union Types',
        code: `type Status = "pending" | "processing" | "completed";

function updateStatus(status: Status) {
  console.log(\`Status: \${status}\`);
}

type Result = string | number | boolean;

function processResult(result: Result) {
  if (typeof result === "string") {
    console.log("String:", result);
  } else if (typeof result === "number") {
    console.log("Number:", result);
  } else {
    console.log("Boolean:", result);
  }
}

updateStatus("pending");
processResult("Success");
processResult(42);
processResult(true);`,
        explanation: 'Union types allow a value to be one of several types.'
      },
      {
        title: 'Type Guards',
        code: `// typeof guard
function process(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return !value;
  }
}

// instanceof guard
class Dog {
  bark() { return "Woof!"; }
}
class Cat {
  meow() { return "Meow!"; }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  } else {
    return animal.meow();
  }
}

// 'in' guard
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function move(animal: Bird | Fish) {
  if ('fly' in animal) {
    return animal.fly();
  } else {
    return animal.swim();
  }
}

console.log(process("hello"));
console.log(process(42));`,
        explanation: 'Type guards narrow down union types at runtime using typeof, instanceof, or in operators.'
      },
      {
        title: 'Utility Types',
        code: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - make all properties optional
type PartialUser = Partial<User>;

// Required - make all properties required
type RequiredUser = Required<PartialUser>;

// Pick - select specific properties
type UserName = Pick<User, 'name' | 'email'>;

// Omit - exclude specific properties
type UserWithoutAge = Omit<User, 'age'>;

// Record - create object with specific keys
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

const roles: UserRoles = {
  alice: 'admin',
  bob: 'user',
  charlie: 'guest'
};

console.log(roles);`,
        explanation: 'Utility types provide common type transformations that are useful in many scenarios.'
      }
    ],
    quiz: {
      id: 'ts-ch6-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you define a union type?',
          options: ['string | number', 'string & number', 'string <> number', 'string + number'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'What does Partial<T> do?',
          options: [
            'Makes all properties optional',
            'Makes all properties required',
            'Makes all properties readonly',
            'Picks specific properties'
          ],
          correctAnswer: 0
        },
        {
          id: 'q3',
          question: 'Which is NOT a type guard?',
          options: ['typeof', 'instanceof', 'in', 'extends'],
          correctAnswer: 3
        }
      ]
    },
    summary: 'Advanced types in TypeScript include union types, intersection types, type guards, and utility types. These features provide powerful ways to describe complex type relationships.'
  },

  // CHAPTER 7: CLASSES AND OOP
  {
    id: 'ts-ch7-classes',
    title: 'Chapter 7: Classes and OOP',
    introduction: 'Learn about classes, inheritance, access modifiers, and object-oriented programming in TypeScript.',
    topics: ['Classes', 'Inheritance', 'Access Modifiers', 'Abstract Classes', 'Implementing Interfaces'],
    content: `
# Classes and OOP in TypeScript

## Basic Class

\`\`\`typescript
class Person {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return \`Hello, I'm \${this.name}\`;
  }
}
\`\`\`

## Access Modifiers

- \`public\`: Accessible everywhere (default)
- \`private\`: Accessible only within the class
- \`protected\`: Accessible in class and subclasses

\`\`\`typescript
class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  
  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
\`\`\`

## Inheritance

\`\`\`typescript
class Animal {
  constructor(protected name: string) {}
  
  move(distance: number) {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
\`\`\`

## Abstract Classes

\`\`\`typescript
abstract class Shape {
  abstract calculateArea(): number;
  
  describe(): string {
    return "I am a shape";
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Class with Access Modifiers',
        code: `class Person {
  public name: string;
  private age: number;
  protected email: string;
  
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  public getInfo(): string {
    return \`\${this.name} is \${this.age} years old\`;
  }
  
  private getAge(): number {
    return this.age;
  }
  
  protected getEmail(): string {
    return this.email;
  }
}

const person = new Person("Alice", 25, "alice@example.com");
console.log(person.name);  // ✓ Public
console.log(person.getInfo());  // ✓ Public method
// console.log(person.age);  // ✗ Private
// console.log(person.email);  // ✗ Protected`,
        explanation: 'Access modifiers control visibility of class members.'
      },
      {
        title: 'Inheritance Example',
        code: `class Animal {
  constructor(protected name: string) {}
  
  move(distance: number = 0) {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }
  
  bark(): string {
    return "Woof!";
  }
  
  // Override parent method
  move(distance: number = 10) {
    console.log(\`\${this.name} the \${this.breed} runs \${distance}m\`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.bark();
dog.move(20);
console.log(dog.name);  // Accessible (protected in parent)`,
        explanation: 'Inheritance allows classes to extend and override parent class functionality.'
      },
      {
        title: 'Abstract Class',
        code: `abstract class Shape {
  constructor(protected name: string) {}
  
  abstract calculateArea(): number;
  
  describe(): string {
    return \`I am a \${this.name}\`;
  }
}

class Rectangle extends Shape {
  constructor(
    name: string,
    private width: number,
    private height: number
  ) {
    super(name);
  }
  
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(
    name: string,
    private radius: number
  ) {
    super(name);
  }
  
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle("Rectangle", 10, 5);
const circle = new Circle("Circle", 7);

console.log(rect.describe());
console.log(\`Area: \${rect.calculateArea()}\`);
console.log(circle.describe());
console.log(\`Area: \${circle.calculateArea().toFixed(2)}\`);`,
        explanation: 'Abstract classes define a blueprint for subclasses with abstract methods that must be implemented.'
      }
    ],
    quiz: {
      id: 'ts-ch7-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which modifier is accessible only in the class?',
          options: ['public', 'private', 'protected', 'internal'],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'What keyword is used for inheritance?',
          options: ['inherits', 'extends', 'implements', 'with'],
          correctAnswer: 1
        },
        {
          id: 'q3',
          question: 'Can you instantiate an abstract class?',
          options: ['Yes', 'No', 'Only with new', 'Only in strict mode'],
          correctAnswer: 1
        }
      ]
    },
    summary: 'TypeScript classes support OOP features like inheritance, access modifiers (public, private, protected), abstract classes, and interface implementation.'
  },

  // CHAPTER 8: ASYNC PROGRAMMING
  {
    id: 'ts-ch8-async',
    title: 'Chapter 8: Async Programming',
    introduction: 'Learn about promises, async/await, and asynchronous programming patterns in TypeScript.',
    topics: ['Promises', 'Async/Await', 'Promise.all', 'Error Handling', 'Fetch API'],
    content: `
# Async Programming in TypeScript

## Promises

\`\`\`typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}
\`\`\`

## Async/Await

\`\`\`typescript
async function getData(): Promise<string> {
  const data = await fetchData();
  return data;
}

async function main() {
  const result = await getData();
  console.log(result);
}
\`\`\`

## Error Handling

\`\`\`typescript
async function safeFetch(): Promise<string> {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
\`\`\`

## Promise.all

\`\`\`typescript
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch('/users').then(r => r.json()),
    fetch('/posts').then(r => r.json())
  ]);
  return { users, posts };
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Promise Example',
        code: `function fetchData(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "User " + id });
      } else {
        reject(new Error("Invalid ID"));
      }
    }, 1000);
  });
}

// Using .then()
fetchData(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));

// Using async/await
async function getUser() {
  try {
    const user = await fetchData(1);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

getUser();`,
        explanation: 'Promises represent asynchronous operations that may complete in the future.'
      },
      {
        title: 'Async/Await',
        code: `interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return await response.json();
}

async function getPosts() {
  try {
    const post = await fetchPost(1);
    console.log("Title:", post.title);
    console.log("Body:", post.body);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();`,
        explanation: 'Async/await provides a cleaner syntax for working with promises.'
      },
      {
        title: 'Promise.all Example',
        code: `async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json())
    ]);
    
    console.log(\`Fetched \${users.length} users\`);
    console.log(\`Fetched \${posts.length} posts\`);
    console.log(\`Fetched \${comments.length} comments\`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchMultipleData();`,
        explanation: 'Promise.all runs multiple promises in parallel and waits for all to complete.'
      }
    ],
    quiz: {
      id: 'ts-ch8-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What does async keyword do?',
          options: [
            'Makes a function return a promise',
            'Makes code run faster',
            'Pauses execution',
            'Creates a thread'
          ],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'What keyword waits for a promise?',
          options: ['wait', 'await', 'pause', 'sleep'],
          correctAnswer: 1
        },
        {
          id: 'q3',
          question: 'How do you handle multiple promises?',
          options: ['Promise.all()', 'Promise.waitAll()', 'Promise.race()', 'Promise.parallel()'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Async programming in TypeScript uses Promises and async/await syntax. Error handling is done with try/catch blocks, and Promise.all allows running multiple promises in parallel.'
  },

  // CHAPTER 9: DECORATORS
  {
    id: 'ts-ch9-decorators',
    title: 'Chapter 9: Decorators',
    introduction: 'Learn about decorators - a way to add metadata and modify classes, methods, and properties.',
    topics: ['Class Decorators', 'Method Decorators', 'Property Decorators', 'Decorator Factories', 'Metadata'],
    content: `
# Decorators in TypeScript

Decorators are functions that modify classes, methods, or properties.

Enable in tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
\`\`\`

## Class Decorator

\`\`\`typescript
function LogClass(constructor: Function) {
  console.log(\`Class \${constructor.name} created\`);
}

@LogClass
class Person {}
\`\`\`

## Method Decorator

\`\`\`typescript
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyName}\`);
    return original.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`

## Property Decorator

\`\`\`typescript
function LogProperty(target: any, propertyName: string) {
  console.log(\`Property \${propertyName} defined\`);
}

class User {
  @LogProperty
  name: string;
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Class Decorator',
        code: `// Enable with: "experimentalDecorators": true

function LogClass(prefix: string = '[LOG]') {
  return function(constructor: Function) {
    console.log(\`\${prefix} Class \${constructor.name} created\`);
  };
}

@LogClass('[INFO]')
class Person {
  constructor(public name: string) {}
}

@LogClass('[DEBUG]')
class Product {
  constructor(public title: string, public price: number) {}
}

const person = new Person("Alice");
const product = new Product("Laptop", 999);`,
        explanation: 'Class decorators are called when a class is defined and can modify or observe the class.'
      },
      {
        title: 'Method Decorator',
        code: `function LogExecutionTime() {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      const start = performance.now();
      const result = original.apply(this, args);
      const end = performance.now();
      console.log(\`\${propertyName} took \${(end - start).toFixed(2)}ms\`);
      return result;
    };
  };
}

class DataService {
  @LogExecutionTime()
  fetchData(query: string): string {
    // Simulate work
    for (let i = 0; i < 1000000; i++) {}
    return \`Data for \${query}\`;
  }
}

const service = new DataService();
service.fetchData("users");`,
        explanation: 'Method decorators can intercept and modify method calls.'
      },
      {
        title: 'Authorization Decorator',
        code: `function RequireAuth(roles: string[]) {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    
    descriptor.value = function(user: { role: string }, ...args: any[]) {
      if (!roles.includes(user.role)) {
        throw new Error(\`Access denied. Required: \${roles.join(', ')}\`);
      }
      return original.apply(this, args);
    };
  };
}

class AdminService {
  @RequireAuth(['admin', 'superadmin'])
  deleteUser(id: number): void {
    console.log(\`Deleting user \${id}\`);
  }
  
  @RequireAuth(['admin'])
  viewReports(): void {
    console.log('Viewing reports');
  }
}

const service = new AdminService();
service.deleteUser({ role: 'admin' }, 123);
// service.deleteUser({ role: 'user' }, 123); // Error!`,
        explanation: 'Decorators can add cross-cutting concerns like authorization.'
      }
    ],
    quiz: {
      id: 'ts-ch9-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you enable decorators in TypeScript?',
          options: [
            '"experimentalDecorators": true',
            '"decorators": true',
            '"enableDecorators": true',
            '"useDecorators": true'
          ],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'What symbol is used for decorators?',
          options: ['@', '#', '$', '&'],
          correctAnswer: 0
        },
        {
          id: 'q3',
          question: 'Can decorators take parameters?',
          options: ['Yes, via decorator factories', 'No, never', 'Only class decorators', 'Only method decorators'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Decorators provide a way to add metadata and modify classes, methods, and properties. They are commonly used in frameworks like Angular and NestJS.'
  },

  // CHAPTER 10: MODULES AND NAMESPACES
  {
    id: 'ts-ch10-modules',
    title: 'Chapter 10: Modules and Namespaces',
    introduction: 'Learn how to organize code using modules, imports, exports, and namespaces.',
    topics: ['ES6 Modules', 'Export', 'Import', 'Default Export', 'Re-export', 'Namespaces'],
    content: `
# Modules and Namespaces

## Named Exports

\`\`\`typescript
// math.ts
export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}
\`\`\`

## Named Imports

\`\`\`typescript
// app.ts
import { PI, add, Calculator } from './math';

console.log(PI);
console.log(add(2, 3));
\`\`\`

## Default Export

\`\`\`typescript
// logger.ts
export default class Logger {
  log(message: string) {
    console.log(message);
  }
}

// app.ts
import Logger from './logger';
\`\`\`

## Namespace

\`\`\`typescript
namespace MathUtils {
  export const PI = 3.14159;
  
  export function add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`
`,
    codeExamples: [
      {
        title: 'Module Exports',
        code: `// utils.ts (exporting module)
export const VERSION = '1.0.0';

export function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

export interface User {
  id: number;
  name: string;
}

export class UserService {
  getUser(id: number): User {
    return { id, name: 'User ' + id };
  }
}

// Default export
export default function main() {
  console.log('Main function');
}`,
        explanation: 'Modules can export multiple named items and one default export.'
      },
      {
        title: 'Module Imports',
        code: `// Import named exports
import { VERSION, greet, User, UserService } from './utils';

// Import default export
import mainFunction from './utils';

// Import all as namespace
import * as Utils from './utils';

// Import with alias
import { greet as sayHello } from './utils';

console.log(VERSION);
console.log(greet('Alice'));
console.log(Utils.greet('Bob'));
console.log(sayHello('Charlie'));
mainFunction();`,
        explanation: 'TypeScript supports various import syntaxes for different use cases.'
      },
      {
        title: 'Namespace Example',
        code: `namespace Database {
  export interface Connection {
    host: string;
    port: number;
  }
  
  export class QueryBuilder {
    constructor(private table: string) {}
    
    select(columns: string[]): string {
      return \`SELECT \${columns.join(', ')} FROM \${this.table}\`;
    }
    
    insert(data: Record<string, any>): string {
      const keys = Object.keys(data).join(', ');
      const values = Object.values(data).map(v => \`'\${v}'\`).join(', ');
      return \`INSERT INTO \${this.table} (\${keys}) VALUES (\${values})\`;
    }
  }
  
  export function connect(config: Connection): void {
    console.log(\`Connecting to \${config.host}:\${config.port}\`);
  }
}

const queryBuilder = new Database.QueryBuilder('users');
console.log(queryBuilder.select(['id', 'name', 'email']));
console.log(queryBuilder.insert({ name: 'Alice', email: 'alice@example.com' }));
Database.connect({ host: 'localhost', port: 5432 });`,
        explanation: 'Namespaces organize code into logical groups and prevent naming conflicts.'
      }
    ],
    quiz: {
      id: 'ts-ch10-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How many default exports can a module have?',
          options: ['One', 'Two', 'Unlimited', 'None'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'How do you import all exports from a module?',
          options: ['import * as Name from "module"', 'import all from "module"', 'import { * } from "module"', 'import "module"'],
          correctAnswer: 0
        },
        {
          id: 'q3',
          question: 'What keyword creates a namespace?',
          options: ['namespace', 'module', 'package', 'group'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Modules help organize code into separate files. TypeScript supports ES6 modules (import/export) and namespaces for code organization.'
  }
];
