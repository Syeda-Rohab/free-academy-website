// Example 1.8: Static Properties and Methods
// Members that belong to the class, not instances

class MathUtils {
  // Static properties (constants)
  static readonly PI: number = Math.PI;
  static readonly E: number = Math.E;
  static readonly GOLDEN_RATIO: number = 1.618033988749895;

  // Static property (mutable)
  private static calculationCount: number = 0;

  // Static method - basic operations
  static add(a: number, b: number): number {
    MathUtils.calculationCount++;
    return a + b;
  }

  static subtract(a: number, b: number): number {
    MathUtils.calculationCount++;
    return a - b;
  }

  static multiply(a: number, b: number): number {
    MathUtils.calculationCount++;
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    MathUtils.calculationCount++;
    return a / b;
  }

  // Static method - using static properties
  static circleArea(radius: number): number {
    return MathUtils.PI * radius ** 2;
  }

  // Static method - get calculation count
  static getCalculationCount(): number {
    return MathUtils.calculationCount;
  }

  // Static method - reset counter
  static resetCounter(): void {
    MathUtils.calculationCount = 0;
  }

  // Static method - describe the class
  static describe(): string {
    return `MathUtils: PI=${MathUtils.PI.toFixed(4)}, E=${MathUtils.E.toFixed(4)}, Calculations=${MathUtils.calculationCount}`;
  }
}

// Usage
console.log("=== MathUtils Demo ===");
console.log(`PI: ${MathUtils.PI.toFixed(6)}`);
console.log(`E: ${MathUtils.E.toFixed(6)}`);
console.log(`Golden Ratio: ${MathUtils.GOLDEN_RATIO.toFixed(6)}`);

console.log("\n=== Calculations ===");
console.log(`5 + 3 = ${MathUtils.add(5, 3)}`);
console.log(`10 - 4 = ${MathUtils.subtract(10, 4)}`);
console.log(`6 × 7 = ${MathUtils.multiply(6, 7)}`);
console.log(`20 ÷ 4 = ${MathUtils.divide(20, 4)}`);

console.log("\n=== Circle Area ===");
console.log(`Area of circle (r=5): ${MathUtils.circleArea(5).toFixed(4)}`);

console.log("\n=== Statistics ===");
console.log(`Total calculations: ${MathUtils.getCalculationCount()}`);
console.log(MathUtils.describe());

// This would cause an error - cannot access static members from instance:
// const utils = new MathUtils();
// console.log(utils.PI);  // Error

// Output:
// === MathUtils Demo ===
// PI: 3.141593
// E: 2.718282
// Golden Ratio: 1.618034
//
// === Calculations ===
// 5 + 3 = 8
// 10 - 4 = 6
// 6 × 7 = 42
// 20 ÷ 4 = 5
//
// === Circle Area ===
// Area of circle (r=5): 78.5398
//
// === Statistics ===
// Total calculations: 5
// MathUtils: PI=3.1416, E=2.7183, Calculations=5
