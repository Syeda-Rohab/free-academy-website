// Example 1.1: Basic Inheritance
// This example demonstrates how a child class inherits from a parent class

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

// Usage
const myDog = new Dog("Buddy");
console.log(myDog.move(10));  // "Buddy moved 10m"
console.log(myDog.bark());    // "Buddy says Woof!"

// Verify inheritance
console.log(myDog instanceof Dog);    // true
console.log(myDog instanceof Animal); // true
