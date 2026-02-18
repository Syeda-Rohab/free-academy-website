/**
 * ============================================
 * MAPPED & CONDITIONAL TYPES IN TYPESCRIPT
 * Mapped Types, Conditional Types, Infer Keyword
 * ============================================
 */

// ============================================
// 1. MAPPED TYPES BASICS
// ============================================

// Basic mapped type syntax
interface Person {
  name: string;
  age: number;
  email: string;
}

// Map all properties to boolean
type PersonFlags = {
  [K in keyof Person]: boolean;
};
// Equivalent to:
// {
//   name: boolean;
//   age: boolean;
//   email: boolean;
// }

// Map all properties to arrays
type PersonArrays = {
  [K in keyof Person]: Person[K][];
};
// Equivalent to:
// {
//   name: string[];
//   age: number[];
//   email: string[];
// }

// ============================================
// 2. MAPPED TYPE MODIFIERS
// ============================================

// Add readonly to all properties
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Make all properties optional
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};

// Make all properties required
type RequiredPerson = {
  [K in keyof Person]-?: Person[K];
};

// Remove readonly (make mutable)
type MutablePerson = {
  -readonly [K in keyof Person]: Person[K];
};

// ============================================
// 3. KEY REMAPPING (TS 4.1+)
// ============================================

// Convert keys to uppercase
type UppercaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type UpperPerson = UppercaseKeys<Person>;
// { NAME: string; AGE: number; EMAIL: string }

// Convert keys to lowercase
type LowercaseKeys<T> = {
  [K in keyof T as Lowercase<string & K>]: T[K];
};

// Add prefix to keys
type WithPrefix<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
};

type PersonWithPrefix = WithPrefix<Person, 'user'>;
// { userName: string; userAge: number; userEmail: string }

// Add suffix to keys
type WithSuffix<T, Suffix extends string> = {
  [K in keyof T as `${string & K}${Suffix}`]: T[K];
};

type PersonWithSuffix = WithSuffix<Person, 'Field'>;
// { nameField: string; ageField: number; emailField: string }

// Filter keys with conditional types
type GetStringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type OnlyStringKeys = GetStringKeys<Person>; // { name: string; email: string }

// Exclude specific keys
type ExcludeKeys<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type PersonWithoutAge = ExcludeKeys<Person, 'age'>; // { name: string; email: string }

// ============================================
// 4. TEMPLATE LITERAL TYPES
// ============================================

// Basic template literals
type EventName = 'click' | 'focus' | 'blur';
type EventHandler = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"

// Multiple unions
type HttpMethod = 'get' | 'post' | 'put' | 'delete';
type Resource = 'user' | 'post' | 'comment';
type ApiEndpoint = `${HttpMethod} ${Resource}`;
// "get user" | "get post" | "get comment" | "post user" | ...

// Complex template literals
type CSSProperty = 'color' | 'background' | 'margin' | 'padding';
type CSSValue = string | number;
type CSSDeclaration = `${CSSProperty}: ${CSSValue}`;
// "color: string" | "color: number" | "background: string" | ...

// ============================================
// 5. CONDITIONAL TYPES BASICS
// ============================================

// Basic conditional type syntax
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
type C = IsString<string | number>; // boolean (distributive)

// Check for null/undefined
type IsNullable<T> = null | undefined extends T ? true : false;

type D = IsNullable<string | null>; // true
type E = IsNullable<string>; // false

// ============================================
// 6. DISTRIBUTIVE CONDITIONAL TYPES
// ============================================

// Conditional types distribute over unions
type ToArray<T> = T extends any ? T[] : never;

type F = ToArray<string>; // string[]
type G = ToArray<string | number>; // string[] | number[] (distributive)
// NOT: (string | number)[]

// Non-distributive version
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;

type H = ToArrayNonDistributive<string | number>; // (string | number)[]

// ============================================
// 7. INFER KEYWORD
// ============================================

// Infer return type
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type I = GetReturnType<() => string>; // string
type J = GetReturnType<(x: number) => boolean>; // boolean
type K = GetReturnType<() => Promise<number>>; // Promise<number>

// Infer array element type
type GetArrayElement<T> = T extends (infer E)[] ? E : never;

type L = GetArrayElement<string[]>; // string
type M = GetArrayElement<number[]>; // number

// Infer promise value
type UnwrapPromise<T> = T extends Promise<infer V> ? V : T;

type N = UnwrapPromise<Promise<string>>; // string
type O = UnwrapPromise<Promise<number[]>>; // number[]
type P = UnwrapPromise<string>; // string (not a promise)

// Infer function parameters
type GetFirstParam<T> = T extends (arg1: infer P1, ...args: any[]) => any ? P1 : never;

type Q = GetFirstParam<(name: string, age: number) => void>; // string
type R = GetFirstParam<(id: number) => void>; // number

// Infer all parameters as tuple
type GetParams<T> = T extends (...args: infer P) => any ? P : never;

type S = GetParams<(a: string, b: number) => boolean>; // [string, number]

// Infer from object properties
type GetPropertyValue<T, K extends string> = K extends keyof T ? T[K] : never;

interface Example {
  name: string;
  age: number;
}

type T1 = GetPropertyValue<Example, 'name'>; // string
type T2 = GetPropertyValue<Example, 'age'>; // number

// ============================================
// 8. ADVANCED INFER PATTERNS
// ============================================

// Infer from string template
type ParseEventName<T extends string> = T extends `on${infer Event}` 
  ? Uncapitalize<Event> 
  : never;

type T3 = ParseEventName<'onClick'>; // "click"
type T4 = ParseEventName<'onFocus'>; // "focus"

// Infer multiple parts
type ParseUrl<T extends string> = T extends `${infer Protocol}://${infer Host}/${infer Path}`
  ? { protocol: Protocol; host: Host; path: Path }
  : never;

type T5 = ParseUrl<'https://example.com/users'>;
// { protocol: "https"; host: "example.com"; path: "users" }

// Infer with conditions
type ExtractFunction<T> = T extends (...args: any[]) => any ? T : never;
type ExtractObject<T> = T extends object ? (T extends Function ? never : T) : never;

// Recursive infer
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type T6 = Flatten<string>; // string
type T7 = Flatten<string[]>; // string
type T8 = Flatten<string[][]>; // string
type T9 = Flatten<number[][][]>; // number

// ============================================
// 9. CONDITIONAL TYPE CHAINING
// ============================================

// Chain multiple conditions
type DescribeType<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  T extends object ? 'object' :
  'unknown';

type T10 = DescribeType<'hello'>; // 'string'
type T11 = DescribeType<42>; // 'number'
type T12 = DescribeType<true>; // 'boolean'
type T13 = DescribeType<{}>; // 'object'
type T14 = DescribeType<() => void>; // 'function'

// ============================================
// 10. MAPPED + CONDITIONAL COMBINED
// ============================================

// Deep partial
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface NestedConfig {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  cache: {
    enabled: boolean;
    ttl: number;
  };
}

type PartialConfig = DeepPartial<NestedConfig>;
// All properties optional at all levels

// Deep readonly
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Deep required
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};

// Pick only string properties
type StringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

interface Mixed {
  name: string;
  age: number;
  email: string;
  active: boolean;
}

type OnlyStrings = StringProperties<Mixed>; // { name: string; email: string }

// ============================================
// 11. TYPE TRANSFORMATION UTILITIES
// ============================================

// Convert all properties to strings
type ToString<T> = {
  [K in keyof T]: string;
};

type StringPerson = ToString<Person>;
// { name: string; age: string; email: string }

// Convert all properties to optional strings
type ToOptionalString<T> = {
  [K in keyof T]?: string;
};

// Wrap all properties in Promise
type Asyncify<T> = {
  [K in keyof T]: Promise<T[K]>;
};

type AsyncPerson = Asyncify<Person>;
// { name: Promise<string>; age: Promise<number>; email: Promise<string> }

// Wrap all function properties in Promise
type AsyncifyFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : T[K];
};

interface API {
  getUser(id: number): Person;
  deleteUser(id: number): void;
  version: string;
}

type AsyncAPI = AsyncifyFunctions<API>;
// {
//   getUser(id: number): Promise<Person>;
//   deleteUser(id: number): Promise<void>;
//   version: string;
// }

// ============================================
// 12. FILTER UTILITY TYPES
// ============================================

// Keep only required properties
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// Filter by property type
type FilterByType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

type StringFields = FilterByType<Mixed, string>; // { name: string; email: string }
type NumberFields = FilterByType<Mixed, number>; // { age: number }

// Keep only functions
type KeepFunctions<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

// Keep only non-functions
type KeepNonFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};

// ============================================
// 13. TUPLE MAPPING
// ============================================

// Map over tuple elements
type TupleMap<T extends any[], F extends (x: any) => any> = {
  [K in keyof T]: F extends (x: T[K]) => infer R ? R : never;
};

// Make all tuple elements optional
type OptionalTuple<T extends any[]> = {
  [K in keyof T]?: T[K];
};

type T15 = OptionalTuple<[string, number, boolean]>; // [string?, number?, boolean?]

// Make tuple readonly
type ReadonlyTuple<T extends any[]> = {
  readonly [K in keyof T]: T[K];
};

// ============================================
// 14. STRING TYPE MANIPULATION
// ============================================

// Check if string starts with prefix
type StartsWith<T extends string, P extends string> = T extends `${P}${any}` ? true : false;

type T16 = StartsWith<'hello world', 'hello'>; // true
type T17 = StartsWith<'hello world', 'world'>; // false

// Check if string ends with suffix
type EndsWith<T extends string, S extends string> = T extends `${any}${S}` ? true : false;

// Replace first occurrence
type ReplaceFirst<T extends string, S extends string, D extends string> = 
  T extends `${infer P}${S}${infer R}` ? `${P}${D}${R}` : T;

type T18 = ReplaceFirst<'hello world', 'world', 'universe'>; // "hello universe"

// Replace all occurrences
type ReplaceAll<T extends string, S extends string, D extends string> = 
  T extends `${infer P}${S}${infer R}` ? `${P}${D}${ReplaceAll<R, S, D>}` : T;

type T19 = ReplaceAll<'a.b.c.d', '.', '-'>; // "a-b-c-d"

// Split string
type Split<T extends string, D extends string> = 
  T extends `${infer P}${D}${infer R}` ? [P, ...Split<R, D>] : [T];

type T20 = Split<'a,b,c,d', ','>; // ["a", "b", "c", "d"]

// Trim whitespace
type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;
type Trim<T extends string> = TrimLeft<TrimRight<T>>;

type T21 = Trim<'  hello  '>; // "hello"

// ============================================
// 15. NUMBER TYPE OPERATIONS
// ============================================

// Check if number is zero
type IsZero<T extends number> = 0 extends T ? (T extends 0 ? true : false) : false;

// Increment number (limited)
type Increment<T extends number> = 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][T] extends infer R
    ? R extends number ? R : never
    : never;

// Compare numbers
type LessThan<A extends number, B extends number> = 
  number extends A | B ? boolean :
  A extends B ? false :
  [A] extends [LessThan<A, B> extends true ? A : never] ? false : true;

// ============================================
// 16. COMPLETE EXAMPLE - API BUILDER
// ============================================

// Define API routes
type Routes = {
  '/users': {
    GET: { response: { users: Person[] } };
    POST: { body: { name: string; email: string }; response: Person };
  };
  '/users/:id': {
    GET: { params: { id: number }; response: Person };
    PUT: { params: { id: number }; body: Partial<Person>; response: Person };
    DELETE: { params: { id: number }; response: void };
  };
};

// Generate API client types
type ApiClient<T extends Record<string, any>> = {
  [Path in keyof T]: {
    [Method in keyof T[Path]]: (
      args: T[Path][Method] extends { params: infer P; body: infer B }
        ? { params: P; body: B }
        : T[Path][Method] extends { params: infer P }
          ? { params: P }
          : T[Path][Method] extends { body: infer B }
            ? { body: B }
            : void
    ) => Promise<T[Path][Method]['response']>;
  };
};

type MyApiClient = ApiClient<Routes>;

// Usage type
declare const api: MyApiClient;

// api['/users'].GET() -> Promise<{ users: Person[] }>
// api['/users'].POST({ body: { name: 'John', email: 'john@example.com' } }) -> Promise<Person>
// api['/users/:id'].GET({ params: { id: 1 } }) -> Promise<Person>

// ============================================
// 17. COMPLETE EXAMPLE - FORM VALIDATION
// ============================================

// Define validation rules
type ValidationRules<T> = {
  [K in keyof T]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: T[K]) => boolean;
  };
};

// Form state with validation
type FormState<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValidating: boolean;
  isSubmitting: boolean;
};

// Form helpers
type FormHelpers<T> = {
  getField: (name: keyof T) => {
    value: T[keyof T];
    error?: string;
    touched: boolean;
  };
  setField: (name: keyof T, value: T[keyof T]) => void;
  setErrors: (errors: Partial<Record<keyof T, string>>) => void;
  validate: () => Promise<boolean>;
  submit: () => Promise<void>;
};

// Complete form type
type Form<T> = FormState<T> & FormHelpers<T>;

// ============================================
// 18. COMPLETE EXAMPLE - EVENT SYSTEM
// ============================================

// Event map
type EventMap = {
  user:created: { userId: number; timestamp: Date };
  user:updated: { userId: number; changes: Partial<Person> };
  user:deleted: { userId: number };
  order:placed: { orderId: number; total: number };
  order:shipped: { orderId: number; trackingNumber: string };
};

// Event handler type
type EventHandler<T extends keyof EventMap> = (data: EventMap[T]) => void | Promise<void>;

// Event emitter interface
type EventEmitter<T extends Record<string, any>> = {
  on<K extends keyof T>(event: K, handler: EventHandler<K>): void;
  off<K extends keyof T>(event: K, handler: EventHandler<K>): void;
  emit<K extends keyof T>(event: K, data: T[K]): void;
};

// Usage
declare const emitter: EventEmitter<EventMap>;

emitter.on('user:created', (data) => {
  console.log(`User ${data.userId} created at ${data.timestamp}`);
});

emitter.emit('user:created', { userId: 1, timestamp: new Date() });

export {};
