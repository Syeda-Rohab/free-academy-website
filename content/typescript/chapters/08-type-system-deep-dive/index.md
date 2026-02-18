# Chapter 8: Type System Deep Dive

**Duration**: 45 minutes | **Difficulty**: Advanced

---

## Topics

### Never vs Unknown vs Any

```typescript
// never - unreachable/empty type
function throwError(msg: string): never {
  throw new Error(msg);
}

// unknown - type-safe any
function safeParse(json: string): unknown {
  return JSON.parse(json);
}

// any - opt-out of type checking
let flexible: any = 42;
flexible = "string";
flexible.method();  // No error
```

### Type Guards

```typescript
// typeof guard
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// instanceof guard
function handle(event: MouseEvent | KeyboardEvent) {
  if (event instanceof MouseEvent) {
    console.log(event.clientX);
  }
}
```

### Discriminated Unions

```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
    case "rectangle": return shape.width * shape.height;
  }
}
```

### Exhaustive Checks

```typescript
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
```

---

## Next Steps

Continue to Chapter 9: Type Guards & Narrowing
