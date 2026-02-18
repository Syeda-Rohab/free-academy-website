/**
 * ============================================
 * TYPE SYSTEM DEEP DIVE IN TYPESCRIPT
 * Never, Unknown, Any, Type Guards, Discriminated Unions
 * ============================================
 */

// ============================================
// 1. NEVER TYPE
// Represents value that never occurs
// ============================================

// Functions that never return
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Never exits
  }
}

// Use in union types
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: never }; // Error case has no data

// Use in conditional types
type ExcludeNever<T> = T extends never ? never : T;

// Never in arrays
const emptyArray: never[] = []; // Array that can never have elements

// Never as function parameter
function handleUnexpected(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

// ============================================
// 2. UNKNOWN TYPE
// Type-safe counterpart of any
// ============================================

// Unknown vs Any
let unknownValue: unknown;
let anyValue: any;

unknownValue = "hello"; // ✓
unknownValue = 42; // ✓
unknownValue = true; // ✓

// Need type narrowing before using unknown
// console.log(unknownValue.length); // ✗ Error
if (typeof unknownValue === 'string') {
  console.log(unknownValue.length); // ✓ OK after narrowing
}

// Any doesn't need narrowing
console.log(anyValue.length); // ✓ But unsafe

// Unknown in functions
function safeJsonParse(json: string): unknown {
  return JSON.parse(json);
}

const result = safeJsonParse('{"name": "John"}');
// Need to narrow before using
if (typeof result === 'object' && result !== null && 'name' in result) {
  console.log((result as { name: string }).name);
}

// Type guard for unknown
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase()); // ✓ value is string here
  }
}

// ============================================
// 3. ANY TYPE (AVOID WHEN POSSIBLE)
// ============================================

// Any disables type checking
let flexible: any;
flexible = "string";
flexible = 123;
flexible = { key: "value" };
flexible.nonExistentMethod(); // No error, but will crash at runtime

// When any might be necessary
function legacyFunction(data: any): any {
  // Working with untyped third-party code
  return data.process();
}

// Better: use unknown with type guards
function modernFunction(data: unknown): unknown {
  if (typeof data === 'object' && data !== null && 'process' in data) {
    return (data as { process: () => any }).process();
  }
  throw new Error('Invalid data');
}

// ============================================
// 4. TYPE COMPARISON
// ============================================

type ComparisonTable = {
  // Type | Assignment | Need Narrowing | Runtime Check
  // -------|------------|----------------|---------------
  // any    | Any        | No             | No
  // unknown| Any        | Yes            | Yes
  // never  | Never      | N/A            | N/A
  // void   | void/undefined | No        | No
};

// Void vs Never
function returnsVoid(): void {
  console.log("Returns nothing");
  // implicitly returns undefined
}

function returnsNever(): never {
  throw new Error("Never returns");
  // or infinite loop
}

// Void can be assigned undefined
const voidValue: void = undefined; // ✓
// const neverValue: never = undefined; // ✗ Error

// ============================================
// 5. TYPE GUARDS - TYPEOF
// ============================================

function processInput(input: string | number | boolean): void {
  if (typeof input === 'string') {
    // input is string
    console.log(input.toUpperCase());
  } else if (typeof input === 'number') {
    // input is number
    console.log(input.toFixed(2));
  } else {
    // input is boolean
    console.log(input ? 'Yes' : 'No');
  }
}

// Typeof with objects
function logValue(value: string | Date | RegExp): void {
  if (value instanceof Date) {
    console.log(value.toISOString());
  } else if (value instanceof RegExp) {
    console.log(value.source);
  } else {
    console.log(value); // string
  }
}

// ============================================
// 6. TYPE GUARDS - INSTANCEOF
// ============================================

class ErrorA {
  constructor(public message: string) {}
}

class ErrorB {
  constructor(public code: number) {}
}

function handleError(error: ErrorA | ErrorB): void {
  if (error instanceof ErrorA) {
    console.log('ErrorA:', error.message);
  } else {
    console.log('ErrorB:', error.code);
  }
}

// ============================================
// 7. TYPE GUARDS - IN
// ============================================

interface Cat {
  name: string;
  meow: () => void;
}

interface Dog {
  name: string;
  bark: () => void;
}

function makeSound(animal: Cat | Dog): void {
  if ('meow' in animal) {
    // animal is Cat
    animal.meow();
  } else {
    // animal is Dog
    animal.bark();
  }
}

// ============================================
// 8. TYPE GUARDS - TYPE PREDICATES
// ============================================

// Custom type predicate
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

const pet: Fish | Bird = { swim: () => console.log('Swimming') };

if (isFish(pet)) {
  pet.swim(); // pet is Fish
} else {
  pet.fly(); // pet is Bird
}

// ============================================
// 9. TYPE GUARDS - EQUALITY NARROWING
// ============================================

function checkStatus(status: 'success' | 'error' | 'loading'): void {
  if (status === 'success') {
    // status is 'success'
    console.log('Operation succeeded');
  } else if (status === 'error') {
    // status is 'error'
    console.log('Operation failed');
  } else {
    // status is 'loading'
    console.log('Loading...');
  }
}

// Null/undefined checks
function getValue(value: string | null | undefined): string {
  if (value == null) {
    return 'default';
  }
  // value is string
  return value;
}

// ============================================
// 10. DISCRIMINATED UNIONS
// ============================================

// Shape interface with discriminant
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      // shape is never here - exhaustive check
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

// ============================================
// 11. DISCRIMINATED UNIONS - API RESPONSES
// ============================================

interface SuccessResponse<T> {
  status: 'success';
  data: T;
}

interface ErrorResponse {
  status: 'error';
  error: {
    code: string;
    message: string;
  };
}

interface LoadingResponse {
  status: 'loading';
  progress?: number;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse | LoadingResponse;

function handleResponse<T>(response: ApiResponse<T>): void {
  switch (response.status) {
    case 'success':
      console.log('Data:', response.data);
      break;
    case 'error':
      console.log('Error:', response.error.message);
      break;
    case 'loading':
      console.log('Progress:', response.progress ?? 0);
      break;
  }
}

// ============================================
// 12. DISCRIMINATED UNIONS - STATE MACHINE
// ============================================

type ConnectionState = 
  | { status: 'disconnected' }
  | { status: 'connecting'; attempt: number }
  | { status: 'connected'; sessionId: string }
  | { status: 'error'; error: Error };

function handleConnection(state: ConnectionState): void {
  switch (state.status) {
    case 'disconnected':
      console.log('Disconnected');
      break;
    case 'connecting':
      console.log(`Connecting... attempt ${state.attempt}`);
      break;
    case 'connected':
      console.log(`Connected with session ${state.sessionId}`);
      break;
    case 'error':
      console.log('Connection error:', state.error.message);
      break;
  }
}

// ============================================
// 13. EXHAUSTIVE CHECKS
// ============================================

// Ensure all union members are handled
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

type Color = 'red' | 'green' | 'blue';

function getColorHex(color: Color): string {
  switch (color) {
    case 'red': return '#FF0000';
    case 'green': return '#00FF00';
    case 'blue': return '#0000FF';
    default: return assertNever(color); // Error if not exhaustive
  }
}

// With if/else
function getColorName(color: Color): string {
  if (color === 'red') return 'Red';
  if (color === 'green') return 'Green';
  if (color === 'blue') return 'Blue';
  
  return assertNever(color); // Will error if new color added
}

// ============================================
// 14. ADVANCED TYPE GUARDS
// ============================================

// Type guard with generics
function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

function processArray(value: unknown): void {
  if (isArray<number>(value)) {
    console.log(value.reduce((a, b) => a + b, 0));
  }
}

// Type guard for object properties
function hasProperty<T, K extends string>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> {
  return key in obj;
}

// Type guard for null
function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}

// Type guard for undefined
function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

// Combined type guard
function isPresent<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

// ============================================
// 15. TYPE GUARDS - TYPEOF WITH LITERALS
// ============================================

type LiteralType = 'success' | 'warning' | 'error' | 0 | 1 | 2;

function handleLiteral(value: LiteralType): void {
  if (value === 'success') {
    // value is 'success'
  } else if (value === 'warning') {
    // value is 'warning'
  } else if (value === 'error') {
    // value is 'error'
  } else {
    // value is 0 | 1 | 2
    console.log(`Numeric code: ${value}`);
  }
}

// ============================================
// 16. NARROWING WITH SWITCH TRUE
// ============================================

function narrowWithSwitch(value: string | number | boolean): void {
  switch (true) {
    case typeof value === 'string':
      // value is string
      console.log(value.toUpperCase());
      break;
    case typeof value === 'number':
      // value is number
      console.log(value.toFixed(2));
      break;
    default:
      // value is boolean
      console.log(value);
  }
}

// ============================================
// 17. NARROWING IN ARRAYS
// ============================================

function filterNumbers(values: (string | number)[]): number[] {
  return values.filter((v): v is number => typeof v === 'number');
}

function filterTruthy<T>(values: (T | null | undefined)[]): T[] {
  return values.filter((v): v is T => v != null);
}

// ============================================
// 18. NARROWING IN CALLBACKS
// ============================================

function processItems(items: Array<{ type: 'a'; a: string } | { type: 'b'; b: number }>): void {
  items.forEach(item => {
    if (item.type === 'a') {
      console.log(item.a); // item is { type: 'a'; a: string }
    } else {
      console.log(item.b); // item is { type: 'b'; b: number }
    }
  });
}

// ============================================
// 19. TYPE GUARDS WITH OPTIONAL PROPERTIES
// ============================================

interface BaseEvent {
  timestamp: number;
}

interface ClickEvent extends BaseEvent {
  type: 'click';
  x: number;
  y: number;
}

interface ScrollEvent extends BaseEvent {
  type: 'scroll';
  scrollX: number;
  scrollY: number;
}

interface ResizeEvent extends BaseEvent {
  type: 'resize';
  width?: number;
  height?: number;
}

type Event = ClickEvent | ScrollEvent | ResizeEvent;

function handleEvent(event: Event): void {
  switch (event.type) {
    case 'click':
      console.log(`Click at (${event.x}, ${event.y})`);
      break;
    case 'scroll':
      console.log(`Scroll to (${event.scrollX}, ${event.scrollY})`);
      break;
    case 'resize':
      // Optional properties still accessible
      console.log(`Resize to ${event.width}x${event.height}`);
      break;
  }
}

// ============================================
// 20. COMPLETE EXAMPLE - REDUCER PATTERN
// ============================================

// Action types
interface IncrementAction {
  type: 'INCREMENT';
  amount: number;
}

interface DecrementAction {
  type: 'DECREMENT';
  amount: number;
}

interface ResetAction {
  type: 'RESET';
}

interface SetAction {
  type: 'SET';
  value: number;
}

type CounterAction = IncrementAction | DecrementAction | ResetAction | SetAction;

// State type
interface CounterState {
  count: number;
  history: number[];
}

// Reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.amount,
        history: [...state.history, state.count + action.amount]
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.amount,
        history: [...state.history, state.count - action.amount]
      };
    case 'RESET':
      return {
        count: 0,
        history: [...state.history, 0]
      };
    case 'SET':
      return {
        ...state,
        count: action.value,
        history: [...state.history, action.value]
      };
    default:
      // Exhaustive check - will error if new action added
      const _exhaustive: never = action;
      return state;
  }
}

// Usage
let state: CounterState = { count: 0, history: [0] };

state = counterReducer(state, { type: 'INCREMENT', amount: 5 });
state = counterReducer(state, { type: 'INCREMENT', amount: 3 });
state = counterReducer(state, { type: 'DECREMENT', amount: 2 });
state = counterReducer(state, { type: 'RESET' });
state = counterReducer(state, { type: 'SET', value: 100 });

console.log(state);

// ============================================
// 21. COMPLETE EXAMPLE - PARSER COMBINATOR
// ============================================

// Result type
type ParseResult<T> = 
  | { success: true; value: T; remaining: string }
  | { success: false; error: string };

// Parser type
type Parser<T> = (input: string) => ParseResult<T>;

// String parser
function stringParser(expected: string): Parser<string> {
  return (input: string): ParseResult<string> => {
    if (input.startsWith(expected)) {
      return {
        success: true,
        value: expected,
        remaining: input.slice(expected.length)
      };
    }
    return {
      success: false,
      error: `Expected "${expected}"`
    };
  };
}

// Number parser
function numberParser(): Parser<number> {
  return (input: string): ParseResult<number> => {
    const match = input.match(/^\d+/);
    if (match) {
      return {
        success: true,
        value: parseInt(match[0], 10),
        remaining: input.slice(match[0].length)
      };
    }
    return {
      success: false,
      error: 'Expected number'
    };
  };
}

// Chain parsers
function chain<A, B>(parserA: Parser<A>, parserB: Parser<B>): Parser<[A, B]> {
  return (input: string): ParseResult<[A, B]> => {
    const resultA = parserA(input);
    if (!resultA.success) return resultA as ParseResult<[A, B]>;
    
    const resultB = parserB(resultA.remaining);
    if (!resultB.success) return resultB as ParseResult<[A, B]>;
    
    return {
      success: true,
      value: [resultA.value, resultB.value],
      remaining: resultB.remaining
    };
  };
}

// Usage
const parser = chain(stringParser('age='), numberParser());
const result = parser('age=25');

if (result.success) {
  console.log(result.value); // ['age=', 25]
  console.log(result.remaining); // ''
} else {
  console.error(result.error);
}

export {};
