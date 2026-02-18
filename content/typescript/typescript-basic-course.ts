// ============================================
// TYPESCRIPT BASIC COURSE - BEGINNER TO INTERMEDIATE
// Chapters 1-7
// ============================================

// ============================================
// 1. INTRODUCTION TO TYPESCRIPT
// ============================================

console.log("=== TYPESCRIPT BASIC COURSE ===\n");

// Variable with type annotation
let tsName: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

console.log("=== Chapter 1: Introduction ===");
console.log(`Hello, ${tsName}!`);
console.log(`Age: ${age}`);
console.log(`Active: ${isActive}`);

// Function with types
function greet(person: string): string {
  return "Hello, " + person;
}

console.log(greet("Bob"));

// Type Inference
let message = "Hello";  // inferred as string
let count = 42;         // inferred as number
let flag = true;        // inferred as boolean

// ============================================
// 2. BASIC TYPES
// ============================================

console.log("\n=== Chapter 2: Basic Types ===");

// String
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `Hello ${firstName}`;
console.log(`Name: ${fullName}`);

// Number
let price: number = 19.99;
let binary: number = 0b1010;
let hex: number = 0xA;
console.log(`Price: ${price}, Binary: ${binary}, Hex: ${hex}`);

// Boolean
let isComplete: boolean = false;
console.log(`Complete: ${isComplete}`);

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(`Numbers: ${numbers}`);
console.log(`Names: ${names.join(", ")}`);

// Tuple
let person: [string, number, boolean] = ["Alice", 25, true];
console.log(`Person Tuple: ${person}`);

// Enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

let currentStatus: Status = Status.Pending;
console.log(`Status: ${currentStatus}`);

// Any (use sparingly!)
let unknown: any = "can be anything";
unknown = 123;
unknown = { key: "value" };

// Void
function log(msg: string): void {
  console.log(`Log: ${msg}`);
}
log("This is a void function");

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// ============================================
// 3. INTERFACES AND TYPE ALIASES
// ============================================

console.log("\n=== Chapter 3: Interfaces and Type Aliases ===");

interface Product {
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

console.log(`Product: ${laptop.name} - $${laptop.price}`);

// Type Alias
type Point = {
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

console.log(`Circle: center=(${myCircle.center.x}, ${myCircle.center.y}), radius=${myCircle.radius}`);

// Intersection Types
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const manager: Staff = {
  name: "John",
  age: 35,
  employeeId: 123,
  department: "Engineering"
};

console.log(`Manager: ${manager.name}, Dept: ${manager.department}`);

// ============================================
// 4. FUNCTIONS IN TYPESCRIPT
// ============================================

console.log("\n=== Chapter 4: Functions ===");

// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with void return
function logMessage(message: string): void {
  console.log(`Message: ${message}`);
}

// Function with optional parameter
function greetOptional(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// Function with default parameter
function welcome(name: string, title: string = "Mr."): string {
  return `Welcome, ${title} ${name}!`;
}

// Function with rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(`Add: ${add(5, 3)}`);
console.log(`Multiply: ${multiply(4, 7)}`);
logMessage("Hello from function");
console.log(greetOptional("Alice"));
console.log(greetOptional("Bob", "Good morning"));
console.log(welcome("Charlie"));
console.log(welcome("Diana", "Dr."));
console.log(`Sum All: ${sumAll(1, 2, 3, 4, 5)}`);

// Function Overloads
function makeGreeting(name: string): string;
function makeGreeting(names: string[]): string[];
function makeGreeting(input: any): any {
  if (Array.isArray(input)) {
    return input.map(name => `Hello, ${name}!`);
  }
  return `Hello, ${input}!`;
}

console.log(makeGreeting("Alice"));
console.log(makeGreeting(["Alice", "Bob", "Charlie"]));

// Function Type Alias
type MathOperation = (a: number, b: number) => number;

const addOp: MathOperation = (a, b) => a + b;
const subtractOp: MathOperation = (a, b) => a - b;

console.log(`Math Op Add: ${addOp(10, 5)}`);
console.log(`Math Op Subtract: ${subtractOp(10, 5)}`);

// ============================================
// 5. GENERICS
// ============================================

console.log("\n=== Chapter 5: Generics ===");

// Generic identity function
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity("Hello");  // string
let result2 = identity(42);       // number
let result3 = identity<boolean>(true);

console.log(`Identity String: ${result1}`);
console.log(`Identity Number: ${result2}`);
console.log(`Identity Boolean: ${result3}`);

// Generic Interface
interface Container<T> {
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

console.log(`String Box: ${stringBox.getValue()}`);
console.log(`Number Box: ${numberBox.getValue()}`);

// Generic Constraints
interface HasLength {
  length: number;
}

function printLength<T extends HasLength>(item: T): void {
  console.log(`${item} has length ${item.length}`);
}

printLength("Hello");
printLength([1, 2, 3]);

// Multiple constraints - merge function
function merge<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
console.log(`Merged: ${JSON.stringify(merged)}`);

// Generic Array Function
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(`Wrapped: ${wrapInArray("single")}`);

// ============================================
// 6. ADVANCED TYPES
// ============================================

console.log("\n=== Chapter 6: Advanced Types ===");

// Union Types
type StatusType = "pending" | "processing" | "completed";

function updateStatus(status: StatusType) {
  console.log(`Status: ${status}`);
}

updateStatus("pending");

type Result = string | number | boolean;

function processResult(result: Result) {
  if (typeof result === "string") {
    console.log(`String Result: ${result}`);
  } else if (typeof result === "number") {
    console.log(`Number Result: ${result}`);
  } else {
    console.log(`Boolean Result: ${result}`);
  }
}

processResult("Success");
processResult(42);
processResult(true);

// Type Guards
function processValue2(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return !value;
  }
}

console.log(`Process String: ${processValue2("hello")}`);
console.log(`Process Number: ${processValue2(42)}`);

// instanceof guard
class DogBasic {
  bark(): string { return "Woof!"; }
}
class CatBasic {
  meow(): string { return "Meow!"; }
}

function makeSound(animal: DogBasic | CatBasic) {
  if (animal instanceof DogBasic) {
    return animal.bark();
  } else {
    return animal.meow();
  }
}

const myDogBasic = new DogBasic();
const myCatBasic = new CatBasic();
console.log(`Dog Sound: ${makeSound(myDogBasic)}`);
console.log(`Cat Sound: ${makeSound(myCatBasic)}`);

// Utility Types
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - make all properties optional
type PartialUser = Partial<User>;

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

console.log(`User Roles: ${JSON.stringify(roles)}`);

// ============================================
// 7. CLASSES AND OOP
// ============================================

console.log("\n=== Chapter 7: Classes and OOP ===");

// Basic Class
class AnimalBasic {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): string {
    return `${this.name} moved ${distance}m`;
  }
}

class DogExtended extends AnimalBasic {
  bark(): string {
    return `${this.name} says Woof!`;
  }
}

const myDogExtended = new DogExtended("Buddy");
console.log(myDogExtended.move(10));
console.log(myDogExtended.bark());

// Abstract Class
abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;

  describe(): string {
    return `I am a ${this.name} with area ${this.getArea()}`;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super("Rectangle");
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class CircleBasic extends Shape {
  constructor(private radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle(10, 5);
const circle = new CircleBasic(7);
console.log(rect.describe());
console.log(circle.describe());

// Access Modifiers
class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected accountType: string;
  public readonly createdAt: Date;

  constructor(accountNumber: string, initialBalance: number, accountType: string) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.accountType = accountType;
    this.createdAt = new Date();
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(accountNumber: string, initialBalance: number) {
    super(accountNumber, initialBalance, "Savings");
    this.interestRate = 0.05;
  }

  public addInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}

const savings = new SavingsAccount("SAV-001", 1000);
savings.deposit(500);
savings.addInterest();
console.log(`Balance: $${savings.getBalance()}`);

// Getters and Setters
class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero");
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }

  get kelvin(): number {
    return this._celsius + 273.15;
  }
}

const temp = new Temperature(25);
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F = ${temp.kelvin}K`);

// Static Members
class MathUtils {
  static PI: number = Math.PI;

  static add(a: number, b: number): number {
    return a + b;
  }

  static describe(): string {
    return `MathUtils: PI=${MathUtils.PI.toFixed(4)}`;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(5, 3));
console.log(MathUtils.describe());

// ============================================
// BASIC COURSE COMPLETION MESSAGE
// ============================================

console.log("\n" + "=".repeat(50));
console.log("🎉 TYPESCRIPT BASIC COURSE COMPLETED!");
console.log("=".repeat(50));
console.log("You've learned (Chapters 1-7):");
console.log("  ✓ Introduction to TypeScript");
console.log("  ✓ Basic Types (string, number, boolean, arrays)");
console.log("  ✓ Interfaces and Type Aliases");
console.log("  ✓ Functions with Type Safety");
console.log("  ✓ Generics and Reusable Code");
console.log("  ✓ Advanced Types (Unions, Guards, Utilities)");
console.log("  ✓ Classes and OOP");
console.log("=".repeat(50));
console.log("\n➡️  Next: Continue to TypeScript Advanced Course (Chapters 8-13)");
console.log("=".repeat(50));
