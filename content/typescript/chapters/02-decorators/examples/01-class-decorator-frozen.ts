// Example 2.1: Basic Class Decorator
// Freezes the class prototype to prevent modifications

function Frozen(constructor: Function) {
  Object.freeze(constructor.prototype);
  Object.freeze(constructor.prototype.constructor);
}

@Frozen
class Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }

  setAge(newAge: number): void {
    this.age = newAge;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());

// Try to modify - will throw error in strict mode
try {
  (person as any).age = 31;
  console.log("Age modified successfully");
} catch (error) {
  console.log("Error:", (error as Error).message);
}

// Try to modify method - will throw error in strict mode
try {
  (person as any).greet = () => "Modified greeting";
  console.log("Method modified successfully");
} catch (error) {
  console.log("Error:", (error as Error).message);
}

// Output:
// Hello, I'm Alice
// Error: Cannot assign to read only property 'age' of object '#<Person>'
// Error: Cannot assign to read only property 'greet' of object '#<Person>'
