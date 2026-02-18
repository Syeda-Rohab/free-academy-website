# Exercise 1: Create a Logging Decorator

**Chapter**: 2 - Decorators

**Difficulty**: Easy | **Estimated Time**: 15 minutes

---

## Problem Statement

Create a method decorator `@Log` that logs method calls with their arguments and return values. The decorator should work with both synchronous and asynchronous methods.

---

## Requirements

1. Create a `@Log` decorator that:
   - Logs the method name
   - Logs the arguments passed to the method
   - Logs the return value
   - Works with both sync and async methods

2. Apply the decorator to a `Calculator` class with methods:
   - `add(a: number, b: number): number`
   - `subtract(a: number, b: number): number`
   - `multiply(a: number, b: number): number`
   - `divide(a: number, b: number): number`

3. Verify the logging output is correct

---

## Starter Code

```typescript
function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // Implement your decorator here
  const originalMethod = descriptor.value;
  
  // Modify descriptor.value to add logging
  
  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  subtract(a: number, b: number): number {
    return a - b;
  }

  // Add more methods with @Log decorator
}

// Test
const calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
```

---

## Constraints

- The decorator must preserve the original method's behavior
- The decorator must work with async methods
- Use `console.log` for logging

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const calc = new Calculator();
const result = calc.add(5, 3);
console.log("Result:", result);
```

**Expected Output** (format may vary):
```
Calling add with arguments: [5, 3]
Result of add: 8
Result: 8
```

### Test Case 2

**Input**:
```typescript
const result = calc.multiply(6, 7);
console.log("Result:", result);
```

**Expected Output**:
```
Calling multiply with arguments: [6, 7]
Result of multiply: 42
Result: 42
```

---

## Hints

<details>
<summary>Hint 1</summary>

Store the original method and replace `descriptor.value` with a wrapper function.

</details>

<details>
<summary>Hint 2</summary>

Use `originalMethod.apply(this, args)` to call the original method with correct context.

</details>

<details>
<summary>Hint 3</summary>

For async methods, the result will be a Promise - log it normally, the Promise will resolve correctly.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result of ${propertyKey}:`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  subtract(a: number, b: number): number {
    return a - b;
  }

  @Log
  multiply(a: number, b: number): number {
    return a * b;
  }

  @Log
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
}

// Test
const calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
calc.multiply(6, 7);
```

**Explanation**: The decorator wraps the original method, logging before and after the call. Using `apply()` preserves the `this` context.

</details>

---

## Submission

Complete the decorator and verify all test cases pass. Run with `npx ts-node --experimentalDecorators filename.ts`.
