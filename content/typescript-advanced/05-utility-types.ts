/**
 * ============================================
 * UTILITY TYPES IN TYPESCRIPT
 * Partial, Required, Pick, Omit, Record, etc.
 * ============================================
 */

// ============================================
// 1. PARTIAL<T>
// Make all properties optional
// ============================================

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// All properties optional
type PartialUser = Partial<User>;
// Equivalent to:
// {
//   id?: number;
//   name?: string;
//   email?: string;
//   age?: number;
// }

function updateUser(id: number, updates: Partial<User>): User {
  // Can update any subset of properties
  return { id, name: 'John', email: 'john@example.com', age: 30, ...updates };
}

updateUser(1, { name: 'Jane' }); // ✓
updateUser(1, { email: 'jane@example.com', age: 25 }); // ✓
updateUser(1, {}); // ✓

// ============================================
// 2. REQUIRED<T>
// Make all properties required
// ============================================

interface Config {
  host?: string;
  port?: number;
  timeout?: number;
}

// All properties required
type RequiredConfig = Required<Config>;
// Equivalent to:
// {
//   host: string;
//   port: number;
//   timeout: number;
// }

function applyConfig(config: Required<Config>): void {
  console.log(`Connecting to ${config.host}:${config.port}`);
}

applyConfig({ host: 'localhost', port: 3000, timeout: 5000 });

// ============================================
// 3. READONLY<T>
// Make all properties readonly
// ============================================

interface Product {
  id: number;
  name: string;
  price: number;
}

// All properties readonly
type ReadonlyProduct = Readonly<Product>;
// Equivalent to:
// {
//   readonly id: number;
//   readonly name: string;
//   readonly price: number;
// }

const product: ReadonlyProduct = { id: 1, name: 'Laptop', price: 999 };
// product.price = 899; // ✗ Error - readonly

// Freeze object at runtime
const frozen = Object.freeze<Product>({ id: 1, name: 'Phone', price: 599 });

// ============================================
// 4. PICK<T, K>
// Select specific properties
// ============================================

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  startDate: Date;
}

// Pick specific properties
type EmployeeBasic = Pick<Employee, 'id' | 'name' | 'email'>;
// Equivalent to:
// {
//   id: number;
//   name: string;
//   email: string;
// }

type EmployeePublic = Pick<Employee, 'id' | 'name' | 'department'>;

function getEmployeeBasic(emp: Employee): EmployeeBasic {
  return { id: emp.id, name: emp.name, email: emp.email };
}

// ============================================
// 5. OMIT<T, K>
// Exclude specific properties
// ============================================

// Omit sensitive data
type EmployeePublic2 = Omit<Employee, 'salary' | 'startDate'>;
// Equivalent to:
// {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
// }

// Omit multiple
type EmployeeInternal = Omit<Employee, 'email'>;

// Combine Pick and Omit
type EmployeeIdName = Pick<Omit<Employee, 'email' | 'salary'>, 'id' | 'name'>;

// ============================================
// 6. RECORD<K, T>
// Object with specific key and value types
// ============================================

// Record with union keys
type UserRole = 'admin' | 'user' | 'guest';
interface Permissions {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
}

const rolePermissions: Record<UserRole, Permissions> = {
  admin: { canRead: true, canWrite: true, canDelete: true },
  user: { canRead: true, canWrite: true, canDelete: false },
  guest: { canRead: true, canWrite: false, canDelete: false }
};

// Record with string keys
type StringMap = Record<string, any>;
const config: Record<string, number> = {
  timeout: 5000,
  retries: 3,
  port: 3000
};

// Record with number keys (array-like)
type ArrayLike = Record<number, string>;
const arr: ArrayLike = { 0: 'a', 1: 'b', 2: 'c' };

// ============================================
// 7. EXCLUDE<T, U>
// Exclude types from union
// ============================================

type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
type Weekday = Exclude<Day, 'Sat' | 'Sun'>; // 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'

type Mixed = string | number | boolean;
type OnlyStrings = Exclude<Mixed, number | boolean>; // string

// ============================================
// 8. EXTRACT<T, U>
// Extract types from union (opposite of Exclude)
// ============================================

type OnlyNumbers = Extract<Mixed, number>; // number

type AvailableDays = Extract<Day, 'Mon' | 'Wed' | 'Fri'>; // 'Mon' | 'Wed' | 'Fri'

// ============================================
// 9. NONULLABLE<T>
// Remove null and undefined from type
// ============================================

type NullableString = string | null | undefined;
type NonNullString = NonNullable<NullableString>; // string

type MaybeNumber = number | null | undefined;
type DefinitelyNumber = NonNullable<MaybeNumber>; // number

// ============================================
// 10. RETURN_TYPE<T>
// Extract return type from function
// ============================================

function createUser(): { id: number; name: string } {
  return { id: 1, name: 'John' };
}

type UserReturnType = ReturnType<typeof createUser>;
// Equivalent to: { id: number; name: string }

// With async functions
async function fetchUser(): Promise<{ id: number; name: string }> {
  return { id: 1, name: 'John' };
}

type AsyncUserReturnType = ReturnType<typeof fetchUser>; // Promise<{ id: number; name: string }>
type AwaitedUser = Awaited<ReturnType<typeof fetchUser>>; // { id: number; name: string }

// ============================================
// 11. PARAMETERS<T>
// Extract parameter types from function
// ============================================

function add(a: number, b: number): number {
  return a + b;
}

type AddParams = Parameters<typeof add>; // [number, number]

function createUser2(name: string, age: number, email: string): User {
  return { id: 1, name, email, age };
}

type CreateUserParams = Parameters<typeof createUser2>; // [string, number, string]

// Extract specific parameter
type FirstParam = CreateUserParams[0]; // string
type SecondParam = CreateUserParams[1]; // number

// ============================================
// 12. CONSTRUCTOR_PARAMETERS<T>
// Extract constructor parameter types
// ============================================

class MyClass {
  constructor(public name: string, public value: number) {}
}

type MyClassConstructorParams = ConstructorParameters<typeof MyClass>;
// [string, number]

// ============================================
// 13. INSTANCE_TYPE<T>
// Extract instance type from constructor
// ============================================

class Person {
  constructor(public name: string) {}
  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}

type PersonInstance = InstanceType<typeof Person>; // Person

// Usage
function createInstance<T extends new (...args: any[]) => any>(
  ctor: T
): InstanceType<T> {
  return new ctor();
}

// ============================================
// 14. THIS_PARAMETER_TYPE<T>
// Extract this parameter type
// ============================================

function greet(this: { name: string }) {
  console.log(`Hello, ${this.name}`);
}

type GreetThisType = ThisParameterType<typeof greet>; // { name: string }

// ============================================
// 15. OMIT_THIS_PARAMETER<T>
// Remove this parameter from function
// ============================================

function withThis(this: { name: string }, message: string) {
  console.log(`${this.name}: ${message}`);
}

type WithoutThis = OmitThisParameter<typeof withThis>;
// (message: string) => void

// ============================================
// 16. CUSTOM UTILITY TYPES
// ============================================

// Mutable - opposite of Readonly
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MutableProduct = Mutable<ReadonlyProduct>;

// Nullable - add null to all properties
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;

// Undefinable - add undefined to all properties
type Undefinable<T> = {
  [P in keyof T]: T[P] | undefined;
};

// ValueOf - get union of all property values
type ValueOf<T> = T[keyof T];

type UserValues = ValueOf<User>; // number | string

// Keys - same as keyof but as utility
type Keys<T> = keyof T;

// Optional - make specific properties optional
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type OptionalUser = Optional<User, 'age' | 'email'>;

// Required - make specific properties required
type RequiredOnly<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

// Immutable - deep readonly
type Immutable<T> = {
  readonly [P in keyof T]: T[P] extends object ? Immutable<T[P]> : T[P];
};

// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Deep Required
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// ============================================
// 17. FUNCTION UTILITY TYPES
// ============================================

// Async function type
type AsyncFn<T extends any[], R> = (...args: T) => Promise<R>;

type ApiCall = AsyncFn<[string], Promise<Response>>;

// Sync version of async function
type SyncVersion<T> = T extends (...args: infer A) => Promise<infer R>
  ? (...args: A) => R
  : T;

// Async version of sync function
type AsyncVersion<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T;

// Function with same signature but different return
type WithReturn<T, R> = T extends (...args: infer A) => any
  ? (...args: A) => R
  : never;

// ============================================
// 18. ARRAY UTILITY TYPES
// ============================================

// Element type of array
type ElementOf<T> = T extends (infer E)[] ? E : never;

type StringElement = ElementOf<string[]>; // string
type NumberElement = ElementOf<number[]>; // number

// Tuple element types
type FirstElement<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type RestElements<T extends any[]> = T extends [any, ...infer R] ? R : never;

type First = FirstElement<[string, number, boolean]>; // string
type Rest = RestElements<[string, number, boolean]>; // [number, boolean]

// ============================================
// 19. PROMISE UTILITY TYPES
// ============================================

// Unwrap promise type
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Unwrapped = UnwrapPromise<Promise<string>>; // string

// Make all properties return promises
type Asyncify<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : Promise<T[P]>;
};

interface SyncAPI {
  getUser(id: number): User;
  createUser(data: Partial<User>): User;
  version: string;
}

type AsyncAPI = Asyncify<SyncAPI>;
// {
//   getUser(id: number): Promise<User>;
//   createUser(data: Partial<User>): Promise<User>;
//   version: Promise<string>;
// }

// ============================================
// 20. COMPLETE EXAMPLE - API RESPONSE TYPES
// ============================================

// Base response
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Success response
type SuccessResponse<T> = ApiResponse<T> & {
  error: null;
};

// Error response
type ErrorResponse = ApiResponse<null> & {
  error: {
    code: string;
    details: string;
  };
};

// Paginated response
type PaginatedResponse<T> = ApiResponse<T[]> & {
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
};

// Usage
type UserResponse = SuccessResponse<User>;
type UserListResponse = PaginatedResponse<User>;

// Extract data type from response
type ResponseData<T> = T extends ApiResponse<infer U> ? U : never;

type UserData = ResponseData<UserResponse>; // User
type UserListData = ResponseData<UserListResponse>; // User[]

// ============================================
// 21. STRING MANIPULATION TYPES (TS 4.1+)
// ============================================

// Capitalize first letter
type CapitalizeFirst<T extends string> = Capitalize<T>;

// Lowercase first letter
type LowercaseFirst<T extends string> = Uncapitalize<T>;

// Uppercase entire string
type UppercaseString<T extends string> = Uppercase<T>;

// Lowercase entire string
type LowercaseString<T extends string> = Lowercase<T>;

// Template literal types
type Greeting<T extends string> = `Hello ${T}!`;
type HelloJohn = Greeting<'John'>; // "Hello John!"

// Event names from object keys
type EventMap = {
  click: { x: number; y: number };
  focus: { target: string };
  blur: { target: string };
};

type EventNames = keyof EventMap; // "click" | "focus" | "blur"
type EventTypes = EventMap[keyof EventMap];

// Event handler types
type EventHandler<T extends string> = `on${Capitalize<T>}`;
type ClickHandler = EventHandler<'click'>; // "onClick"

// ============================================
// 22. BRAND/OPAQUE TYPES
// ============================================

// Create opaque/branded types
declare const brand: unique symbol;

type Opaque<T, B> = T & { [brand]: B };

type UserId = Opaque<number, 'UserId'>;
type OrderId = Opaque<number, 'OrderId'>;

function createUserId(id: number): UserId {
  return id as UserId;
}

function getOrder(id: OrderId): void {
  console.log(`Getting order ${id}`);
}

const userId = createUserId(123);
// getOrder(userId); // ✗ Type error - different brands

export {};
