# Chapter 6: Mapped Types

**Duration**: 45 minutes | **Difficulty**: Advanced

---

## Topics

### Basic Mapped Types
```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

### Property Modifiers
```typescript
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};
```

### Template Literal Types
```typescript
type Events = "on" | "off";
type Directions = "Up" | "Down";
type EventHandlers = `${Events}${Directions}`;
// "onUp" | "onDown" | "offUp" | "offDown"
```

### Advanced Patterns
```typescript
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
```

---

## Next Steps

Continue to Chapter 7: Conditional Types
