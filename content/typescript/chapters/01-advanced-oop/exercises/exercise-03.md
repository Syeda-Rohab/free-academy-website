# Exercise 3: Shape Calculator with Abstract Classes

**Chapter**: 1 - Advanced OOP in TypeScript

**Difficulty**: Medium | **Estimated Time**: 25 minutes

---

## Problem Statement

Create a geometry calculation system using abstract classes. Implement multiple shape classes that calculate area and perimeter, with a comparison feature.

---

## Requirements

1. Create abstract class `Shape` with:
   - `name` property (protected)
   - Abstract methods: `getArea()`, `getPerimeter()`
   - Concrete method: `compareArea(other: Shape)` that returns comparison string
   - Concrete method: `describe()` that returns formatted description

2. Implement concrete classes:
   - `Rectangle` (width, height)
   - `Circle` (radius)
   - `Triangle` (three sides: a, b, c)
   - `Square` (side) - should extend Rectangle

3. Create a `ShapeManager` class with:
   - Static method `findLargest(shapes: Shape[])` returns the shape with largest area
   - Static method `getTotalArea(shapes: Shape[])` returns sum of all areas

---

## Starter Code

```typescript
abstract class Shape {
  // Add protected name property
  
  constructor(name: string) {
    // Initialize name
  }
  
  // Declare abstract methods
  
  // Implement compareArea method
  
  // Implement describe method
}

class Rectangle extends Shape {
  // Implement rectangle
}

class Circle extends Shape {
  // Implement circle
}

class Triangle extends Shape {
  // Implement triangle (use Heron's formula)
}

class Square extends Rectangle {
  // Implement square using Rectangle
}

class ShapeManager {
  // Implement static methods
}
```

---

## Constraints

- Use Heron's formula for triangle area: `√(s(s-a)(s-b)(s-c))` where `s = (a+b+c)/2`
- Validate triangle inequality (sum of any two sides > third side)
- Square should reuse Rectangle's implementation

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const rect = new Rectangle(10, 5);
console.log(rect.describe());
```

**Expected Output**:
```
Rectangle: Area=50, Perimeter=30
```

### Test Case 2

**Input**:
```typescript
const circle = new Circle(7);
console.log(circle.describe());
```

**Expected Output**:
```
Circle: Area=153.94, Perimeter=43.98
```

### Test Case 3

**Input**:
```typescript
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(7),
  new Square(6)
];
const largest = ShapeManager.findLargest(shapes);
console.log(largest.describe());
```

**Expected Output**:
```
Circle: Area=153.94, Perimeter=43.98
```

---

## Hints

<details>
<summary>Hint 1</summary>

For Circle perimeter (circumference): `2 * π * r`

</details>

<details>
<summary>Hint 2</summary>

Square can extend Rectangle by calling `super(side, side)`

</details>

<details>
<summary>Hint 3</summary>

For `compareArea()`, compare `this.getArea()` with `other.getArea()` and return appropriate string.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
abstract class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;

  compareArea(other: Shape): string {
    const diff = this.getArea() - other.getArea();
    if (diff > 0) return `${this.name} is larger`;
    if (diff < 0) return `${other.name} is larger`;
    return "Both shapes have equal area";
  }

  describe(): string {
    return `${this.name}: Area=${this.getArea().toFixed(2)}, Perimeter=${this.getPerimeter().toFixed(2)}`;
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
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Invalid triangle: violates triangle inequality");
    }
  }

  getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
    this.name = "Square";
  }
}

class ShapeManager {
  static findLargest(shapes: Shape[]): Shape {
    if (shapes.length === 0) throw new Error("No shapes provided");
    return shapes.reduce((largest, current) => 
      current.getArea() > largest.getArea() ? current : largest
    );
  }

  static getTotalArea(shapes: Shape[]): number {
    return shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
  }
}

// Test
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Circle(7),
  new Square(6),
  new Triangle(3, 4, 5)
];

shapes.forEach(shape => console.log(shape.describe()));
console.log("\nLargest:", ShapeManager.findLargest(shapes).describe());
console.log("Total Area:", ShapeManager.getTotalArea(shapes).toFixed(2));
```

**Explanation**: Abstract class defines the contract. Each shape implements calculations specific to its geometry. Square inherits from Rectangle. ShapeManager provides utility functions for collections.

</details>

---

## Submission

Complete the code and verify all shapes calculate correctly.
