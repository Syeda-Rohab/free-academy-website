# JavaScript Complete Course ☕

Complete JavaScript course from beginner to advanced - Master the language of the web!

## 📚 Course Structure

### JavaScript Basic Course (Chapters 1-12)
Beginner to Intermediate level - Build strong foundations

### JavaScript Advanced Course (Chapters 1-9)
Intermediate to Advanced level - Master advanced concepts

---

## 📖 Basic Course Chapters (1-12)

### 1-6: Foundations
- ✅ **Chapter 1: Setup** - VS Code, Browser, Node.js installation
- ✅ **Chapter 2: Introduction to JavaScript** - Definition, Importance, Role
- ✅ **Chapter 3: Variables (var/let/const)** - Declaration and scoping
- ✅ **Chapter 4: Data Types** - Primitive and Reference types
- ✅ **Chapter 5: Operators & Expressions** - Arithmetic, Comparison, Logical
- ✅ **Chapter 6: Control Flow** - if/else, switch, loops

### 7-12: Core Concepts
- ✅ **Chapter 7: Functions** - Declaration, Expression, Arrow, Callbacks
- ✅ **Chapter 8: Arrays** - Methods, Iteration, Manipulation
- ✅ **Chapter 9: Objects** - Properties, Methods, Destructuring
- ✅ **Chapter 10: DOM Manipulation** - Selecting, Modifying, Creating elements
- ✅ **Chapter 11: Events** - Event listeners, Common events, Form handling
- ✅ **Chapter 12: Basic Project** - Todo App implementation

---

## 📖 Advanced Course Chapters (1-9)

### 1-5: Advanced Concepts
- ✅ **Chapter 1: Closures & Scope** - Global, Function, Block scope, Closures
- ✅ **Chapter 2: Async JavaScript** - Callbacks, Promises, async/await
- ✅ **Chapter 3: ES6+ Features** - Arrow functions, Destructuring, Spread, etc.
- ✅ **Chapter 4: Prototypes & Classes** - Inheritance, super, Getters/Setters
- ✅ **Chapter 5: Higher-Order Functions** - Map, Filter, Reduce, Composition

### 6-9: Expert Level
- ✅ **Chapter 6: Error Handling** - try/catch, Custom errors, Validation
- ✅ **Chapter 7: Modules** - import/export, CommonJS, ES6 modules
- ✅ **Chapter 8: JSON & LocalStorage** - JSON methods, Browser storage
- ✅ **Chapter 9: Advanced Project** - E-Commerce App

---

## 🚀 Run the Courses

### Run Basic Course (Chapters 1-12)
```bash
cd free-codeacademy
node content/javascript/javascript-basic-course.js
```

### Run Advanced Course (Chapters 1-9)
```bash
cd free-codeacademy
node content/javascript/javascript-advanced-course.js
```

---

## 📝 Quick Reference

### Variables
```javascript
let name = "Alice";      // Block-scoped, can change
const age = 25;          // Block-scoped, cannot change
var oldWay = "legacy";   // Function-scoped (avoid)
```

### Data Types
```javascript
let str = "Hello";       // String
let num = 42;            // Number
let bool = true;         // Boolean
let arr = [1, 2, 3];     // Array
let obj = { key: "value" }; // Object
let nothing = null;      // Null
let notDefined;          // Undefined
```

### Functions
```javascript
// Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow Function
const add = (a, b) => a + b;

// Default Parameter
function welcome(name = "Guest") {
  return `Welcome, ${name}!`;
}
```

### Arrays
```javascript
const arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2);      // [2, 4, 6, 8, 10]
arr.filter(x => x > 2);   // [3, 4, 5]
arr.reduce((a, b) => a + b, 0); // 15
arr.find(x => x > 3);     // 4
```

### Objects
```javascript
const person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

// Destructuring
const { name, age } = person;
```

### Async/Await
```javascript
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

### DOM Manipulation
```javascript
// Select
const el = document.querySelector('.class');

// Modify
el.textContent = 'New Text';
el.style.color = 'red';

// Events
el.addEventListener('click', handler);
```

### Closures
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2
```

### Classes
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
```

---

## 📁 Files

- `javascript-basic-course.js` - Basic course (Chapters 1-12)
- `javascript-advanced-course.js` - Advanced course (Chapters 1-9)
- `README.md` - This documentation

---

## ✨ Output

### Basic Course Output:
- All 12 chapters with working examples
- Interactive Todo App project
- Variables, data types, functions demonstrated
- Arrays and objects manipulation
- DOM and Events concepts explained

### Advanced Course Output:
- All 9 chapters with working examples
- Complete E-Commerce App project
- Closures, prototypes, async patterns
- ES6+ features demonstration
- Error handling examples
- JSON and LocalStorage concepts

---

## 🎯 Course Features

- **21 Comprehensive Chapters**: 12 Basic + 9 Advanced
- **2 Complete Projects**: Todo App + E-Commerce App
- **Hands-on Examples**: Every concept with working code
- **Modern JavaScript**: ES6+ features throughout
- **Browser + Node.js**: Works in both environments
- **Real-world Projects**: Practical applications

---

## 📖 What You'll Learn

### Basic Course:
1. JavaScript setup and environment
2. JavaScript definition, importance, and role
3. Variable declarations (var, let, const)
4. All data types (primitive and reference)
5. Operators and expressions
6. Control flow (conditionals and loops)
7. Functions (all types and patterns)
8. Arrays and array methods
9. Objects and object manipulation
10. DOM manipulation concepts
11. Event handling concepts
12. Build a complete Todo App

### Advanced Course:
1. Closures and lexical scope
2. Asynchronous JavaScript (callbacks, promises, async/await)
3. ES6+ features (destructuring, spread, etc.)
4. Prototypes and classes
5. Higher-order functions
6. Error handling and debugging
7. Modules (import/export)
8. JSON and LocalStorage
9. Build a complete E-Commerce App

---

## 🔧 Requirements

- Node.js installed (for running outside browser)
- Text editor (VS Code recommended)
- Modern web browser (Chrome, Firefox, Edge)

---

## 🏆 Projects

### Basic Project: Todo App
- Add, remove, toggle todos
- Filter by status
- Track statistics
- Console-based implementation

### Advanced Project: E-Commerce App
- Product catalog with stock management
- Shopping cart with quantity updates
- Order processing and tracking
- Search and category filtering
- Customer information handling

---

## 💡 Tips for Learning

1. **Practice Daily**: Code every day, even if just 30 minutes
2. **Build Projects**: Apply what you learn in real projects
3. **Read Error Messages**: They help you understand what went wrong
4. **Use Console.log**: Debug your code effectively
5. **Experiment**: Try changing code and see what happens
6. **Ask Questions**: When stuck, search online or ask for help

---

Start learning JavaScript today! 🚀
