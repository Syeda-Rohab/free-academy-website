# Chapter 9: Type Guards & Narrowing

**Duration**: 35 minutes | **Difficulty**: Intermediate

---

## Topics

### Built-in Guards

```typescript
// typeof
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

// instanceof
class Dog { bark() { return "Woof!"; } }
class Cat { meow() { return "Meow!"; } }

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.meow();
}

// in operator
function move(vehicle: { speed: number } | { flyHeight: number }) {
  if ("speed" in vehicle) {
    return `Driving at ${vehicle.speed}`;
  }
  return `Flying at ${vehicle.flyHeight}`;
}
```

### Custom Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function assertIsDefined<T>(value: T | null | undefined): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error("Value is null or undefined");
  }
}
```

### Control Flow Analysis

```typescript
function process(value: string | null) {
  if (!value) return;
  // value is narrowed to string here
  return value.trim();
}
```

---

## Next Steps

Continue to Chapter 10: Advanced Interfaces
