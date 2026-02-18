# Advanced TypeScript Complete Course

Complete guide to advanced TypeScript concepts with practical examples.

## 📚 Course Modules

### 1. Advanced OOP (01-advanced-oop.ts)
- **Inheritance & Polymorphism**
  - Class inheritance with `extends`
  - Method overriding
  - Polymorphic behavior
- **Access Modifiers**
  - `public` - accessible everywhere
  - `protected` - accessible in class and subclasses
  - `private` - accessible only in the class
  - `readonly` - immutable after initialization
- **Abstract Classes**
  - Abstract methods and concrete methods
  - Cannot instantiate abstract classes
- **Getters & Setters**
  - Property accessors with validation
- **Static Members**
  - Static properties and methods
  - Shared across all instances

### 2. Decorators (02-decorators.ts)
- **Class Decorators** - Modify class behavior
- **Method Decorators** - Intercept method calls
- **Property Decorators** - Add metadata to properties
- **Parameter Decorators** - Decorate function parameters
- **Decorator Factories** - Parameterized decorators
- **Common Patterns**
  - Authorization (`@RequireAuth`)
  - Caching (`@Cache`)
  - Logging (`@LogMethod`)
  - Validation (`@MinLength`, `@IsEmail`)
  - API Controllers (`@ApiController`, `@Route`)

### 3. Advanced Generics (03-advanced-generics.ts)
- **Generic Constraints** - `extends` keyword
- **Generic Functions** - Type parameters in functions
- **Generic Classes** - Type parameters in classes
- **keyof Operator** - Get union of property names
- **Indexed Access Types** - Access nested types
- **Advanced Patterns**
  - Variadic tuple types
  - Nominal/branded types
  - Repository pattern

### 4. Modules and Namespaces (04-modules-namespaces.ts)
- **ES6 Modules**
  - Named exports
  - Default exports
  - Re-exports
- **Namespaces**
  - Namespace definition
  - Nested namespaces
  - Namespace merging
- **Declaration Files** - `.d.ts` files
- **Module Augmentation** - Extend existing modules
- **Dynamic Imports** - Code splitting

### 5. Utility Types (05-utility-types.ts)
- **Built-in Utilities**
  - `Partial<T>` - Make all properties optional
  - `Required<T>` - Make all properties required
  - `Readonly<T>` - Make all properties readonly
  - `Pick<T, K>` - Select specific properties
  - `Omit<T, K>` - Exclude specific properties
  - `Record<K, T>` - Object with specific key/value types
  - `Exclude<T, U>` - Exclude types from union
  - `Extract<T, U>` - Extract types from union
  - `NonNullable<T>` - Remove null/undefined
  - `ReturnType<T>` - Extract function return type
  - `Parameters<T>` - Extract function parameters
- **Custom Utilities**
  - DeepPartial, DeepRequired
  - Mutable, Nullable
  - Asyncify, Stringify

### 6. Mapped & Conditional Types (06-mapped-conditional-types.ts)
- **Mapped Types**
  - Basic mapping syntax
  - Type modifiers (`readonly`, `?`)
  - Key remapping with `as`
- **Conditional Types**
  - `T extends U ? X : Y`
  - Distributive conditional types
- **Infer Keyword**
  - Extract return types
  - Extract array elements
  - Extract promise values
- **Template Literal Types**
  - String manipulation at type level
  - Pattern matching

### 7. Type System Deep Dive (07-type-system-deep-dive.ts)
- **Never Type**
  - Functions that never return
  - Exhaustive checks
- **Unknown Type**
  - Type-safe alternative to `any`
  - Type narrowing required
- **Any Type** - When and when not to use
- **Type Guards**
  - `typeof` guards
  - `instanceof` guards
  - `in` operator
  - Type predicates
- **Discriminated Unions**
  - Tagged unions
  - Pattern matching with switch
  - Exhaustive checks

### 8. Advanced Patterns (08-advanced-patterns.ts)
- **Index Signatures** - Dynamic property access
- **Declaration Merging**
  - Interface merging
  - Namespace merging
  - Class merging
- **Cross-type Compatibility**
  - Structural typing
  - Variance (covariant, contravariant)
- **Brand/Opaque Types** - Type safety for primitives
- **Phantom Types** - Type-level state tracking
- **Type-level Programming**
  - Boolean logic at type level
  - Compile-time validation
- **Lens Pattern** - Functional property access

### 9. Async & External Types (09-async-external-types.ts)
- **Promise Types**
  - Basic promise typing
  - Promise combinators
- **Async/Await**
  - Async function types
  - `Awaited` utility type
- **Advanced Patterns**
  - Retry logic
  - Debounce & throttle
  - Async iterables
- **Node.js Types**
  - fs, path, stream types
  - Express types
- **Database Types** - Repository pattern

### 10. React TypeScript (10-react-typescript.tsx)
- **Component Types**
  - FC<Props> syntax
  - Props with children
- **Hooks**
  - useState, useEffect, useReducer
  - useContext, useRef
  - useMemo, useCallback
- **Event Types**
  - Mouse, keyboard, form events
  - Focus, drag, touch events
- **Generic Components**
  - List, Table, Select
- **Higher Order Components**
  - withLoading, withAuth
- **Custom Hooks**
  - useLocalStorage
  - useFetch
  - useDebounce
- **Error Boundaries** - Class component with error handling
- **Complete Example** - Task management app

## 🎯 Quick Reference

### Type vs Interface
```typescript
type Alias = { name: string };
interface Interface { name: string; }
```

### Generic Constraints
```typescript
function logLength<T extends { length: number }>(arg: T) {
  console.log(arg.length);
}
```

### Conditional Types
```typescript
type IsString<T> = T extends string ? true : false;
```

### Mapped Types
```typescript
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

### Type Guards
```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

## 📝 Practice Files

All examples are in executable TypeScript files:
- `01-advanced-oop.ts`
- `02-decorators.ts`
- `03-advanced-generics.ts`
- `04-modules-namespaces.ts`
- `05-utility-types.ts`
- `06-mapped-conditional-types.ts`
- `07-type-system-deep-dive.ts`
- `08-advanced-patterns.ts`
- `09-async-external-types.ts`
- `10-react-typescript.tsx`

Run any file with:
```bash
npx ts-node content/typescript-advanced/01-advanced-oop.ts
```
