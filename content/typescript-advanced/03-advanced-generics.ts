/**
 * ============================================
 * ADVANCED GENERICS IN TYPESCRIPT
 * Constraints, Functions, Classes, Keyof, Indexed Access
 * ============================================
 */

// ============================================
// 1. GENERIC CONSTRAINTS (extends)
// ============================================

// Basic constraint - must have length property
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

logLength("hello"); // ✓ string has length
logLength([1, 2, 3]); // ✓ array has length
logLength({ length: 10 }); // ✓ object has length
// logLength(5); // ✗ number doesn't have length

// Multiple constraints
interface Identifiable {
  id: number;
}

interface Nameable {
  name: string;
}

function processEntity<T extends Identifiable & Nameable>(entity: T): string {
  return `${entity.name} (ID: ${entity.id})`;
}

const user = { id: 1, name: "Alice", age: 30 };
console.log(processEntity(user));

// Constraint with generic type parameter
function getProperty<T extends Record<K, any>, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30, city: "NYC" };
console.log(getProperty(person, "name")); // "John"
console.log(getProperty(person, "age")); // 30
// getProperty(person, "salary"); // ✗ Error - key doesn't exist

// ============================================
// 2. GENERIC FUNCTIONS
// ============================================

// Identity function
function identity<T>(arg: T): T {
  return arg;
}

const result1 = identity<string>("hello");
const result2 = identity<number>(42);
const result3 = identity("inferred"); // Type inference

// Generic function with multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 30 });
// Type: { name: string } & { age: 30 } = { name: string; age: number }

// Generic function with default type parameter
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "hello"); // string[]
const numberArray = createArray<number>(3, 5); // number[]
const defaultArray = createArray(3, "default"); // string[] (default)

// Generic function with union types
function firstTwo<T>(arr: T[]): [T, T] | null {
  if (arr.length < 2) return null;
  return [arr[0], arr[1]];
}

console.log(firstTwo([1, 2, 3, 4])); // [1, 2]
console.log(firstTwo(["a", "b", "c"])); // ["a", "b"]

// ============================================
// 3. GENERIC CLASSES
// ============================================

class GenericStack<T> {
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
}

const numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.peek()); // 2

const stringStack = new GenericStack<string>();
stringStack.push("Hello");
stringStack.push("World");

// Generic class with constraint
class DataStore<T extends { id: number }> {
  private items: Map<number, T> = new Map();
  
  add(item: T): void {
    this.items.set(item.id, item);
  }
  
  get(id: number): T | undefined {
    return this.items.get(id);
  }
  
  delete(id: number): boolean {
    return this.items.delete(id);
  }
  
  getAll(): T[] {
    return Array.from(this.items.values());
  }
  
  findBy(predicate: (item: T) => boolean): T[] {
    return this.getAll().filter(predicate);
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const productStore = new DataStore<Product>();
productStore.add({ id: 1, name: "Laptop", price: 999 });
productStore.add({ id: 2, name: "Mouse", price: 29 });
productStore.add({ id: 3, name: "Keyboard", price: 79 });

console.log(productStore.get(1));
console.log(productStore.findBy(p => p.price < 50));

// ============================================
// 4. KEYOF TYPE OPERATOR
// ============================================

interface Person {
  name: string;
  age: number;
  email: string;
}

// keyof T gives union of all property names
type PersonKeys = keyof Person; // "name" | "age" | "email"

function getPersonProperty(person: Person, key: keyof Person): any {
  return person[key];
}

const p: Person = { name: "Bob", age: 25, email: "bob@example.com" };
console.log(getPersonProperty(p, "name")); // "Bob"
console.log(getPersonProperty(p, "age")); // 25

// keyof with generics
function pickProperties<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<T> = {};
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result as Pick<T, K>;
}

const fullPerson = { name: "Carol", age: 28, email: "carol@example.com", city: "LA" };
const partialPerson = pickProperties(fullPerson, ["name", "email"]);
console.log(partialPerson); // { name: "Carol", email: "carol@example.com" }

// ============================================
// 5. INDEXED ACCESS TYPES
// ============================================

interface ApiResponse {
  data: {
    user: {
      id: number;
      profile: {
        name: string;
        settings: {
          theme: "light" | "dark";
          notifications: boolean;
        };
      };
    };
  };
  status: number;
}

// Access nested types using indexed access
type UserData = ApiResponse["data"]["user"];
type ProfileData = ApiResponse["data"]["user"]["profile"];
type Theme = ApiResponse["data"]["user"]["profile"]["settings"]["theme"];

// Using with keyof
type ProfileKeys = keyof ProfileData; // "name" | "settings"

// Dynamic property access
type UserKeys = keyof ApiResponse["data"]["user"];
type ProfileSettings = ApiResponse["data"]["user"]["profile"]["settings"];

// Array element type
type NumberArray = number[];
type NumberElement = NumberArray[number]; // number

type StringArray = string[];
type StringElement = StringArray[number]; // string

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type TodoArray = Todo[];
type TodoItem = TodoArray[number]; // { id: number; title: string; completed: boolean }

// ============================================
// 6. ADVANCED GENERIC PATTERNS
// ============================================

// Generic with multiple constraints
interface Comparable<T> {
  compareTo(other: T): number;
}

function findMax<T extends Comparable<T>>(items: T[]): T {
  if (items.length === 0) throw new Error("Empty array");
  
  let max = items[0];
  for (const item of items.slice(1)) {
    if (item.compareTo(max) > 0) {
      max = item;
    }
  }
  return max;
}

// Currying with generics
function curry<T, U, R>(fn: (a: T, b: U) => R): (a: T) => (b: U) => R {
  return (a: T) => (b: U) => fn(a, b);
}

const add = (a: number, b: number) => a + b;
const addCurried = curry(add);
console.log(addCurried(5)(3)); // 8

// Generic higher-order functions
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Cache hit');
      return cache.get(key)!;
    }
    console.log('Cache miss');
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

const expensiveCalc = memoize((n: number): number => {
  console.log(`Calculating for ${n}...`);
  let result = 0;
  for (let i = 0; i < 1000000; i++) result += i;
  return result;
});

expensiveCalc(5); // Cache miss
expensiveCalc(5); // Cache hit

// ============================================
// 7. GENERIC UTILITY PATTERNS
// ============================================

// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Config {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
}

type PartialConfig = DeepPartial<Config>;

// Deep Required
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// Deep Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Function type helpers
type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;

type ApiCall = AsyncFunction<[string, RequestInit], Response>;

// Constructor type
type Constructor<T = any> = new (...args: any[]) => T;

function createInstance<T>(ctor: Constructor<T>, ...args: any[]): T {
  return new ctor(...args);
}

class MyClass {
  constructor(public name: string) {}
}

const instance = createInstance(MyClass, "test");

// ============================================
// 8. VARIADIC TUPLE TYPES
// ============================================

// Generic tuple operations
type Head<T extends any[]> = T extends [infer H, ...infer _] ? H : never;
type Tail<T extends any[]> = T extends [infer _, ...infer Tl] ? Tl : never;

type First = Head<[string, number, boolean]>; // string
type Rest = Tail<[string, number, boolean]>; // [number, boolean]

// Spread tuples
function concat<T extends any[], U extends any[]>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2] as [...T, ...U];
}

const result = concat([1, 2], [3, 4, 5]); // [number, number, number, number, number]

// Generic rest parameters
function logArguments<T extends any[]>(...args: T): void {
  console.log(`Received ${args.length} arguments:`, args);
}

logArguments(1, "two", true, { key: "value" });

// ============================================
// 9. NOMINAL TYPES (BRANDED TYPES)
// ============================================

// Create branded types for type safety
type Brand<T, TBrand> = T & { __brand: TBrand };

type UserId = Brand<number, "UserId">;
type OrderId = Brand<number, "OrderId">;

function createUserId(id: number): UserId {
  return id as UserId;
}

function getUserById(id: UserId): void {
  console.log(`Getting user ${id}`);
}

const userId = createUserId(123);
getUserById(userId); // ✓
// getUserById(123 as OrderId); // ✗ Type error

// Multiple brands
type AdminId = Brand<number, "UserId" & "Admin">;

// ============================================
// 10. COMPLETE EXAMPLE - REPOSITORY PATTERN
// ============================================

interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

abstract class Repository<T extends BaseEntity> {
  protected items: Map<number, T> = new Map();
  private idCounter: number = 1;
  
  create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
    const entity = {
      ...data,
      id: this.idCounter++,
      createdAt: new Date(),
      updatedAt: new Date()
    } as T;
    this.items.set(entity.id, entity);
    return entity;
  }
  
  findById(id: number): T | undefined {
    return this.items.get(id);
  }
  
  findAll(): T[] {
    return Array.from(this.items.values());
  }
  
  update(id: number, data: Partial<T>): T | undefined {
    const existing = this.items.get(id);
    if (!existing) return undefined;
    
    const updated = {
      ...existing,
      ...data,
      id, // Keep original id
      updatedAt: new Date()
    };
    this.items.set(id, updated);
    return updated;
  }
  
  delete(id: number): boolean {
    return this.items.delete(id);
  }
  
  findBy<K extends keyof T>(key: K, value: T[K]): T[] {
    return this.findAll().filter(item => item[key] === value);
  }
  
  findFirstBy(predicate: (item: T) => boolean): T | undefined {
    return this.findAll().find(predicate);
  }
}

interface UserEntity extends BaseEntity {
  email: string;
  name: string;
  role: "user" | "admin";
}

interface PostEntity extends BaseEntity {
  title: string;
  content: string;
  authorId: number;
  published: boolean;
}

class UserRepository extends Repository<UserEntity> {
  findByEmail(email: string): UserEntity | undefined {
    return this.findBy('email', email)[0];
  }
  
  findAdmins(): UserEntity[] {
    return this.findBy('role', 'admin');
  }
}

class PostRepository extends Repository<PostEntity> {
  findPublished(): PostEntity[] {
    return this.findBy('published', true);
  }
  
  findByAuthor(authorId: number): PostEntity[] {
    return this.findBy('authorId', authorId);
  }
}

// Usage
const userRepo = new UserRepository();
const postRepo = new PostRepository();

const newUser = userRepo.create({ email: "alice@example.com", name: "Alice", role: "admin" });
const post = postRepo.create({ title: "Hello", content: "World", authorId: newUser.id, published: true });

console.log(userRepo.findById(newUser.id));
console.log(postRepo.findByAuthor(newUser.id));
console.log(userRepo.findAdmins());

export {};
