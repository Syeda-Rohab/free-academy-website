// Example 1.4: Abstract Classes
// Abstract classes define a contract for subclasses

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Abstract method - must be implemented by subclasses
  abstract getArea(): number;

  // Abstract method - must be implemented by subclasses
  abstract getPerimeter(): number;

  // Concrete method - can be used by subclasses
  describe(): string {
    return `I am a ${this.name} with area ${this.getArea().toFixed(2)} and perimeter ${this.getPerimeter().toFixed(2)}`;
  }

  // Another concrete method
  compareArea(other: Shape): string {
    const diff = this.getArea() - other.getArea();
    if (diff > 0) {
      return `${this.name} is larger`;
    } else if (diff < 0) {
      return `${other.name} is larger`;
    }
    return "Both shapes have equal area";
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super("Rectangle");
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(private a: number, private b: number, private c: number) {
    super("Triangle");
  }

  getArea(): number {
    // Heron's formula
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}

// Usage
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(7),
  new Triangle(3, 4, 5)
];

console.log("=== Shape Descriptions ===");
shapes.forEach(shape => {
  console.log(shape.describe());
});

console.log("\n=== Area Comparison ===");
console.log(shapes[0].compareArea(shapes[1]));

// This would cause a compile error - abstract class cannot be instantiated:
// const invalidShape = new Shape("Invalid");
