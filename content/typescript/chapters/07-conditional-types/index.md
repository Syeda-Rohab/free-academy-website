# Chapter 7: Conditional Types

**Duration**: 50 minutes | **Difficulty**: Advanced

---

## Topics

### Conditional Type Syntax
```typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">;  // true
type B = IsString<42>;       // false
```

### Distributive Conditionals
```typescript
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>;  // string[] | number[]
```

### Infer Keyword
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type MyFunc = () => string;
type Result = ReturnType<MyFunc>;  // string
```

### Built-in Examples
```typescript
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
type NonNullable<T> = T extends null | undefined ? never : T;
```

---

## Next Steps

Continue to Chapter 8: Type System Deep Dive
