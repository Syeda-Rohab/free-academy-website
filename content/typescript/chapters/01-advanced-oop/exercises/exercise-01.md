# Exercise 1: Create a Class Hierarchy

**Chapter**: 1 - Advanced OOP in TypeScript

**Difficulty**: Easy | **Estimated Time**: 15 minutes

---

## Problem Statement

Create a class hierarchy for a vehicle management system. You need to implement a base class `Vehicle` and two subclasses `Car` and `Motorcycle`.

---

## Requirements

1. Create an abstract class `Vehicle` with:
   - Properties: `brand` (string), `model` (string), `year` (number)
   - Abstract method: `getDetails()` that returns a string
   - Concrete method: `getAge()` that returns the vehicle's age in years

2. Create a `Car` class that extends `Vehicle`:
   - Additional property: `doors` (number, default: 4)
   - Implement `getDetails()` to include door count

3. Create a `Motorcycle` class that extends `Vehicle`:
   - Additional property: `hasSidecar` (boolean, default: false)
   - Implement `getDetails()` to include sidecar information

4. Create at least 2 instances of each class and display their details

---

## Starter Code

```typescript
// Complete the abstract class
abstract class Vehicle {
  // Add properties here
  
  constructor(brand: string, model: string, year: number) {
    // Initialize properties
  }
  
  // Implement getAge() method
  
  // Declare abstract getDetails() method
}

// Create Car class

// Create Motorcycle class

// Test your classes
const myCar = new Car("Toyota", "Camry", 2020);
const myMotorcycle = new Motorcycle("Harley", "Iron 883", 2019);

console.log(myCar.getDetails());
console.log(myMotorcycle.getDetails());
```

---

## Constraints

- Use TypeScript strict mode
- All properties should have appropriate access modifiers
- The `getDetails()` method should return a formatted string

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const car = new Car("Honda", "Civic", 2021, 2);
console.log(car.getDetails());
```

**Expected Output** (format may vary):
```
2021 Honda Civic, Doors: 2
```

### Test Case 2

**Input**:
```typescript
const motorcycle = new Motorcycle("Yamaha", "MT-07", 2022, true);
console.log(motorcycle.getDetails());
```

**Expected Output**:
```
2022 Yamaha MT-07, Has Sidecar: Yes
```

---

## Hints

<details>
<summary>Hint 1</summary>

Use `abstract` keyword for the base class and the `getDetails()` method.

</details>

<details>
<summary>Hint 2</summary>

Use `super()` in the subclass constructors to call the parent constructor.

</details>

<details>
<summary>Hint 3</summary>

For `getAge()`, use `new Date().getFullYear() - this.year`.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
abstract class Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  getAge(): number {
    return new Date().getFullYear() - this.year;
  }

  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    public doors: number = 4
  ) {
    super(brand, model, year);
  }

  getDetails(): string {
    return `${this.year} ${this.brand} ${this.model}, Doors: ${this.doors}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    public hasSidecar: boolean = false
  ) {
    super(brand, model, year);
  }

  getDetails(): string {
    const sidecarText = this.hasSidecar ? "Yes" : "No";
    return `${this.year} ${this.brand} ${this.model}, Has Sidecar: ${sidecarText}`;
  }
}

// Test
const myCar = new Car("Toyota", "Camry", 2020);
const myMotorcycle = new Motorcycle("Harley", "Iron 883", 2019);

console.log(myCar.getDetails());
console.log(myMotorcycle.getDetails());
console.log(`Car age: ${myCar.getAge()} years`);
```

**Explanation**: The abstract `Vehicle` class defines the common interface. Subclasses implement `getDetails()` with their specific information. Default parameter values handle optional properties.

</details>

---

## Submission

Complete the starter code above and ensure all test cases pass. Run with `npx ts-node filename.ts`.
