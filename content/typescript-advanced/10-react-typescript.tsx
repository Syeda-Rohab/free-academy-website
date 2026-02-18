/**
 * ============================================
 * REACT TYPESCRIPT COMPLETE GUIDE
 * Props, State, Hooks, Events, Patterns
 * ============================================
 */

import React, { 
  useState, 
  useEffect, 
  useReducer, 
  useContext, 
  useRef, 
  useMemo, 
  useCallback,
  createContext,
  Suspense,
  ErrorBoundary
} from 'react';

// ============================================
// 1. BASIC COMPONENT TYPES
// ============================================

// Function Component with props
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return <div>Hello {name}, {age ? `you are ${age}` : ''}</div>;
};

// Alternative syntax (preferred)
function Welcome(props: GreetingProps) {
  return <div>Welcome {props.name}</div>;
}

// Destructured props
function Farewell({ name }: GreetingProps) {
  return <div>Goodbye {name}</div>;
}

// ============================================
// 2. CHILDREN PROP TYPES
// ============================================

interface ContainerProps {
  // Any renderable content
  children: React.ReactNode;
}

function Layout({ children }: ContainerProps) {
  return <div className="layout">{children}</div>;
}

// Specific children types
interface CardProps {
  // Single element
  header: React.ReactElement;
  // Multiple elements
  content: React.ReactNode;
  // Optional footer
  footer?: React.ReactNode;
}

function Card({ header, content, footer }: CardProps) {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="content">{content}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}

// Function as child
interface DataFetcherProps {
  url: string;
  children: (data: any, loading: boolean, error: Error | null) => React.ReactNode;
}

function DataFetcher({ url, children }: DataFetcherProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return <>{children(data, loading, error)}</>;
}

// Usage
function DataFetcherUsage() {
  return (
    <DataFetcher url="/api/data">
      {(data, loading, error) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return <div>{JSON.stringify(data)}</div>;
      }}
    </DataFetcher>
  );
}

// ============================================
// 3. USESTATE TYPES
// ============================================

function StateExamples() {
  // Primitive types (inferred)
  const [count, setCount] = useState(0); // number
  const [name, setName] = useState(''); // string
  const [active, setActive] = useState(false); // boolean
  
  // Explicit type annotation
  const [price, setPrice] = useState<number | null>(null);
  
  // Object state
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const [user, setUser] = useState<User | null>(null);
  
  // Update with callback
  const incrementCount = () => {
    setCount(prev => prev + 1);
  };
  
  // Update object state
  const updateUserName = (newName: string) => {
    setUser(prev => prev ? { ...prev, name: newName } : null);
  };
  
  // Array state
  const [items, setItems] = useState<string[]>([]);
  
  const addItem = (item: string) => {
    setItems(prev => [...prev, item]);
  };
  
  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };
  
  return <div>State Examples</div>;
}

// ============================================
// 4. USEEFFECT TYPES
// ============================================

function EffectExamples() {
  const [data, setData] = useState<any>(null);
  const [userId, setUserId] = useState(1);
  
  // Basic effect
  useEffect(() => {
    console.log('Component mounted or updated');
    
    // Cleanup
    return () => {
      console.log('Cleanup');
    };
  });
  
  // Effect with dependency
  useEffect(() => {
    console.log('userId changed');
  }, [userId]);
  
  // Async effect
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const result = await response.json();
        if (!cancelled) setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [userId]);
  
  // Effect with multiple dependencies
  useEffect(() => {
    console.log('Either userId or data changed');
  }, [userId, data]);
  
  return <div>Effect Examples</div>;
}

// ============================================
// 5. USEREDUCER TYPES
// ============================================

// Action types
interface IncrementAction {
  type: 'INCREMENT';
  payload: number;
}

interface DecrementAction {
  type: 'DECREMENT';
  payload: number;
}

interface ResetAction {
  type: 'RESET';
}

type CounterAction = IncrementAction | DecrementAction | ResetAction;

// State type
interface CounterState {
  count: number;
  history: number[];
}

// Initial state
const initialState: CounterState = { count: 0, history: [0] };

// Reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
        history: [...state.history, state.count + action.payload]
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
        history: [...state.history, state.count - action.payload]
      };
    case 'RESET':
      return initialState;
    default:
      // Exhaustive check
      const _exhaustive: never = action;
      return state;
  }
}

// Component with useReducer
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>History: {state.history.join(', ')}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}

// ============================================
// 6. USECONTEXT TYPES
// ============================================

// Context value type
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create context with default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using context
function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// Consumer component
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ background: theme === 'light' ? '#fff' : '#333' }}
    >
      Current theme: {theme}
    </button>
  );
}

// ============================================
// 7. USEREF TYPES
// ============================================

function RefExamples() {
  // Ref for DOM element
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  // Ref for mutable value
  const renderCount = useRef<number>(0);
  renderCount.current += 1;
  
  // Ref for previous value
  function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }
  
  const count = useState(0)[0];
  const prevCount = usePrevious(count);
  
  // Ref for interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

// ============================================
// 8. USEMEMO & USECALLBACK TYPES
// ============================================

function MemoizationExamples() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<number[]>([1, 2, 3]);
  
  // useMemo for expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);
  
  // useMemo for object reference stability
  const config = useMemo(() => ({
    theme: 'dark',
    language: 'en'
  }), []);
  
  // useCallback for function reference stability
  const handleClick = useCallback(() => {
    console.log('Clicked!', count);
  }, [count]);
  
  const addItem = useCallback((item: number) => {
    setItems(prev => [...prev, item]);
  }, []);
  
  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// ============================================
// 9. EVENT HANDLER TYPES
// ============================================

function EventHandlers() {
  // Mouse events
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    console.log(event.clientX, event.clientY);
  };
  
  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Double clicked');
  };
  
  // Form events
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
  
  // Keyboard events
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    console.log(event.ctrlKey, event.shiftKey, event.altKey);
  };
  
  // Focus events
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Focused');
  };
  
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Blurred');
  };
  
  // Drag events
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', 'data');
  };
  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    console.log(data);
  };
  
  // Wheel event
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    console.log(event.deltaY);
  };
  
  // Touch events
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    console.log(event.touches[0].clientX);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Click me
      </button>
      <select onChange={handleSelectChange}>
        <option value="1">Option 1</option>
      </select>
    </form>
  );
}

// ============================================
// 10. GENERIC COMPONENTS
// ============================================

// Generic list component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  emptyMessage?: string;
}

function List<T>({ 
  items, 
  renderItem, 
  keyExtractor,
  emptyMessage = 'No items'
}: ListProps<T>) {
  if (items.length === 0) {
    return <div>{emptyMessage}</div>;
  }
  
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// Usage
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];
  
  return (
    <List
      items={users}
      renderItem={(user) => (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
      keyExtractor={(user) => user.id.toString()}
    />
  );
}

// Generic table component
interface TableProps<T> {
  data: T[];
  columns: Array<{
    key: keyof T;
    title: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
  }>;
}

function Table<T extends { id: string | number }>({ 
  data, 
  columns 
}: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(col => (
              <td key={String(col.key)}>
                {col.render 
                  ? col.render(row[col.key], row)
                  : String(row[col.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Generic select component
interface SelectProps<T> {
  options: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => string | number;
  value?: T;
  onChange: (value: T) => void;
  placeholder?: string;
}

function Select<T>({ 
  options, 
  getLabel, 
  getValue, 
  value, 
  onChange,
  placeholder = 'Select...'
}: SelectProps<T>) {
  return (
    <select 
      value={value ? getValue(value) : ''}
      onChange={(e) => {
        const selected = options.find(opt => getValue(opt) === e.target.value);
        if (selected) onChange(selected);
      }}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map(opt => (
        <option key={getValue(opt)} value={getValue(opt)}>
          {getLabel(opt)}
        </option>
      ))}
    </select>
  );
}

// ============================================
// 11. HIGHER ORDER COMPONENTS
// ============================================

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

// withAuth HOC
interface AuthProps {
  isAuthenticated: boolean;
  user: { id: number; name: string } | null;
}

function withAuth<P extends AuthProps>(
  WrappedComponent: React.ComponentType<P>,
  redirectTo: string = '/login'
): React.FC<Omit<P, keyof AuthProps>> {
  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ id: number; name: string } | null>(null);
    
    useEffect(() => {
      // Check auth status
      const checkAuth = async () => {
        // Simulate auth check
        const authStatus = await Promise.resolve({ authenticated: true, user: { id: 1, name: 'John' } });
        setIsAuthenticated(authStatus.authenticated);
        setUser(authStatus.user);
      };
      checkAuth();
    }, []);
    
    if (!isAuthenticated) {
      return <div>Redirecting to {redirectTo}...</div>;
    }
    
    return <WrappedComponent {...(props as P)} isAuthenticated={isAuthenticated} user={user} />;
  };
}

// Usage
interface DashboardProps extends AuthProps {
  title: string;
}

const Dashboard: React.FC<DashboardProps> = ({ title, user }) => {
  return <div>Welcome {user?.name} to {title}</div>;
};

const ProtectedDashboard = withAuth<DashboardProps>(Dashboard);

// ============================================
// 12. ERROR BOUNDARY
// ============================================

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function SafeComponent() {
  return (
    <ErrorBoundary fallback={<div>Component failed to load</div>}>
      <SomeComponent />
    </ErrorBoundary>
  );
}

function SomeComponent() {
  // May throw error
  return <div>Content</div>;
}

// ============================================
// 13. CUSTOM HOOKS
// ============================================

// useLocalStorage hook
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      setStoredValue(prev => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    } catch (error) {
      console.error(error);
    }
  }, [key]);
  
  return [storedValue, setValue];
}

// useFetch hook
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(
  url: string,
  options?: RequestInit
): FetchState<T> & { refetch: () => void } {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });
  
  const fetchFn = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
    }
  }, [url, options]);
  
  useEffect(() => {
    fetchFn();
  }, [fetchFn]);
  
  return { ...state, refetch: fetchFn };
}

// Usage
function UserProfile({ userId }: { userId: number }) {
  const { data: user, loading, error, refetch } = useFetch<{
    id: number;
    name: string;
    email: string;
  }>(`/api/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

// useDebounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Usage
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

// ============================================
// 14. FORM HANDLING
// ============================================

interface FormData {
  name: string;
  email: string;
  age: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  age?: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: 0
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email';
    }
    
    if (formData.age < 18) {
      newErrors.age = 'Must be 18 or older';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Age</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
}

// ============================================
// 15. COMPLETE EXAMPLE - TASK MANAGEMENT APP
// ============================================

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

function TaskApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);
  
  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      completed: false,
      priority: 'medium',
      createdAt: new Date()
    };
    
    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle('');
  };
  
  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  
  return (
    <div className="task-app">
      <h1>Task Manager</h1>
      
      <div className="add-task">
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <div className="filters">
        {(['all', 'active', 'completed'] as FilterType[]).map(f => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.title}</span>
            <span className={`priority-${task.priority}`}>
              {task.priority}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <div className="stats">
        <p>Total: {tasks.length}</p>
        <p>Completed: {tasks.filter(t => t.completed).length}</p>
        <p>Active: {tasks.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
}

export {};
