# Chapter 11: Async & External

**Duration**: 40 minutes | **Difficulty**: Intermediate

---

## Topics

### Promise Types

```typescript
const promise: Promise<number> = Promise.resolve(42);

// Promise.all
const all: Promise<[number, string]> = Promise.all([
  Promise.resolve(1),
  Promise.resolve("hello")
]);

// Promise.race
const race: Promise<number | string> = Promise.race([
  Promise.resolve(1),
  Promise.resolve("hello")
]);
```

### Async/Await Typing

```typescript
async function fetchData(id: number): Promise<{ name: string }> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// Async function always returns Promise
function getData(): Promise<string> {
  return Promise.resolve("data");
}
```

### Async Iterators

```typescript
async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for await (const num of asyncGenerator()) {
  console.log(num);
}
```

---

## Next Steps

Continue to Chapter 12: React TypeScript
