/**
 * ============================================
 * ASYNC & EXTERNAL TYPES IN TYPESCRIPT
 * Promise Types, Async/Await, React TypeScript, Node.js Types
 * ============================================
 */

// ============================================
// 1. PROMISE TYPES
// ============================================

// Basic promise type
const promise: Promise<string> = Promise.resolve('hello');

// Promise with union type
const unionPromise: Promise<string | number> = Promise.resolve(42);

// Promise that never resolves
const neverPromise: Promise<never> = new Promise(() => {});

// Promise with void (for side effects)
const voidPromise: Promise<void> = Promise.resolve().then(() => {
  console.log('Done');
});

// ============================================
// 2. ASYNC FUNCTION TYPES
// ============================================

// Async function always returns Promise
async function asyncFunc(): Promise<string> {
  return 'result';
}

// Type of async function
type AsyncFuncType = () => Promise<string>;

// Async function with parameters
async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return { id, name: 'User' };
}

// ============================================
// 3. AWAITED TYPE
// ============================================

// Unwrap promise type
type UnwrapPromise<T> = Awaited<T>;

type T1 = Awaited<Promise<string>>; // string
type T2 = Awaited<Promise<number[]>>; // number[]
type T3 = Awaited<Promise<Promise<string>>>; // string (nested)

// With async functions
type AsyncFuncReturn<T extends (...args: any[]) => any> = 
  Awaited<ReturnType<T>>;

async function getData(): Promise<{ id: number }> {
  return { id: 1 };
}

type DataType = AsyncFuncReturn<typeof getData>; // { id: number }

// ============================================
// 4. PROMISE COMBINATORS
// ============================================

// Promise.all type
async function promiseAll() {
  const [str, num, bool] = await Promise.all([
    Promise.resolve('hello'),
    Promise.resolve(42),
    Promise.resolve(true)
  ]);
  // str: string, num: number, bool: boolean
}

// Promise.all typed
type PromiseAllResult = Promise<[string, number, boolean]>;

// Promise.race type
async function promiseRace() {
  const result = await Promise.race([
    Promise.resolve('hello'),
    Promise.resolve(42)
  ]);
  // result: string | number
}

// Promise.allSettled type
async function promiseAllSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('success'),
    Promise.reject('error')
  ]);
  // results: Array<{ status: 'fulfilled'; value: string } | { status: 'rejected'; reason: string }>
}

// Promise.any type
async function promiseAny() {
  const result = await Promise.any([
    Promise.reject('error1'),
    Promise.resolve('success'),
    Promise.reject('error2')
  ]);
  // result: string
}

// ============================================
// 5. UTILITY TYPES FOR PROMISES
// ============================================

// Make function async
type Asyncify<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>;

function syncFn(a: number, b: string): boolean {
  return true;
}

type AsyncFn = Asyncify<typeof syncFn>;
// (a: number, b: string) => Promise<boolean>

// Unwrap all promises in object
type UnwrapPromiseObject<T extends Record<string, any>> = {
  [K in keyof T]: Awaited<T[K]>;
};

type ObjWithPromises = {
  name: Promise<string>;
  age: Promise<number>;
  city: string;
};

type UnwrappedObj = UnwrapPromiseObject<ObjWithPromises>;
// { name: string; age: number; city: string }

// ============================================
// 6. ASYNC ITERABLE TYPES
// ============================================

// Async generator function
async function* asyncGenerator(): AsyncGenerator<number> {
  let i = 0;
  while (true) {
    yield await Promise.resolve(i++);
  }
}

// Async iterable
async function consumeAsyncIterable() {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
}

// Async iterator type
type AsyncIteratorType = AsyncIterator<number, void, unknown>;

// ============================================
// 7. RETRY PATTERN WITH TYPES
// ============================================

interface RetryOptions {
  maxRetries?: number;
  delay?: number;
  backoff?: number;
}

async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxRetries = 3, delay = 1000, backoff = 2 } = options;
  
  let lastError: Error | undefined;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        await new Promise(resolve => 
          setTimeout(resolve, delay * Math.pow(backoff, attempt))
        );
      }
    }
  }
  
  throw lastError;
}

// Usage
const result = await withRetry(
  async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  },
  { maxRetries: 5, delay: 1000 }
);

// ============================================
// 8. DEBOUNCE & THROTTLE TYPES
// ============================================

// Debounced function type
type Debounced<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>;

function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): Debounced<T> {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    return new Promise((resolve, reject) => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        Promise.resolve(fn(...args))
          .then(resolve)
          .catch(reject);
      }, delay);
    });
  };
}

// Throttled function type
type Throttled<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => Promise<Awaited<ReturnType<T>>>;

function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): Throttled<T> {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (inThrottle) {
      return Promise.resolve(undefined as Awaited<ReturnType<T>>);
    }
    
    inThrottle = true;
    const result = fn(...args);
    
    setTimeout(() => {
      inThrottle = false;
    }, limit);
    
    return Promise.resolve(result);
  };
}

// ============================================
// 9. REACT TYPESCRIPT - COMPONENT TYPES
// ============================================

import React from 'react';

// FC with props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
};

// Function component without FC
function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

// ============================================
// 10. REACT HOOKS TYPES
// ============================================

// useState with explicit type
function Counter() {
  const [count, setCount] = React.useState<number>(0);
  const [user, setUser] = React.useState<{ id: number; name: string } | null>(null);
  
  // useState with inference
  const [items, setItems] = React.useState([]); // string[]
  
  return <div>{count}</div>;
}

// useEffect
function DataFetcher() {
  const [data, setData] = React.useState<string[] | null>(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    };
    
    fetchData();
    
    // Cleanup function
    return () => {
      console.log('Cleanup');
    };
  }, []); // Dependency array
  
  return <div>{data}</div>;
}

// useRef with type
function InputRef() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return <input ref={inputRef} />;
}

// useRef for mutable value
function MutableRef() {
  const renderCount = React.useRef<number>(0);
  renderCount.current += 1;
  
  return <div>Rendered {renderCount.current} times</div>;
}

// ============================================
// 11. CUSTOM HOOK TYPES
// ============================================

// Custom hook return type
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  return [storedValue, setValue];
}

// Usage
function MyComponent() {
  const [name, setName] = useLocalStorage<string>('name', '');
  const [age, setAge] = useLocalStorage<number>('age', 0);
  
  return <div>{name} - {age}</div>;
}

// Custom hook with object return
function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  
  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error, refetch: () => {} };
}

// Inferred return type
function useFetchUsage() {
  const { data, loading, error } = useFetch<{ id: number; name: string }>('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  
  return <div>{data.name}</div>;
}

// ============================================
// 12. REACT EVENT TYPES
// ============================================

function EventHandlers() {
  // Click event
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
  };
  
  // Change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  
  // Submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  // Keyboard event
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter pressed');
    }
  };
  
  // Focus event
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Focused');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      <button onClick={handleClick}>Click</button>
    </form>
  );
}

// ============================================
// 13. REACT CHILDREN TYPES
// ============================================

interface ContainerProps {
  // Single child
  singleChild: React.ReactElement;
  
  // Multiple children
  children: React.ReactNode;
  
  // Function as child
  renderChild: (name: string) => React.ReactNode;
  
  // Optional children
  optionalChildren?: React.ReactNode;
}

function Container({ singleChild, children, renderChild, optionalChildren }: ContainerProps) {
  return (
    <div>
      {singleChild}
      {children}
      {renderChild('John')}
      {optionalChildren}
    </div>
  );
}

// ============================================
// 14. REACT GENERIC COMPONENTS
// ============================================

// Generic list component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
function UserList() {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  
  return (
    <List
      items={users}
      renderItem={(user) => <span>{user.name}</span>}
      keyExtractor={(user) => user.id.toString()}
    />
  );
}

// Generic select component
interface SelectProps<T> {
  options: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
  onChange: (value: T) => void;
}

function Select<T>({ options, getLabel, getValue, onChange }: SelectProps<T>) {
  return (
    <select onChange={(e) => {
      const selected = options.find(opt => getValue(opt) === e.target.value);
      if (selected) onChange(selected);
    }}>
      {options.map(opt => (
        <option key={getValue(opt)} value={getValue(opt)}>
          {getLabel(opt)}
        </option>
      ))}
    </select>
  );
}

// ============================================
// 15. REACT HOC TYPES
// ============================================

// Higher Order Component type
type HOC<P extends object, I extends object = {}> = (
  component: React.ComponentType<P>
) => React.ComponentType<P & I>;

// withLoading HOC
function withLoading<P extends { loading: boolean }>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, 'loading'> & { loading?: boolean }> {
  return function WithLoading(props) {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
}

// Usage
interface UserCardProps {
  user: { name: string };
  loading: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, loading }) => {
  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
};

const UserCardWithLoading = withLoading(UserCard);

// ============================================
// 16. NODE.JS TYPE DEFINITIONS
// ============================================

import * as fs from 'fs';
import * as path from 'path';

// fs module types
function readFileExample() {
  // Promise-based
  fs.promises.readFile('file.txt', 'utf-8')
    .then((content: string) => console.log(content));
  
  // Callback-based
  fs.readFile('file.txt', 'utf-8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) throw err;
    console.log(data);
  });
}

// Stream types
function streamExample() {
  const readStream: fs.ReadStream = fs.createReadStream('input.txt');
  const writeStream: fs.WriteStream = fs.createWriteStream('output.txt');
  
  readStream.pipe(writeStream);
}

// Path types
function pathExample() {
  const absolutePath: string = path.resolve(__dirname, 'file.txt');
  const dirname: string = path.dirname(absolutePath);
  const basename: string = path.basename(absolutePath);
  const extname: string = path.extname(absolutePath);
}

// ============================================
// 17. EXPRESS TYPES
// ============================================

import express, { 
  Request, 
  Response, 
  NextFunction,
  RequestHandler 
} from 'express';

const app = express();

// Typed request handler
app.get('/users/:id', (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  res.json({ id: userId });
});

// Typed request body
interface CreateUserBody {
  name: string;
  email: string;
  age?: number;
}

app.post('/users', (
  req: Request<{}, {}, CreateUserBody>,
  res: Response
) => {
  const { name, email, age } = req.body;
  res.json({ name, email, age });
});

// Typed middleware
function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(`${req.method} ${req.path}`);
  next();
}

// Typed async handler
const asyncHandler = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

app.get('/data', asyncHandler(async (req, res) => {
  const data = await fetch('https://api.example.com/data');
  res.json(await data.json());
}));

// ============================================
// 18. DATABASE TYPES (PRISMA EXAMPLE)
// ============================================

// Prisma client types (example)
interface User {
  id: number;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  author: User;
}

// Repository pattern with types
interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: { email: string; name?: string }): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}

// ============================================
// 19. GRAPHQL TYPES
// ============================================

// GraphQL query types
interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string; path?: string[] }>;
}

interface UserQuery {
  user: {
    id: number;
    name: string;
    email: string;
    posts: Array<{
      id: number;
      title: string;
    }>;
  };
}

// Typed GraphQL client
async function graphqlQuery<T>(
  query: string,
  variables?: Record<string, any>
): Promise<GraphQLResponse<T>> {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  return response.json();
}

// Usage
async function getUser(id: number) {
  const result = await graphqlQuery<UserQuery>(
    `query GetUser($id: ID!) { user(id: $id) { id name email posts { id title } } }`,
    { id }
  );
  
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }
  
  return result.data!.user;
}

// ============================================
// 20. COMPLETE EXAMPLE - TYPE-SAFE API CLIENT
// ============================================

// API endpoint definitions
type ApiEndpoints = {
  'GET /users': { response: User[] };
  'GET /users/:id': { params: { id: number }; response: User };
  'POST /users': { body: { name: string; email: string }; response: User };
  'PUT /users/:id': { params: { id: number }; body: Partial<User>; response: User };
  'DELETE /users/:id': { params: { id: number }; response: void };
  'GET /posts': { query: { page?: number; limit?: number }; response: Post[] };
};

// Extract method and path
type ExtractMethod<T extends string> = T extends `${infer M} ${string}` ? M : never;
type ExtractPath<T extends string> = T extends `${string} ${infer P}` ? P : never;

// API client class
class ApiClient<Endpoints extends Record<string, any>> {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async request<Route extends keyof Endpoints>(
    route: Route,
    options: {
      params?: Endpoints[Route]['params'];
      query?: Endpoints[Route]['query'];
      body?: Endpoints[Route]['body'];
    } = {}
  ): Promise<Endpoints[Route]['response']> {
    const [method, path] = String(route).split(' ');
    let url = `${this.baseUrl}${path}`;
    
    // Replace path params
    if (options.params) {
      for (const [key, value] of Object.entries(options.params)) {
        url = url.replace(`:${key}`, String(value));
      }
    }
    
    // Add query params
    if (options.query) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(options.query)) {
        if (value !== undefined) {
          searchParams.append(key, String(value));
        }
      }
      url += `?${searchParams.toString()}`;
    }
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return response.json();
  }
}

// Usage
const api = new ApiClient<ApiEndpoints>('https://api.example.com');

// Type-safe API calls
async function example() {
  const users = await api.request('GET /users');
  const user = await api.request('GET /users/:id', { params: { id: 1 } });
  const newUser = await api.request('POST /users', { 
    body: { name: 'John', email: 'john@example.com' } 
  });
  const posts = await api.request('GET /posts', { 
    query: { page: 1, limit: 10 } 
  });
}

export {};
