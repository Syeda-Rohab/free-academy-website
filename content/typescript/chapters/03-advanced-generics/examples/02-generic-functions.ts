// Example 3.2: Generic Functions with Multiple Type Parameters

/**
 * Merge two objects into one
 */
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage
const person = merge({ name: "Alice" }, { age: 30 });
console.log(person);  // { name: "Alice", age: 30 }
console.log(person.name);  // "Alice"
console.log(person.age);   // 30

/**
 * Merge with conflict resolution (second object wins)
 */
function mergeWithConflict<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeWithConflict(
  { name: "Alice", age: 25, city: "NYC" },
  { age: 30, country: "USA" }
);
console.log(merged);  // { name: "Alice", age: 30, city: "NYC", country: "USA" }

/**
 * Swap function - returns tuple with swapped values
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const swapped1 = swap(["hello", 42]);
console.log(swapped1);  // [42, "hello"]

const swapped2 = swap([true, "world"]);
console.log(swapped2);  // ["world", true]

/**
 * Pair utility - creates an object with first and second properties
 */
function createPair<T, U>(first: T, second: U): { first: T; second: U } {
  return { first, second };
}

const pair1 = createPair("name", "Alice");
console.log(pair1);  // { first: "name", second: "Alice" }

const pair2 = createPair(1, true);
console.log(pair2);  // { first: 1, second: true }

/**
 * Compose two functions
 */
function compose<A, B, C>(
  f: (arg: A) => B,
  g: (arg: B) => C
): (arg: A) => C {
  return (arg: A) => g(f(arg));
}

const toUpperCase = (s: string) => s.toUpperCase();
const exclaim = (s: string) => s + "!";

const shout = compose(toUpperCase, exclaim);
console.log(shout("hello"));  // "HELLO!"

/**
 * Generic function with default type parameter
 */
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const strings = createArray(3, "hello");
console.log(strings);  // ["hello", "hello", "hello"]

const numbers = createArray<number>(3, 42);
console.log(numbers);  // [42, 42, 42]

// Output:
// { name: 'Alice', age: 30 }
// Alice
// 30
// { name: 'Alice', age: 30, city: 'NYC', country: 'USA' }
// [ 42, 'hello' ]
// [ 'world', true ]
// { first: 'name', second: 'Alice' }
// { first: 1, second: true }
// HELLO!
// [ 'hello', 'hello', 'hello' ]
// [ 42, 42, 42 ]
