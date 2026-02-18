# Chapter 5: Utility Types

**Duration**: 40 minutes | **Difficulty**: Intermediate

---

## Topics

### Partial<T>
Makes all properties optional:
```typescript
interface User { id: number; name: string; email: string; }
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }
```

### Required<T>
Makes all properties required:
```typescript
type RequiredUser = Required<PartialUser>;
```

### Pick<T, K>
Select specific properties:
```typescript
type UserName = Pick<User, "name">;
// { name: string; }
```

### Omit<T, K>
Exclude specific properties:
```typescript
type UserNoId = Omit<User, "id">;
// { name: string; email: string; }
```

### Record<K, T>
Key-value mapping:
```typescript
type UserMap = Record<string, User>;
// { [key: string]: User; }
```

### Other Utilities
- `Exclude<T, U>` - Exclude types
- `Extract<T, U>` - Extract types
- `NonNullable<T>` - Remove null/undefined
- `ReturnType<T>` - Get function return type
- `Parameters<T>` - Get function parameter types

---

## Next Steps

Continue to Chapter 6: Mapped Types
