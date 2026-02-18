/**
 * ============================================
 * ADVANCED OOP IN TYPESCRIPT
 * Inheritance, Polymorphism, Access Modifiers
 * ============================================
 */

// ============================================
// 1. ACCESS MODIFIERS
// ============================================

class Animal {
  // Public - accessible everywhere
  public name: string;
  
  // Protected - accessible in class and subclasses
  protected age: number;
  
  // Private - accessible only in this class
  private id: string;
  
  // Readonly - can only be set in constructor or declaration
  readonly createdAt: Date;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
  }
  
  public getInfo(): string {
    return `${this.name} is ${this.age} years old (ID: ${this.id})`;
  }
  
  protected getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }
  
  // Can access protected members from parent
  getDogInfo(): string {
    return `${this.name} (${this.breed}) is ${this.age} years old`;
  }
  
  // Cannot access private members - this would error:
  // getId(): string { return this.id; } // ERROR!
}

// Usage
const dog = new Dog("Buddy", 3, "Golden Retriever");
console.log(dog.name); // ✓ Public - works
console.log(dog.getDogInfo()); // ✓ Works
// console.log(dog.age); // ✗ Protected - Error
// console.log(dog.id); // ✗ Private - Error

// ============================================
// 2. INHERITANCE & POLYMORPHISM
// ============================================

class Shape {
  constructor(protected x: number, protected y: number) {}
  
  draw(): void {
    console.log(`Drawing shape at (${this.x}, ${this.y})`);
  }
  
  calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(x: number, y: number, private radius: number) {
    super(x, y);
  }
  
  // Method Override (Polymorphism)
  draw(): void {
    console.log(`Drawing circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
  }
  
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(x: number, y: number, private width: number, private height: number) {
    super(x, y);
  }
  
  draw(): void {
    console.log(`Drawing rectangle at (${this.x}, ${this.y}) with ${this.width}x${this.height}`);
  }
  
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Polymorphism in action
const shapes: Shape[] = [
  new Circle(0, 0, 5),
  new Rectangle(10, 10, 4, 6),
];

shapes.forEach(shape => {
  shape.draw(); // Calls the appropriate overridden method
  console.log(`Area: ${shape.calculateArea()}`);
});

// ============================================
// 3. ABSTRACT CLASSES
// ============================================

abstract class Vehicle {
  // Can have concrete properties
  protected speed: number = 0;
  
  // Abstract method - must be implemented by subclasses
  abstract start(): void;
  abstract stop(): void;
  
  // Concrete method - can be used as-is or overridden
  accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Accelerating to ${this.speed} km/h`);
  }
  
  // Concrete method
  brake(): void {
    this.speed = 0;
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  constructor(private brand: string) {
    super();
  }
  
  start(): void {
    console.log(`${this.brand} car engine started`);
  }
  
  stop(): void {
    console.log(`${this.brand} car engine stopped`);
  }
}

class Motorcycle extends Vehicle {
  constructor(private brand: string) {
    super();
  }
  
  start(): void {
    console.log(`${this.brand} motorcycle started`);
  }
  
  stop(): void {
    console.log(`${this.brand} motorcycle stopped`);
  }
  
  // Override accelerate
  accelerate(amount: number): void {
    this.speed += amount * 1.5; // Motorcycles accelerate faster
    console.log(`Motorcycle accelerating to ${this.speed} km/h`);
  }
}

// Cannot instantiate abstract class:
// const vehicle = new Vehicle(); // ERROR!

const car = new Car("Toyota");
car.start();
car.accelerate(30);
car.brake();

// ============================================
// 4. GETTERS & SETTERS
// ============================================

class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  
  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  
  // Getter
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
  
  // Setter
  set fullName(value: string) {
    const [first, ...last] = value.split(' ');
    this._firstName = first;
    this._lastName = last.join(' ');
  }
  
  // Getter with validation
  get age(): number {
    return this._age;
  }
  
  // Setter with validation
  set age(value: number) {
    if (value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
  
  // Read-only getter (no setter)
  get initials(): string {
    return `${this._firstName[0]}.${this._lastName[0]}.`;
  }
}

const person = new Person("John", "Doe", 30);
console.log(person.fullName); // "John Doe"
console.log(person.initials); // "J.D."

person.fullName = "Jane Smith";
console.log(person.fullName); // "Jane Smith"

person.age = 35; // ✓ Valid
// person.age = 200; // ✗ Throws error

// ============================================
// 5. STATIC MEMBERS
// ============================================

class MathUtils {
  // Static property - shared across all instances
  private static instanceCount: number = 0;
  
  // Static readonly
  static readonly PI: number = Math.PI;
  
  // Static method
  static add(a: number, b: number): number {
    return a + b;
  }
  
  static multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Access static property from static method
  static getInstanceCount(): number {
    return MathUtils.instanceCount;
  }
  
  constructor() {
    MathUtils.instanceCount++;
  }
}

// Static members accessed on class, not instance
console.log(MathUtils.PI); // 3.14159...
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 7)); // 28

const m1 = new MathUtils();
const m2 = new MathUtils();
console.log(MathUtils.getInstanceCount()); // 2

// ============================================
// 6. COMPLETE EXAMPLE - BANKING SYSTEM
// ============================================

abstract class BankAccount {
  private static accountCounter: number = 0;
  
  protected readonly accountNumber: string;
  protected _balance: number;
  protected transactionHistory: string[] = [];
  
  constructor(protected owner: string, initialBalance: number) {
    BankAccount.accountCounter++;
    this.accountNumber = `ACC-${BankAccount.accountCounter.toString().padStart(6, '0')}`;
    this._balance = initialBalance;
    this.logTransaction(`Account opened with $${initialBalance}`);
  }
  
  // Abstract methods
  abstract getAccountType(): string;
  abstract getMonthlyFee(): number;
  
  // Concrete methods
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this._balance += amount;
    this.logTransaction(`Deposited $${amount}`);
  }
  
  withdraw(amount: number): void {
    if (amount > this._balance) throw new Error("Insufficient funds");
    this._balance -= amount;
    this.logTransaction(`Withdrew $${amount}`);
  }
  
  // Getters
  get balance(): number {
    return this._balance;
  }
  
  get accountInfo(): string {
    return `${this.getAccountType()} - ${this.owner} (${this.accountNumber}): $${this.balance}`;
  }
  
  // Static method
  static getAccountCount(): number {
    return BankAccount.accountCounter;
  }
  
  protected logTransaction(description: string): void {
    const timestamp = new Date().toISOString();
    this.transactionHistory.push(`[${timestamp}] ${description}`);
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner: string, initialBalance: number, private interestRate: number) {
    super(owner, initialBalance);
  }
  
  getAccountType(): string {
    return "Savings Account";
  }
  
  getMonthlyFee(): number {
    return 0; // No monthly fee
  }
  
  addInterest(): void {
    const interest = this._balance * (this.interestRate / 100);
    this._balance += interest;
    this.logTransaction(`Interest added: $${interest.toFixed(2)}`);
  }
}

class CheckingAccount extends BankAccount {
  constructor(owner: string, initialBalance: number, private overdraftLimit: number) {
    super(owner, initialBalance);
  }
  
  getAccountType(): string {
    return "Checking Account";
  }
  
  getMonthlyFee(): number {
    return 10; // $10 monthly fee
  }
  
  // Override withdraw with overdraft
  withdraw(amount: number): void {
    if (amount > this._balance + this.overdraftLimit) {
      throw new Error("Exceeds overdraft limit");
    }
    this._balance -= amount;
    this.logTransaction(`Withdrew $${amount}`);
  }
}

// Usage
const savings = new SavingsAccount("Alice", 1000, 5.5);
const checking = new CheckingAccount("Bob", 500, 200);

savings.deposit(500);
savings.addInterest();
console.log(savings.accountInfo);

checking.withdraw(600); // Within overdraft limit
console.log(checking.accountInfo);

console.log(`Total accounts: ${BankAccount.getAccountCount()}`);

export {};
