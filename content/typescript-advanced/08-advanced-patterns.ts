/**
 * ============================================
 * ADVANCED PATTERNS IN TYPESCRIPT
 * Index Signatures, Declaration Merging, Cross-type Compatibility
 * ============================================
 */

// ============================================
// 1. INDEX SIGNATURES
// ============================================

// Basic index signature
interface StringMap {
  [key: string]: string;
}

const stringMap: StringMap = {
  name: 'John',
  email: 'john@example.com'
};

// Number index signature
interface ArrayLike<T> {
  [index: number]: T;
  length: number;
}

const arrayLike: ArrayLike<string> = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

// Mixed index signatures
interface MixedMap {
  [key: string]: number | string | ((x: number) => number);
  name: string;
  count: number;
  increment: (x: number) => number;
}

const mixed: MixedMap = {
  name: 'Counter',
  count: 0,
  increment: (x) => x + 1,
  extra: 'allowed',
  another: 42
};

// ============================================
// 2. INDEX SIGNATURES WITH SPECIFIC KEYS
// ============================================

// String index with specific known keys
interface Config {
  host: string;
  port: number;
  // Additional string properties allowed
  [key: string]: string | number | boolean;
  timeout?: number;
  retries?: number;
}

const config: Config = {
  host: 'localhost',
  port: 3000,
  timeout: 5000,
  debug: true,
  customKey: 'customValue'
};

// ============================================
// 3. READONLY INDEX SIGNATURES
// ============================================

interface ReadonlyStringMap {
  readonly [key: string]: string;
}

const readonlyMap: ReadonlyStringMap = {
  key1: 'value1',
  key2: 'value2'
};

// readonlyMap.key3 = 'value3'; // ✗ Error - readonly

// ============================================
// 4. DECLARATION MERGING
// ============================================

// Merge interfaces
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
  color: string;
}

const box: Box = {
  height: 100,
  width: 200,
  scale: 1.5,
  color: 'red'
};

// Merge namespaces
namespace Album {
  export function create(title: string): void {
    console.log(`Creating album: ${title}`);
  }
}

namespace Album {
  export function delete(id: number): void {
    console.log(`Deleting album: ${id}`);
  }
}

Album.create('My Album');
Album.delete(123);

// Merge interface with namespace
interface Validator {
  validate(value: string): boolean;
}

namespace Validator {
  export function createEmailValidator(): Validator {
    return {
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    };
  }
  
  export function createNumberValidator(): Validator {
    return {
      validate: (value: string) => /^\d+$/.test(value)
    };
  }
}

const emailValidator = Validator.createEmailValidator();
console.log(emailValidator.validate('test@example.com'));

// ============================================
// 5. DECLARATION MERGING WITH CLASSES
// ============================================

// Merge class with interface
interface Widget {
  render(): void;
}

class Widget {
  constructor(public name: string) {}
  
  render(): void {
    console.log(`Rendering ${this.name}`);
  }
}

// Merge class with namespace
class Chart {
  constructor(public data: number[]) {}
  
  draw(): void {
    console.log('Drawing chart');
  }
}

namespace Chart {
  export function createPieChart(data: number[]): Chart {
    return new Chart(data);
  }
  
  export function createBarChart(data: number[]): Chart {
    return new Chart(data);
  }
}

const pieChart = Chart.createPieChart([1, 2, 3, 4]);
pieChart.draw();

// ============================================
// 6. DECLARATION MERGING WITH FUNCTIONS
// ============================================

// Function with properties
function calculate(x: number): number {
  return x * 2;
}

namespace calculate {
  export const version = '1.0.0';
  export const author = 'Team';
}

console.log(calculate(5)); // 10
console.log(calculate.version); // '1.0.0'
console.log(calculate.author); // 'Team'

// Function overloads with namespace
function format(value: string): string;
function format(value: number): string;
function format(value: any): string {
  return String(value);
}

namespace format {
  export function withPrefix(value: string, prefix: string): string {
    return `${prefix}${format(value)}`;
  }
}

console.log(format.withPrefix('hello', '> '));

// ============================================
// 7. CROSS-TYPE COMPATIBILITY
// ============================================

// Structural typing
interface Point2D {
  x: number;
  y: number;
}

interface Vector2D {
  x: number;
  y: number;
}

// Structurally compatible
const point: Point2D = { x: 1, y: 2 };
const vector: Vector2D = point; // ✓ Same structure

// Function compatibility
type Fn1 = (a: number, b: number) => number;
type Fn2 = (x: number, y: number) => number;

const add: Fn1 = (a, b) => a + b;
const multiply: Fn2 = (x, y) => x * y;

const fn1: Fn1 = multiply; // ✓ Compatible

// ============================================
// 8. VARIANCE IN TYPESCRIPT
// ============================================

// Covariant - return types
interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

type AnimalFactory = () => Animal;
type DogFactory = () => Dog;

const animalFactory: AnimalFactory = () => ({ name: 'Animal' });
const dogFactory: DogFactory = () => ({ name: 'Dog', breed: 'Labrador' });

// DogFactory is assignable to AnimalFactory (covariant)
const factory: AnimalFactory = dogFactory; // ✓

// Contravariant - parameter types
type AnimalHandler = (animal: Animal) => void;
type DogHandler = (dog: Dog) => void;

const handleAnimal: AnimalHandler = (animal) => console.log(animal.name);
const handleDog: DogHandler = (dog) => console.log(dog.breed);

// AnimalHandler is assignable to DogHandler (contravariant)
const handler: DogHandler = handleAnimal; // ✓

// ============================================
// 9. BRAND/OPAQUE TYPES PATTERN
// ============================================

// Using unique symbols for branding
declare const userIdBrand: unique symbol;
declare const orderIdBrand: unique symbol;

type UserId = number & { [userIdBrand]: never };
type OrderId = number & { [orderIdBrand]: never };

function createUserId(id: number): UserId {
  return id as UserId;
}

function createOrderId(id: number): OrderId {
  return id as OrderId;
}

function getUser(id: UserId): void {
  console.log(`Getting user ${id}`);
}

function getOrder(id: OrderId): void {
  console.log(`Getting order ${id}`);
}

const userId = createUserId(123);
const orderId = createOrderId(456);

getUser(userId); // ✓
// getUser(orderId); // ✗ Type error

// ============================================
// 10. PHANTOM TYPES
// ============================================

// Type with phantom parameter
interface Id<T> {
  readonly value: number;
  readonly _type: T;
}

declare const _userTag: unique symbol;
declare const _orderTag: unique symbol;

type UserTag = typeof _userTag;
type OrderTag = typeof _orderTag;

type UserId2 = Id<UserTag>;
type OrderId2 = Id<OrderTag>;

function makeId<T>(): Id<T> {
  return { value: Math.random(), _type: undefined as any };
}

function useId<T>(id: Id<T>): void {
  console.log(id.value);
}

const userId2 = makeId<UserTag>();
const orderId2 = makeId<OrderTag>();

useId(userId2); // ✓
// useId(orderId2 as UserId2); // ✗ Type error

// ============================================
// 11. HIGHER-KIND TYPES
// ============================================

// Functor interface
interface Functor<T> {
  map<U>(fn: (value: T) => U): Functor<U>;
}

// Maybe type
type Maybe<T> = 
  | { type: 'some'; value: T }
  | { type: 'none' };

function maybe<T>(value: T | null | undefined): Maybe<T> {
  if (value == null) {
    return { type: 'none' };
  }
  return { type: 'some', value };
}

function mapMaybe<T, U>(m: Maybe<T>, fn: (value: T) => U): Maybe<U> {
  if (m.type === 'none') {
    return m;
  }
  return { type: 'some', value: fn(m.value) };
}

// Usage
const result = mapMaybe(maybe(5), (x) => x * 2);
console.log(result); // { type: 'some', value: 10 }

const none = mapMaybe(maybe(null), (x: number) => x * 2);
console.log(none); // { type: 'none' }

// ============================================
// 12. TYPE-LEVEL PROGRAMMING
// ============================================

// Type-level boolean
type True = true;
type False = false;

// Type-level NOT
type Not<T extends boolean> = T extends true ? false : true;

type T1 = Not<true>; // false
type T2 = Not<false>; // true

// Type-level AND
type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;

type T3 = And<true, true>; // true
type T4 = And<true, false>; // false

// Type-level OR
type Or<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
    ? true
    : false;

// Type-level IF
type If<C extends boolean, T, F> = C extends true ? T : F;

type T5 = If<true, 'yes', 'no'>; // 'yes'
type T6 = If<false, 'yes', 'no'>; // 'no'

// ============================================
// 13. COMPILE-TIME VALIDATION
// ============================================

// Type-level length check
type Length<T extends readonly any[]> = T['length'];

type T7 = Length<[1, 2, 3]>; // 3
type T8 = Length<['a', 'b']>; // 2

// Type-level string length
type StringLength<T extends string> = T extends `${infer _}${infer Rest}`
  ? 1 extends 0 ? never : 1 | (1 & StringLength<Rest>)
  : 0;

// Ensure exact length
type EnsureLength<T extends any[], N extends number> = T['length'] extends N
  ? T
  : never;

type T9 = EnsureLength<[1, 2, 3], 3>; // [1, 2, 3]
// type T10 = EnsureLength<[1, 2], 3>; // Error

// ============================================
// 14. CURRYING WITH TYPES
// ============================================

// Curry utility types
type Curry1<A, R> = (a: A) => R;
type Curry2<A, B, R> = (a: A) => (b: B) => R;
type Curry3<A, B, C, R> = (a: A) => (b: B) => (c: C) => R;

// Generic curry
type Curry<T extends any[], R> = 
  T extends [infer A]
    ? (a: A) => R
    : T extends [infer A, infer B]
      ? (a: A) => (b: B) => R
      : T extends [infer A, infer B, infer C]
        ? (a: A) => (b: B) => (c: C) => R
        : never;

// Implementation
function curry<A, B, R>(fn: (a: A, b: B) => R): (a: A) => (b: B) => R {
  return (a: A) => (b: B) => fn(a, b);
}

const addCurried = curry((a: number, b: number) => a + b);
console.log(addCurried(5)(3)); // 8

// ============================================
// 15. COMPOSABLE TYPE UTILITIES
// ============================================

// Compose types
type Compose<F, G> = G extends (arg: infer I) => infer O
  ? F extends (arg: infer I2) => infer O2
    ? (arg: I) => O2
    : never
  : never;

// Pipe types
type Pipe<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends (...args: any[]) => infer FirstReturn
    ? Rest extends []
      ? First
      : Rest extends [(arg: FirstReturn) => any, ...infer Tail]
        ? Pipe<[...Tail]>
        : never
    : never
  : never;

// ============================================
// 16. LENS PATTERN
// ============================================

// Lens type for focusing on nested properties
type Lens<S, A> = {
  get: (state: S) => A;
  set: (state: S, value: A) => S;
};

function createLens<S, K extends keyof S>(
  key: K
): Lens<S, S[K]> {
  return {
    get: (state) => state[key],
    set: (state, value) => ({ ...state, [key]: value })
  };
}

interface State {
  user: { name: string; age: number };
  theme: 'light' | 'dark';
}

const userLens = createLens<State, 'user'>('user');
const themeLens = createLens<State, 'theme'>('theme');

const state: State = {
  user: { name: 'John', age: 30 },
  theme: 'light'
};

console.log(userLens.get(state)); // { name: 'John', age: 30 }

const newState = themeLens.set(state, 'dark');
console.log(newState.theme); // 'dark'

// ============================================
// 17. OPTICS COMBINATORS
// ============================================

// Compose lenses
function composeLens<S, A, B>(
  lens1: Lens<S, A>,
  lens2: Lens<A, B>
): Lens<S, B> {
  return {
    get: (state) => lens2.get(lens1.get(state)),
    set: (state, value) => {
      const a = lens1.get(state);
      const newA = lens2.set(a, value);
      return lens1.set(state, newA);
    }
  };
}

// Modify through lens
function modifyLens<S, A>(
  lens: Lens<S, A>,
  fn: (value: A) => A
): (state: S) => S {
  return (state) => lens.set(state, fn(lens.get(state)));
}

// ============================================
// 18. TAGGED UNION FACTORY
// ============================================

// Create tagged unions easily
type TaggedUnion<T extends string, V> = { tag: T } & V;

function tagged<T extends string, V>(tag: T, value: V): TaggedUnion<T, V> {
  return { tag, ...value };
}

// Usage
type Action = 
  | TaggedUnion<'ADD_TODO', { text: string }>
  | TaggedUnion<'REMOVE_TODO', { id: number }>
  | TaggedUnion<'EDIT_TODO', { id: number; text: string }>;

const addTodo = tagged('ADD_TODO', { text: 'Learn TypeScript' });
const removeTodo = tagged('REMOVE_TODO', { id: 1 });

function handleAction(action: Action): void {
  switch (action.tag) {
    case 'ADD_TODO':
      console.log('Adding:', action.text);
      break;
    case 'REMOVE_TODO':
      console.log('Removing:', action.id);
      break;
    case 'EDIT_TODO':
      console.log('Editing:', action.id, action.text);
      break;
  }
}

// ============================================
// 19. TYPE-SAFE EVENT EMITTER
// ============================================

// Event map type
type EventMap = Record<string, any>;

// Type-safe emitter
class TypedEventEmitter<T extends EventMap> {
  private listeners: Map<keyof T, Set<(...args: any[]) => void>> = new Map();
  
  on<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);
  }
  
  off<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void {
    this.listeners.get(event)?.delete(listener);
  }
  
  emit<K extends keyof T>(event: K, ...args: T[K]): void {
    this.listeners.get(event)?.forEach(listener => listener(...args));
  }
}

// Usage
interface AppEvents {
  'user:login': [userId: number];
  'user:logout': [];
  'data:update': [data: { id: number; value: string }];
}

const emitter = new TypedEventEmitter<AppEvents>();

emitter.on('user:login', (userId) => {
  console.log(`User ${userId} logged in`);
});

emitter.emit('user:login', 123);

// ============================================
// 20. COMPLETE EXAMPLE - TYPE-SAFE ROUTER
// ============================================

// Route definitions
type RouteDefs = {
  '/': { params: {}; query: {}; response: { message: string } };
  '/users': { params: {}; query: { page?: number }; response: { users: string[] } };
  '/users/:id': { params: { id: number }; query: {}; response: { user: string } };
  '/posts/:id/comments': { params: { id: number }; query: { limit?: number }; response: { comments: string[] } };
};

// Extract route params from path pattern
type ExtractParams<T extends string> = 
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param extends `${infer P}?`
      ? { [K in P]?: number | string } & ExtractParams<Rest>
      : { [K in Param]: number | string } & ExtractParams<Rest>
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: number | string }
      : {};

// Handler type
type Handler<T extends { response: any }> = (
  params: T['params'],
  query: T['query']
) => Promise<T['response']>;

// Router class
class Router<Routes extends Record<string, { params: any; query: any; response: any }>> {
  private routes = new Map<string, Handler<any>>();
  
  route<Path extends keyof Routes>(
    path: Path,
    handler: Handler<Routes[Path]>
  ): void {
    this.routes.set(path as string, handler);
  }
  
  async handle<Path extends keyof Routes>(
    path: Path,
    params: Routes[Path]['params'],
    query: Routes[Path]['query']
  ): Promise<Routes[Path]['response']> {
    const handler = this.routes.get(path as string);
    if (!handler) {
      throw new Error(`Route not found: ${path}`);
    }
    return handler(params, query);
  }
}

// Usage
const router = new Router<RouteDefs>();

router.route('/', async () => ({ message: 'Welcome!' }));
router.route('/users', async (_, query) => ({ users: ['Alice', 'Bob'] }));
router.route('/users/:id', async (params) => ({ user: `User ${params.id}` }));

// Type-safe route handling
router.handle('/', {}, {});
router.handle('/users', {}, { page: 1 });
router.handle('/users/:id', { id: 123 }, {});

export {};
