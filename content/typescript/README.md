# TypeScript Complete Course 📝

Complete TypeScript course from beginner to advanced - Learn type-safe JavaScript!

## 📚 Course Structure

### TypeScript Basic Course (Chapters 1-7)
Beginner to Intermediate level

### TypeScript Advanced Course (Chapters 8-13)
Intermediate to Advanced level

---

## 📖 Basic Course Chapters (1-7)

### 1-4: Fundamentals
- ✅ Chapter 1: Introduction to TypeScript & Basic Types
- ✅ Chapter 2: Interfaces and Type Aliases
- ✅ Chapter 3: Functions with Type Safety
- ✅ Chapter 4: Generics and Reusable Code

### 5-7: Intermediate
- ✅ Chapter 5: Advanced Types (Unions, Guards, Utility Types)
- ✅ Chapter 6: Classes and OOP (Inheritance, Abstract Classes, Access Modifiers)
- ✅ Chapter 7: Getters, Setters, and Static Members

---

## 📖 Advanced Course Chapters (8-13)

### 8-10: Advanced Concepts
- ✅ Chapter 8: Decorators (Class, Method, Property)
- ✅ Chapter 9: Async/Await and Promises
- ✅ Chapter 10: Modules and Imports/Exports

### 11-13: Expert Level
- ✅ Chapter 11: Type Guards and Narrowing
- ✅ Chapter 12: Mapped Types
- ✅ Chapter 13: Conditional Types

---

## 🚀 Run the Courses

### Run Basic Course (Chapters 1-7)
```bash
cd free-codeacademy
npx tsc content/typescript/typescript-basic-course.ts --outDir dist --module commonjs --target es2015 && node dist/typescript-basic-course.js
```

### Run Advanced Course (Chapters 8-13)
```bash
cd free-codeacademy
npx tsc content/typescript/typescript-advanced-course.ts --outDir dist --module commonjs --target es2015 --experimentalDecorators --emitDecoratorMetadata && node dist/typescript-advanced-course.js
```

### Run Complete Course (All Chapters)
```bash
cd free-codeacademy
npx tsc content/typescript/typescript-complete-course.ts --outDir dist --module commonjs --target es2015 --experimentalDecorators --emitDecoratorMetadata && node dist/typescript-complete-course.js
```

## 📝 Quick Reference

### Variables
```typescript
let name: string = "Alice";
let age: number = 25;
```

### Functions
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Arrays
```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

### Interfaces
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

### Classes
```typescript
class Person {
  constructor(public name: string) {}
}
```

### Generics
```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

### Union Types
```typescript
type Result = string | number;
```

### Type Guards
```typescript
if (typeof value === "string") {
  // value is string here
}
```

### Async/Await
```typescript
async function fetchData(): Promise<string> {
  const data = await someAsyncOperation();
  return data;
}
```

## ✅ TypeScript vs Python

| Feature | Python | TypeScript |
|---------|--------|------------|
| Syntax | Simple, clean | More verbose |
| Types | Optional | Required/Strict |
| Run | `python file.py` | `npx ts-node file.ts` |
| Package | `pip install` | `npm install` |
| Async | `async/await` | `async/await` |
| File | `.py` | `.ts`, `.tsx` |
| Compilation | Interpreted | Compiled to JS |

## 📁 Files

- `typescript-complete-course.ts` - Complete course (800+ lines)
- `chapters/` - Chapter-wise detailed content with examples
- `templates/` - Templates for chapters, examples, and exercises
- `README.md` - This documentation

## ✨ Output

The course runs successfully and prints:
- TypeScript introduction and basic types
- Interface and type alias examples
- Function demonstrations
- Generic type examples
- Advanced type operations
- OOP with classes
- Decorator examples
- Async/await demonstrations
- Module exports/imports
- Type guards and narrowing
- Mapped types
- Conditional types

## 🎯 Course Features

- **13 Comprehensive Chapters**: From basics to advanced topics
- **800+ Lines of Code**: Practical, working examples
- **Type-Safe Code**: All examples compile without errors
- **Modern TypeScript**: Uses latest TypeScript features
- **Real-World Examples**: Practical use cases and patterns
- **Quiz Questions**: Test your knowledge after each chapter (in lib files)

## 📖 Additional Resources

- Chapter-wise content in `content/typescript/chapters/`
- Advanced TypeScript patterns in `lib/typescript-course.ts`
- React with TypeScript examples in chapter 12
- Node.js type definitions in chapter 13

## 🔧 Configuration

Enable decorators in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 🎓 Prerequisites

- Basic JavaScript knowledge
- Familiarity with programming concepts
- Node.js and npm installed

## 🏆 What You'll Learn

1. **Type System**: Static typing, type inference, type safety
2. **Interfaces**: Define object shapes and contracts
3. **Generics**: Write reusable, type-safe code
4. **OOP**: Classes, inheritance, polymorphism, encapsulation
5. **Advanced Types**: Unions, intersections, mapped types, conditional types
6. **Async Programming**: Promises, async/await patterns
7. **Modules**: Import/export, namespaces, declaration files
8. **Decorators**: Class and method decorators for metaprogramming

Start learning TypeScript today! 🚀
