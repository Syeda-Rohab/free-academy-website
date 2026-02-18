// Example 2.3: Method Decorator - Logging
// Logs method calls with arguments and return values

function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  let callCount = 0;

  descriptor.value = function (...args: any[]) {
    callCount++;
    const timestamp = new Date().toISOString();
    
    console.log(`\n[${timestamp}]`);
    console.log(`  Method: ${propertyKey}`);
    console.log(`  Call #${callCount}`);
    console.log(`  Arguments:`, JSON.stringify(args));
    
    const result = originalMethod.apply(this, args);
    
    console.log(`  Result:`, JSON.stringify(result));
    console.log(`  Context:`, this.constructor.name);
    
    return result;
  };

  return descriptor;
}

/**
 * Enhanced logging with timing
 */
function LogWithTiming(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const startTime = performance.now();
    const result = originalMethod.apply(this, args);
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(3);

    console.log(
      `[${propertyKey}] executed in ${duration}ms`,
      `args: ${args.length}, result: ${JSON.stringify(result)}`
    );

    return result;
  };

  return descriptor;
}

class Calculator {
  private history: number[] = [];

  @Log
  add(a: number, b: number): number {
    const result = a + b;
    this.history.push(result);
    return result;
  }

  @Log
  subtract(a: number, b: number): number {
    return a - b;
  }

  @LogWithTiming
  multiply(a: number, b: number): number {
    // Simulate some computation
    let result = 0;
    for (let i = 0; i < b; i++) {
      result += a;
    }
    return result;
  }

  @LogWithTiming
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }

  getHistory(): number[] {
    return this.history;
  }
}

class DataService {
  private cache: Map<string, any> = new Map();

  @Log
  getData(key: string): any {
    if (this.cache.has(key)) {
      console.log(`  [CACHE HIT] ${key}`);
      return this.cache.get(key);
    }
    console.log(`  [CACHE MISS] ${key}`);
    const data = { key, value: `data-for-${key}`, timestamp: Date.now() };
    this.cache.set(key, data);
    return data;
  }

  @Log
  saveData(key: string, value: any): boolean {
    this.cache.set(key, value);
    console.log(`  [SAVE] ${key}`);
    return true;
  }
}

// Usage
console.log("=== Calculator Demo ===");
const calc = new Calculator();

console.log("\n--- Basic Operations ---");
calc.add(5, 3);
calc.subtract(10, 4);
calc.multiply(6, 7);
calc.divide(100, 4);

console.log("\n--- Data Service Demo ---");
const service = new DataService();

service.getData("user-1");  // Cache miss
service.getData("user-1");  // Cache hit
service.saveData("user-2", { name: "Bob" });
service.getData("user-2");  // Cache hit

console.log("\n--- Calculator History ---");
console.log("History:", calc.getHistory());

// Output (abbreviated):
// === Calculator Demo ===
//
// --- Basic Operations ---
//
// [2026-02-18T...]
//   Method: add
//   Call #1
//   Arguments: [5, 3]
//   Result: 8
//   Context: Calculator
//
// [multiply] executed in 0.023ms args: 2, result: 42
// ...
