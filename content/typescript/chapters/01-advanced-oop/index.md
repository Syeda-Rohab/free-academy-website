# Chapter 1: Advanced OOP in TypeScript

**Duration**: 45 minutes | **Difficulty**: Intermediate

---

## Learning Objectives

By the end of this chapter, you will be able to:

- Implement class inheritance and polymorphism in TypeScript
- Create and use abstract classes for common interfaces
- Apply access modifiers (public, private, protected, readonly) to control visibility
- Use getters and setters for computed properties
- Define static members for class-level functionality

---

## Prerequisites

- Basic understanding of classes in JavaScript/TypeScript
- Familiarity with object-oriented programming concepts
- TypeScript basics (types, interfaces)

---

## Topics

### Topic 1: Inheritance & Polymorphism

TypeScript supports class-based inheritance using the `extends` keyword. Child classes inherit properties and methods from parent classes and can override them.

#### Example 1.1: Basic Inheritance

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): string {
    return `${this.name} moved ${distance}m`;
  }
}

class Dog extends Animal {
  bark(): string {
    return `${this.name} says Woof!`;
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.move(10));  // "Buddy moved 10m"
console.log(myDog.bark());    // "Buddy says Woof!"
```

**Explanation**: The `Dog` class extends `Animal`, inheriting the `name` property and `move` method while adding its own `bark` method.

**Output**:
```
Buddy moved 10m
Buddy says Woof!
```

#### Example 1.2: Method Overriding (Polymorphism)

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return `${this.name} says Meow!`;
  }
}

class Cow extends Animal {
  makeSound(): string {
    return `${this.name} says Moo!`;
  }
}

const animals: Animal[] = [
  new Animal("Generic"),
  new Cat("Whiskers"),
  new Cow("Bessie")
];

animals.forEach(animal => {
  console.log(animal.makeSound());
});
```

**Explanation**: Each subclass overrides `makeSound()` to provide specific behavior. This demonstrates polymorphism - the same method call produces different results based on the actual object type.

**Output**:
```
Some generic sound
Whiskers says Meow!
Bessie says Moo!
```

#### Example 1.3: Using super()

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, ${this.age} years old`;
  }
}

class Employee extends Person {
  employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age);  // Call parent constructor
    this.employeeId = employeeId;
  }

  introduce(): string {
    const parentIntro = super.introduce();  // Call parent method
    return `${parentIntro}, Employee ID: ${this.employeeId}`;
  }
}

const emp = new Employee("Alice", 30, 12345);
console.log(emp.introduce());
```

**Explanation**: `super()` calls the parent constructor, and `super.introduce()` calls the parent method. This allows extending parent functionality.

**Output**:
```
Hi, I'm Alice, 30 years old, Employee ID: 12345
```

---

### Topic 2: Abstract Classes

Abstract classes cannot be instantiated directly and define a contract for subclasses.

#### Example 1.4: Abstract Class Implementation

```typescript
abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Abstract method - must be implemented by subclasses
  abstract getArea(): number;

  // Concrete method - can be used by subclasses
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

class Circle extends Shape {
  constructor(private radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(7)
];

shapes.forEach(shape => {
  console.log(shape.describe());
});
```

**Explanation**: `Shape` is abstract and cannot be instantiated. Subclasses must implement `getArea()`. This enforces a consistent interface.

**Output**:
```
I am a Rectangle with area 50
I am a Circle with area 153.93804002589985
```

---

### Topic 3: Access Modifiers

TypeScript provides `public`, `private`, `protected`, and `readonly` modifiers.

#### Example 1.5: Access Modifiers Demonstration

```typescript
class BankAccount {
  public accountNumber: string;      // Accessible everywhere
  private balance: number;           // Accessible only within class
  protected accountType: string;     // Accessible in class and subclasses
  public readonly createdAt: Date;   // Cannot be modified after creation

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
    const interest = this.balance * this.interestRate;  // Can access protected
    this.deposit(interest);
  }
}

const savings = new SavingsAccount("SAV-001", 1000);
savings.deposit(500);
savings.addInterest();
console.log(`Balance: $${savings.getBalance()}`);
console.log(`Account: ${savings.accountNumber} (${savings.accountType})`);
```

**Explanation**: 
- `public`: Accessible from anywhere
- `private`: Only accessible within the class
- `protected`: Accessible in class and subclasses
- `readonly`: Cannot be reassigned after initialization

**Output**:
```
Balance: $1575
Account: SAV-001 (Savings)
```

#### Example 1.6: Parameter Properties

```typescript
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number,
    public readonly category: string
  ) {}

  public getPrice(): number {
    return this.price;
  }

  public applyDiscount(percent: number): void {
    this.price = this.price * (1 - percent / 100);
  }
}

const product = new Product(1, "Laptop", 999.99, "Electronics");
console.log(`${product.name} - $${product.getPrice()}`);
console.log(`Category: ${product.category}`);
```

**Explanation**: Parameter properties combine declaration and assignment in the constructor, reducing boilerplate.

**Output**:
```
Laptop - $999.99
Category: Electronics
```

---

### Topic 4: Getters and Setters

Getters and setters allow computed properties with controlled access.

#### Example 1.7: Getters and Setters

```typescript
class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  // Getter
  get celsius(): number {
    return this._celsius;
  }

  // Setter with validation
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero");
    }
    this._celsius = value;
  }

  // Computed property (getter only)
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

temp.fahrenheit = 100;
console.log(`100°F = ${temp.celsius.toFixed(1)}°C`);
```

**Explanation**: Getters provide computed values, setters allow validation. The `_celsius` backing field is private, accessed through properties.

**Output**:
```
25°C = 77°F = 298.15K
100°F = 37.8°C
```

---

### Topic 5: Static Members

Static members belong to the class itself, not instances.

#### Example 1.8: Static Properties and Methods

```typescript
class MathUtils {
  static PI: number = Math.PI;
  static E: number = Math.E;

  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  // Cannot access instance members from static context
  static describe(): string {
    return `MathUtils: PI=${MathUtils.PI.toFixed(4)}`;
  }
}

console.log(MathUtils.PI);           // 3.141592653589793
console.log(MathUtils.add(5, 3));    // 8
console.log(MathUtils.multiply(4, 7)); // 28
console.log(MathUtils.describe());
```

**Explanation**: Static members are accessed via the class name, not instances. Useful for utility functions and constants.

**Output**:
```
3.141592653589793
8
28
MathUtils: PI=3.1416
```

#### Example 1.9: Static Factory Methods

```typescript
class User {
  private static userIdCounter: number = 1;

  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}

  static create(name: string, email: string): User {
    const id = User.userIdCounter++;
    return new User(id, name, email);
  }

  static createAdmin(name: string, email: string): AdminUser {
    return new AdminUser(User.userIdCounter++, name, email);
  }

  getInfo(): string {
    return `User ${this.id}: ${this.name} <${this.email}>`;
  }
}

class AdminUser extends User {
  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  getInfo(): string {
    return `[ADMIN] ${super.getInfo()}`;
  }
}

const user1 = User.create("Alice", "alice@example.com");
const user2 = User.create("Bob", "bob@example.com");
const admin = User.createAdmin("Charlie", "charlie@example.com");

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(admin.getInfo());
```

**Explanation**: Static factory methods provide controlled object creation with automatic ID assignment.

**Output**:
```
User 1: Alice <alice@example.com>
User 2: Bob <bob@example.com>
[ADMIN] User 3: Charlie <charlie@example.com>
```

---

## Summary

Key takeaways from this chapter:

1. **Inheritance** uses `extends` and `super()` for code reuse
2. **Abstract classes** define contracts that subclasses must implement
3. **Access modifiers** (`public`, `private`, `protected`, `readonly`) control visibility
4. **Getters/Setters** enable computed properties with validation
5. **Static members** belong to the class, not instances

---

## Quiz

1. What keyword is used for class inheritance in TypeScript?
   - a) `implements`
   - b) `extends` ✓
   - c) `inherits`
   - d) `parent`

2. Which access modifier allows access only within the class?
   - a) `public`
   - b) `protected`
   - c) `private` ✓
   - d) `readonly`

3. Can you instantiate an abstract class?
   - a) Yes
   - b) No ✓

4. How do you call a parent class constructor?
   - a) `this.parent()`
   - b) `super()` ✓
   - c) `base()`
   - d) `parent()`

5. Static members are accessed via:
   - a) Instance reference
   - b) Class name ✓
   - c) Both a and b
   - d) Neither

---

## Next Steps

Continue to Chapter 2: Decorators
