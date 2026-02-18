// Example 3.3: Generic Classes

/**
 * Generic Stack implementation
 */
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toArray(): T[] {
    return [...this.items];
  }
}

// Usage with different types
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Number stack:", numberStack.toArray());  // [1, 2, 3]
console.log("Popped:", numberStack.pop());  // 3
console.log("Peek:", numberStack.peek());  // 2

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log("String stack:", stringStack.toArray());  // ["Hello", "World"]

/**
 * Generic Queue implementation
 */
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Usage
const queue = new Queue<string>();
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
console.log("Queue:", queue);
console.log("Dequeued:", queue.dequeue());  // "First"
console.log("Front:", queue.front());  // "Second"

/**
 * Generic Box with constraints
 */
class Box<T extends { weight: number }> {
  constructor(public item: T) {}

  getWeight(): number {
    return this.item.weight;
  }

  describe(): string {
    return `Box containing item with weight ${this.getWeight()}`;
  }
}

interface Package {
  weight: number;
  name: string;
}

interface Container {
  weight: number;
  capacity: number;
}

const packageBox = new Box<Package>({ weight: 5, name: "Gift" });
const containerBox = new Box<Container>({ weight: 100, capacity: 500 });

console.log(packageBox.describe());  // "Box containing item with weight 5"
console.log(containerBox.describe());  // "Box containing item with weight 100"

/**
 * Generic Map-like structure
 */
class SimpleMap<K extends string | number | symbol, V> {
  private entries: Map<K, V> = new Map();

  set(key: K, value: V): void {
    this.entries.set(key, value);
  }

  get(key: K): V | undefined {
    return this.entries.get(key);
  }

  has(key: K): boolean {
    return this.entries.has(key);
  }

  delete(key: K): boolean {
    return this.entries.delete(key);
  }

  keys(): K[] {
    return Array.from(this.entries.keys());
  }

  values(): V[] {
    return Array.from(this.entries.values());
  }

  size(): number {
    return this.entries.size;
  }
}

// Usage
const userMap = new SimpleMap<number, { name: string }>();
userMap.set(1, { name: "Alice" });
userMap.set(2, { name: "Bob" });
console.log("User 1:", userMap.get(1));  // { name: "Alice" }
console.log("Keys:", userMap.keys());  // [1, 2]

// Output:
// Number stack: [1, 2, 3]
// Popped: 3
// Peek: 2
// String stack: ['Hello', 'World']
// Dequeued: First
// Front: Second
// Box containing item with weight 5
// Box containing item with weight 100
// User 1: { name: 'Alice' }
// Keys: [1, 2]
