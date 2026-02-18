// Example 1.2: Method Overriding (Polymorphism)
// This example demonstrates polymorphism - same method, different behaviors

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

class Duck extends Animal {
  makeSound(): string {
    return `${this.name} says Quack!`;
  }
}

// Polymorphic behavior - array of base type, different implementations
const animals: Animal[] = [
  new Animal("Generic"),
  new Cat("Whiskers"),
  new Cow("Bessie"),
  new Duck("Donald")
];

console.log("=== Animal Sounds ===");
animals.forEach(animal => {
  console.log(animal.makeSound());
});

// Output:
// Some generic sound
// Whiskers says Meow!
// Bessie says Moo!
// Donald says Quack!
