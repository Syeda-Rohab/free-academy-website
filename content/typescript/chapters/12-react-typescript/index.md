# Chapter 12: React TypeScript

**Duration**: 50 minutes | **Difficulty**: Intermediate

---

## Topics

### Component Types

```typescript
import React, { FC } from 'react';

interface Props {
  title: string;
  count?: number;
}

const MyComponent: FC<Props> = ({ title, count = 0 }) => {
  return <div>{title} - {count}</div>;
};
```

### Props Typing

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}
```

### State Typing

```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);
```

### Hooks Typing

```typescript
// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useReducer
type Action = { type: "increment" } | { type: "decrement" };
const [state, dispatch] = useReducer(reducer, initialState);

// Custom hook
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  return [value, setValue] as const;
}
```

### Event Typing

```typescript
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
}

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e.clientX, e.clientY);
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
```

---

## Next Steps

Continue to Chapter 13: Node.js Type Definitions
