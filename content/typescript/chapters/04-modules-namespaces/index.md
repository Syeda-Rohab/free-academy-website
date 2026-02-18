# Chapter 4: Modules and Namespaces

**Duration**: 35 minutes | **Difficulty**: Intermediate

---

## Topics

### 1. ES6 Modules

```typescript
// Named exports
export const PI = 3.14159;
export function add(a: number, b: number): number {
  return a + b;
}

// Default export
export default class Calculator { }

// Import syntax
import Calculator, { PI, add } from './math';
import * as Math from './math';
```

### 2. Namespaces

```typescript
namespace Validation {
  export interface Validator {
    validate(value: string): boolean;
  }
  
  export class EmailValidator implements Validator {
    validate(value: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
  }
}
```

### 3. Declaration Files

```typescript
// types.d.ts
declare module "my-library" {
  export function greet(name: string): void;
  export const version: string;
}
```

---

## Next Steps

Continue to Chapter 5: Utility Types
