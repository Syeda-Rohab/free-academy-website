# Exercise 1: Generic Data Structure

**Chapter**: 3 - Advanced Generics

**Difficulty**: Medium | **Estimated Time**: 20 minutes

---

## Problem Statement

Create a generic `LinkedList` class that can store any type of data with type-safe operations.

---

## Requirements

1. Create a generic `LinkedList<T>` class with:
   - `add(value: T): void` - add to end
   - `addAt(index: number, value: T): void` - add at specific index
   - `remove(value: T): boolean` - remove first occurrence
   - `get(index: number): T | undefined` - get value at index
   - `contains(value: T): boolean` - check if value exists
   - `size(): number` - get list size
   - `toArray(): T[]` - convert to array

2. Implement with proper type safety

---

## Starter Code

```typescript
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  // Implement methods
}

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}
```

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  add(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.length++;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) current = current!.next;
    return current?.value;
  }

  size(): number {
    return this.length;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
```

</details>
