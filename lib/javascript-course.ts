import { Chapter } from './types';

export const javascriptBasicChapters: Chapter[] = [
  {
    id: 'js-basic-ch1-setup',
    title: 'Chapter 1: Setup',
    introduction: 'Set up JavaScript development environment and learn how to run JavaScript code.',
    topics: ['Browser Console', 'VS Code Setup', 'Node.js Installation', 'Running JavaScript'],
    content: `# JavaScript Setup

## 1.1 JavaScript Development Setup
- **Text Editor**: VS Code (Recommended)
- **Browser**: Chrome/Firefox with DevTools
- **Runtime**: Node.js for server-side JS

## 1.2 Running JavaScript
1. **In Browser Console**: Press F12 → Console tab
2. **In HTML file**: Use \`<script>\` tag
3. **In Node.js**: Run \`node filename.js\`

## 1.3 Your First JavaScript Program
\`\`\`javascript
console.log("Hello, World!");
// Output: Hello, World!
\`\`\`

✓ Setup Complete - Ready to code JavaScript!`,
    codeExamples: [
      {
        title: 'First JavaScript Code',
        code: 'console.log("Hello, World!");',
        explanation: 'Output text to the console'
      },
      {
        title: 'Running in Browser',
        code: '<script>\n  console.log("Running in browser!");\n</script>',
        explanation: 'Embed JavaScript in HTML'
      }
    ],
    quiz: {
      id: 'js-ch1-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which key opens browser console?',
          options: ['F12', 'F5', 'Ctrl+S', 'Alt+Tab'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'How do you run JavaScript in Node.js?',
          options: ['node file.js', 'run file.js', 'execute file.js', 'start file.js'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'JavaScript setup complete. You can now run JavaScript in browser console, HTML files, and Node.js.'
  },
  {
    id: 'js-basic-ch2-intro',
    title: 'Chapter 2: Introduction to JavaScript',
    introduction: 'Learn what JavaScript is and why it\'s essential for web development.',
    topics: ['JavaScript Definition', 'History', 'Uses', 'Web Development Role'],
    content: `# Introduction to JavaScript

## 2.1 JavaScript Definition
JavaScript is a high-level, interpreted programming language. It makes websites interactive and runs in every modern web browser.

## 2.2 Why JavaScript is Important?
1. **#1 Web Development Language** - Used by 98% of websites
2. **Runs in Every Browser** - Universal compatibility
3. **Frontend + Backend** - Full-stack development
4. **Mobile Apps** - React Native
5. **Desktop Apps** - Electron
6. **Games** - Browser-based games
7. **AI/ML** - TensorFlow.js

## 2.3 JavaScript History
- **1995**: Created by Brendan Eich in 10 days
- **1997**: ECMAScript standard created
- **2009**: Node.js brought server-side JavaScript
- **2015**: ES6 - Major update
- **2026**: Used everywhere!

✓ JavaScript is the Language of the Web!`,
    codeExamples: [
      {
        title: 'Simple JavaScript',
        code: 'console.log("JavaScript is awesome!");\nalert("Welcome!");',
        explanation: 'Basic output methods'
      }
    ],
    quiz: {
      id: 'js-ch2-quiz',
      questions: [
        {
          id: 'q1',
          question: 'In which year was JavaScript created?',
          options: ['1995', '2000', '1990', '2005'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'JavaScript is essential for modern web development, used everywhere from browsers to servers.'
  },
  {
    id: 'js-basic-ch3-variables',
    title: 'Chapter 3: Variables (var/let/const)',
    introduction: 'Learn how to store and manage data using variables in JavaScript.',
    topics: ['var keyword', 'let keyword', 'const keyword', 'Variable naming rules'],
    content: `# Variables in JavaScript

## 3.1 What is a Variable?
A variable is a container that stores data values.

## 3.2 var Keyword (Old Way - Avoid)
\`\`\`javascript
var oldVariable = "I am var";
console.log(oldVariable);
\`\`\`
**Problem**: Function-scoped, can be redeclared

## 3.3 let Keyword (Modern Way)
\`\`\`javascript
let modernVariable = "I am let";
console.log(modernVariable);
modernVariable = "Changed!";
console.log(modernVariable);
\`\`\`
**Feature**: Block-scoped, can be changed

## 3.4 const Keyword (For Constants)
\`\`\`javascript
const constantValue = "Cannot Change";
console.log(constantValue);
// constantValue = "New"; // Error!
\`\`\`
**Feature**: Block-scoped, cannot be changed

## 3.5 Variable Naming Rules
✓ Valid:
- \`let userName = "Alice";\` (camelCase)
- \`let user_age = 25;\` (snake_case)
- \`let $price = 100;\` ($ allowed)
- \`let _private = "secret";\` (_ allowed)

✗ Invalid:
- \`let 123name = "test";\` (cannot start with number)
- \`let user-name = "test";\` (- not allowed)

## 3.6 Best Practices
- Use \`let\` and \`const\`
- Avoid \`var\`
- Use descriptive names
- Follow camelCase

✓ Variables Complete!`,
    codeExamples: [
      {
        title: 'Variable Examples',
        code: 'let name = "Alice";\nconst age = 25;\nvar old = "avoid";\n\nconsole.log(name, age);',
        explanation: 'Modern variable declaration'
      }
    ],
    quiz: {
      id: 'js-ch3-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which keyword creates a constant that cannot be changed?',
          options: ['const', 'let', 'var', 'fixed'],
          correctAnswer: 0
        },
        {
          id: 'q2',
          question: 'Which variable declaration is block-scoped?',
          options: ['let and const', 'var only', 'let only', 'const only'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Use let for variables that change, const for constants, and avoid var in modern JavaScript.'
  },
  {
    id: 'js-basic-ch4-datatypes',
    title: 'Chapter 4: Data Types',
    introduction: 'Learn about primitive and reference data types in JavaScript.',
    topics: ['String', 'Number', 'Boolean', 'Null', 'Undefined', 'Symbol', 'BigInt', 'Array', 'Object'],
    content: `# Data Types in JavaScript

## 4.1 Primitive Data Types (7 types)

### 1. STRING - Text
\`\`\`javascript
let str = "Hello JavaScript";
console.log(typeof str); // "string"
\`\`\`

### 2. NUMBER - Numbers (integer & decimal)
\`\`\`javascript
let num = 42;
let float = 3.14;
console.log(typeof num); // "number"
\`\`\`

### 3. BOOLEAN - True/False
\`\`\`javascript
let bool = true;
console.log(typeof bool); // "boolean"
\`\`\`

### 4. NULL - Intentionally empty
\`\`\`javascript
let empty = null;
console.log(typeof empty); // "object" (bug in JS)
\`\`\`

### 5. UNDEFINED - Value not assigned
\`\`\`javascript
let notAssigned;
console.log(notAssigned); // undefined
\`\`\`

### 6. SYMBOL - Unique identifier
\`\`\`javascript
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
\`\`\`

### 7. BIGINT - Very large numbers
\`\`\`javascript
let big = 9007199254740991n;
console.log(typeof big); // "bigint"
\`\`\`

## 4.2 Reference Data Types

### 1. ARRAY
\`\`\`javascript
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object"
\`\`\`

### 2. OBJECT
\`\`\`javascript
let obj = { name: "Alice", age: 25 };
console.log(typeof obj); // "object"
\`\`\`

### 3. FUNCTION
\`\`\`javascript
let fn = function() { return "Hello"; };
console.log(typeof fn); // "function"
\`\`\`

## 4.3 Type Conversion
\`\`\`javascript
Number("42")      // 42
String(42)        // "42"
Boolean(1)        // true
\`\`\`

✓ Data Types Complete!`,
    codeExamples: [
      {
        title: 'Data Types Example',
        code: 'let name = "Alice";\nlet age = 25;\nlet isStudent = true;\nlet hobbies = ["coding", "reading"];\n\nconsole.log(typeof name, typeof age, typeof isStudent);',
        explanation: 'Different data types in use'
      }
    ],
    quiz: {
      id: 'js-ch4-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is typeof null in JavaScript?',
          options: ['object', 'null', 'undefined', 'number'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'JavaScript has 7 primitive types (string, number, boolean, null, undefined, symbol, bigint) and reference types (array, object, function).'
  },
  {
    id: 'js-basic-ch5-operators',
    title: 'Chapter 5: Operators & Expressions',
    introduction: 'Learn about arithmetic, comparison, logical, and assignment operators.',
    topics: ['Arithmetic Operators', 'Comparison Operators', 'Logical Operators', 'Assignment Operators', 'Ternary Operator'],
    content: `# Operators & Expressions

## 5.1 Arithmetic Operators
\`\`\`javascript
let x = 10, y = 3;

x + y   // Addition: 13
x - y   // Subtraction: 7
x * y   // Multiplication: 30
x / y   // Division: 3.33
x % y   // Modulus (remainder): 1
x ** 2  // Exponentiation: 100
x++     // Increment: 11
x--     // Decrement: 9
\`\`\`

## 5.2 Assignment Operators
\`\`\`javascript
let a = 5;
a += 3;  // a = a + 3 → 8
a -= 2;  // a = a - 2 → 6
a *= 2;  // a = a * 2 → 12
a /= 2;  // a = a / 2 → 6
\`\`\`

## 5.3 Comparison Operators
\`\`\`javascript
5 == '5'    // Equal (loose): true
5 === '5'   // Strict Equal: false
5 != '5'    // Not Equal: false
5 !== '5'   // Strict Not: true
10 > 5      // Greater Than: true
10 < 5      // Less Than: false
10 >= 10    // Greater or Equal: true
10 <= 5     // Less or Equal: false
\`\`\`

## 5.4 Logical Operators
\`\`\`javascript
true && false  // AND: false
true || false  // OR: true
!true          // NOT: false
\`\`\`

## 5.5 Ternary Operator
\`\`\`javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
\`\`\`

✓ Operators Complete!`,
    codeExamples: [
      {
        title: 'Operators Example',
        code: 'let a = 10, b = 3;\nconsole.log(a + b, a - b, a * b);\nconsole.log(a > b, a === b);\nconsole.log(a > 5 && b < 5);',
        explanation: 'Using various operators'
      }
    ],
    quiz: {
      id: 'js-ch5-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is 5 === "5"?',
          options: ['false', 'true', 'undefined', 'error'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Operators allow you to perform calculations, comparisons, and logical operations in JavaScript.'
  },
  {
    id: 'js-basic-ch6-controlflow',
    title: 'Chapter 6: Control Flow',
    introduction: 'Learn how to control program flow using if/else, switch, and loops.',
    topics: ['if/else statements', 'switch statements', 'for loops', 'while loops'],
    content: `# Control Flow

## 6.1 if/else Statements
\`\`\`javascript
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
\`\`\`

## 6.2 switch Statement
\`\`\`javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day");
}
\`\`\`

## 6.3 for Loop
\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
\`\`\`

## 6.4 while Loop
\`\`\`javascript
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}
\`\`\`

## 6.5 do...while Loop
\`\`\`javascript
let i = 0;
do {
  console.log("i:", i);
  i++;
} while (i < 5);
\`\`\`

✓ Control Flow Complete!`,
    codeExamples: [
      {
        title: 'Control Flow Example',
        code: 'let num = 3;\nif (num > 0) {\n  for (let i = 0; i < num; i++) {\n    console.log("Hello", i);\n  }\n}',
        explanation: 'Combining if and for loop'
      }
    ],
    quiz: {
      id: 'js-ch6-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which loop runs at least once?',
          options: ['do...while', 'while', 'for', 'forEach'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Control flow statements let you make decisions and repeat code blocks in your programs.'
  },
  {
    id: 'js-basic-ch7-functions',
    title: 'Chapter 7: Functions',
    introduction: 'Learn how to create reusable code blocks with functions.',
    topics: ['Function declaration', 'Function expression', 'Arrow functions', 'Parameters and return'],
    content: `# Functions

## 7.1 Function Declaration
\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"
\`\`\`

## 7.2 Function Expression
\`\`\`javascript
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8
\`\`\`

## 7.3 Arrow Functions (ES6)
\`\`\`javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 3)); // 12
\`\`\`

## 7.4 Default Parameters
\`\`\`javascript
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
\`\`\`

## 7.5 Rest Parameters
\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
\`\`\`

✓ Functions Complete!`,
    codeExamples: [
      {
        title: 'Function Types',
        code: 'function add(a, b) { return a + b; }\nconst sub = (a, b) => a - b;\nconsole.log(add(5, 3), sub(10, 4));',
        explanation: 'Different function syntaxes'
      }
    ],
    quiz: {
      id: 'js-ch7-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you write an arrow function?',
          options: ['const fn = () => {}', 'const fn = function() {}', 'function fn() {}', 'const fn = > {}'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Functions are reusable blocks of code that can take inputs (parameters) and return outputs.'
  },
  {
    id: 'js-basic-ch8-arrays',
    title: 'Chapter 8: Arrays',
    introduction: 'Learn how to store and manipulate collections of data using arrays.',
    topics: ['Array creation', 'Array methods', 'forEach', 'map', 'filter', 'reduce'],
    content: `# Arrays

## 8.1 Creating Arrays
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "two", true, null];
\`\`\`

## 8.2 Accessing Array Elements
\`\`\`javascript
let arr = [10, 20, 30, 40];
console.log(arr[0]); // 10
console.log(arr[arr.length - 1]); // 40
\`\`\`

## 8.3 Array Methods
\`\`\`javascript
let arr = [1, 2, 3, 4, 5];

arr.push(6);        // Add to end
arr.pop();          // Remove from end
arr.unshift(0);     // Add to start
arr.shift();        // Remove from start
arr.slice(1, 3);    // Get portion [2, 3]
arr.splice(2, 1);   // Remove at index
\`\`\`

## 8.4 forEach
\`\`\`javascript
[1, 2, 3].forEach((num, index) => {
  console.log(num * 2); // 2, 4, 6
});
\`\`\`

## 8.5 map
\`\`\`javascript
let doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2, 4, 6]
\`\`\`

## 8.6 filter
\`\`\`javascript
let evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
\`\`\`

## 8.7 reduce
\`\`\`javascript
let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
\`\`\`

✓ Arrays Complete!`,
    codeExamples: [
      {
        title: 'Array Methods',
        code: 'let nums = [1, 2, 3, 4];\nlet doubled = nums.map(n => n * 2);\nlet evens = nums.filter(n => n % 2 === 0);\nconsole.log(doubled, evens);',
        explanation: 'Using map and filter'
      }
    ],
    quiz: {
      id: 'js-ch8-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which method creates a new array by transforming each element?',
          options: ['map', 'forEach', 'filter', 'reduce'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Arrays store collections of data and provide powerful methods like map, filter, and reduce for manipulation.'
  },
  {
    id: 'js-basic-ch9-objects',
    title: 'Chapter 9: Objects',
    introduction: 'Learn how to store complex data using objects with key-value pairs.',
    topics: ['Object creation', 'Properties', 'Methods', 'this keyword', 'Object methods'],
    content: `# Objects

## 9.1 Creating Objects
\`\`\`javascript
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
  hobbies: ["coding", "reading"]
};
\`\`\`

## 9.2 Accessing Properties
\`\`\`javascript
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation
\`\`\`

## 9.3 Adding/Updating Properties
\`\`\`javascript
person.city = "New York";      // Add
person.age = 26;               // Update
delete person.isStudent;       // Delete
\`\`\`

## 9.4 Methods
\`\`\`javascript
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3)); // 8
\`\`\`

## 9.5 this Keyword
\`\`\`javascript
let person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet(); // "Hello, I am Alice"
\`\`\`

## 9.6 Object Methods
\`\`\`javascript
let obj = { a: 1, b: 2 };

Object.keys(obj);    // ["a", "b"]
Object.values(obj);  // [1, 2]
Object.entries(obj); // [["a", 1], ["b", 2]]
\`\`\`

✓ Objects Complete!`,
    codeExamples: [
      {
        title: 'Object Example',
        code: 'let car = {\n  brand: "Tesla",\n  model: "Model 3",\n  start: function() {\n    return this.brand + " is starting";\n  }\n};\nconsole.log(car.start());',
        explanation: 'Object with method using this'
      }
    ],
    quiz: {
      id: 'js-ch9-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you access object property with dot notation?',
          options: ['obj.property', 'obj["property"]', 'obj(property)', 'obj->property'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Objects store data as key-value pairs and can contain methods (functions) that operate on the data.'
  },
  {
    id: 'js-basic-ch10-dom',
    title: 'Chapter 10: DOM Manipulation',
    introduction: 'Learn how to interact with and modify HTML elements using JavaScript.',
    topics: ['Selecting elements', 'Changing content', 'Modifying styles', 'Creating elements'],
    content: `# DOM Manipulation

## 10.1 What is DOM?
DOM (Document Object Model) is a tree-like structure representing the HTML document.

## 10.2 Selecting Elements
\`\`\`javascript
// By ID
const element = document.getElementById("myId");

// By Class
const elements = document.getElementsByClassName("myClass");

// By Tag
const divs = document.getElementsByTagName("div");

// Query Selector (Recommended)
const first = document.querySelector(".myClass");
const all = document.querySelectorAll(".myClass");
\`\`\`

## 10.3 Changing Content
\`\`\`javascript
element.textContent = "New text";
element.innerHTML = "<strong>Bold</strong>";
element.value = "Input value";
\`\`\`

## 10.4 Modifying Styles
\`\`\`javascript
element.style.color = "red";
element.style.fontSize = "20px";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
\`\`\`

## 10.5 Creating Elements
\`\`\`javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);
\`\`\`

✓ DOM Manipulation Complete!`,
    codeExamples: [
      {
        title: 'DOM Example',
        code: 'const btn = document.querySelector("#myBtn");\nbtn.style.backgroundColor = "blue";\nbtn.textContent = "Click Me!";',
        explanation: 'Selecting and modifying an element'
      }
    ],
    quiz: {
      id: 'js-ch10-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which method selects the first matching element?',
          options: ['querySelector', 'querySelectorAll', 'getElementById', 'getElementsByClass'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'DOM manipulation allows JavaScript to interact with HTML, changing content, styles, and structure dynamically.'
  },
  {
    id: 'js-basic-ch11-events',
    title: 'Chapter 11: Events',
    introduction: 'Learn how to handle user interactions like clicks, keypresses, and form submissions.',
    topics: ['Event listeners', 'Click events', 'Form events', 'Keyboard events', 'Event object'],
    content: `# Events

## 11.1 Adding Event Listeners
\`\`\`javascript
const button = document.querySelector("#myBtn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
\`\`\`

## 11.2 Common Events
\`\`\`javascript
// Click
element.addEventListener("click", handler);

// Mouse events
element.addEventListener("mouseover", handler);
element.addEventListener("mouseout", handler);

// Keyboard events
element.addEventListener("keydown", handler);
element.addEventListener("keyup", handler);

// Form events
form.addEventListener("submit", handler);
input.addEventListener("change", handler);
input.addEventListener("input", handler);
\`\`\`

## 11.3 Event Object
\`\`\`javascript
button.addEventListener("click", (event) => {
  console.log(event.target);    // Clicked element
  console.log(event.type);      // "click"
  event.preventDefault();       // Stop default behavior
});
\`\`\`

## 11.4 Removing Event Listeners
\`\`\`javascript
function handler() {
  console.log("Clicked!");
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);
\`\`\`

✓ Events Complete!`,
    codeExamples: [
      {
        title: 'Event Handler',
        code: 'const btn = document.querySelector("#btn");\nbtn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target);\n});',
        explanation: 'Adding a click event listener'
      }
    ],
    quiz: {
      id: 'js-ch11-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you add a click event listener?',
          options: ['addEventListener("click", fn)', 'onClick = fn', 'attachEvent("click", fn)', 'on("click", fn)'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Events allow JavaScript to respond to user actions like clicks, keypresses, and form submissions.'
  },
  {
    id: 'js-basic-ch12-project',
    title: 'Chapter 12: Project - Todo App',
    introduction: 'Build a complete Todo application using all the JavaScript concepts you\'ve learned.',
    topics: ['Project structure', 'Adding todos', 'Removing todos', 'Toggling completion', 'Filtering'],
    content: `# Project: Todo App

## 12.1 Project Overview
Build a console-based Todo application that allows you to:
- Add new todos
- Remove todos
- Toggle todo completion
- Filter todos by status
- Track statistics

## 12.2 Todo Class
\`\`\`javascript
class Todo {\n  constructor(text) {\n    this.id = Date.now();\n    this.text = text;\n    this.completed = false;\n  }\n}
\`\`\`

## 12.3 TodoList Class
\`\`\`javascript
class TodoList {\n  constructor() {\n    this.todos = [];\n  }\n\n  addTodo(text) {\n    const todo = new Todo(text);\n    this.todos.push(todo);\n  }\n\n  removeTodo(id) {\n    this.todos = this.todos.filter(t => t.id !== id);\n  }\n\n  toggleTodo(id) {\n    const todo = this.todos.find(t => t.id === id);\n    if (todo) todo.completed = !todo.completed;\n  }\n}
\`\`\`

## 12.4 Statistics
\`\`\`javascript
getStats() {\n  return {\n    total: this.todos.length,\n    completed: this.todos.filter(t => t.completed).length,\n    pending: this.todos.filter(t => !t.completed).length\n  };\n}
\`\`\`

✓ Project Complete!`,
    codeExamples: [
      {
        title: 'Todo App Structure',
        code: 'class Todo {\n  constructor(text) {\n    this.text = text;\n    this.completed = false;\n  }\n}\n\nclass TodoList {\n  constructor() { this.todos = []; }\n  add(text) { this.todos.push(new Todo(text)); }\n}',
        explanation: 'Basic Todo app structure'
      }
    ],
    quiz: {
      id: 'js-ch12-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which array method adds an element to the end?',
          options: ['push', 'pop', 'shift', 'unshift'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'The Todo app project combines variables, functions, arrays, objects, and classes into a complete application.'
  }
];

export const javascriptAdvancedChapters: Chapter[] = [
  {
    id: 'js-advanced-ch1-closures',
    title: 'Chapter 1: Closures & Scope',
    introduction: 'Master advanced scope concepts and understand closures in JavaScript.',
    topics: ['Global Scope', 'Function Scope', 'Block Scope', 'Lexical Scoping', 'Closures', 'IIFE'],
    content: `# Closures & Scope

## 1.1 What is Scope?
Scope defines where variables are accessible in your code.

## 1.2 Global Scope
\`\`\`javascript
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible everywhere
}

showGlobal();
\`\`\`

## 1.3 Function Scope
\`\`\`javascript
function showFunctionScope() {
  let functionVar = "I am inside function";
  console.log(functionVar);
}

showFunctionScope();
// console.log(functionVar); // Error: Not accessible
\`\`\`

## 1.4 Block Scope (let/const)
\`\`\`javascript
if (true) {
  let blockVar = "I am in block";
  const blockConst = "Constant";
  console.log(blockVar);
}
// console.log(blockVar); // Error: Not accessible outside block
\`\`\`

## 1.5 Lexical Scoping
\`\`\`javascript
function outer() {
  let outerVar = "Outer variable";

  function inner() {
    console.log(outerVar); // Inner accesses outer's variables
  }

  inner();
}
outer();
\`\`\`

## 1.6 Closures
\`\`\`javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
\`\`\`

## 1.7 IIFE (Immediately Invoked Function Expression)
\`\`\`javascript
(function() {
  let private = "I am private";
  console.log(private);
})();
// console.log(private); // Error
\`\`\`

✓ Closures & Scope Complete!`,
    codeExamples: [
      {
        title: 'Closure Example',
        code: 'function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter(), counter(), counter());',
        explanation: 'Closure maintains state between calls'
      }
    ],
    quiz: {
      id: 'js-adv-ch1-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What creates a closure in JavaScript?',
          options: ['Function inside another function', 'Global variable', 'Block scope', 'Arrow function'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Closures allow functions to remember and access variables from their outer scope even after the outer function has finished.'
  },
  {
    id: 'js-advanced-ch2-async',
    title: 'Chapter 2: Async JavaScript',
    introduction: 'Learn asynchronous programming with callbacks, promises, and async/await.',
    topics: ['Callbacks', 'Promises', 'async/await', 'Error handling', 'Fetch API'],
    content: `# Async JavaScript

## 2.1 Why Async JavaScript?
- API calls
- File operations
- Database operations
- Prevent UI freezing

## 2.2 Callbacks (Old Way)
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Sample data");
  }, 1000);
}

fetchData((data) => {
  console.log("Received:", data);
});
\`\`\`

## 2.3 Promises (Modern Way)
\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## 2.4 Promise States
- **Pending**: Initial state
- **Fulfilled**: Operation completed
- **Rejected**: Operation failed

## 2.5 async/await (Cleanest)
\`\`\`javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
\`\`\`

## 2.6 Fetch API
\`\`\`javascript
// GET request
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));

// POST request
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Alice" })
});
\`\`\`

✓ Async JavaScript Complete!`,
    codeExamples: [
      {
        title: 'Async/Await Example',
        code: 'async function fetchData() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n  return data;\n}',
        explanation: 'Modern async data fetching'
      }
    ],
    quiz: {
      id: 'js-adv-ch2-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What keyword is used to wait for a Promise?',
          options: ['await', 'async', 'then', 'wait'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Async JavaScript allows non-blocking operations using callbacks, promises, or async/await syntax.'
  },
  {
    id: 'js-advanced-ch3-es6',
    title: 'Chapter 3: ES6+ Features',
    introduction: 'Master modern JavaScript features introduced in ES6 and beyond.',
    topics: ['Arrow functions', 'Destructuring', 'Spread operator', 'Rest parameters', 'Template literals', 'Modules'],
    content: `# ES6+ Features

## 3.1 Arrow Functions
\`\`\`javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter
const double = x => x * 2;

// Returning object
const createObj = () => ({ name: "Alice" });
\`\`\`

## 3.2 Destructuring
\`\`\`javascript
// Array destructuring
const [a, b] = [1, 2];
console.log(a); // 1

// Object destructuring
const { name, age } = { name: "Alice", age: 25 };
console.log(name); // "Alice"

// Default values
const { x, y = 10 } = { x: 5 };
console.log(y); // 10
\`\`\`

## 3.3 Spread Operator
\`\`\`javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Object spread
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // { a: 1, b: 2 }
\`\`\`

## 3.4 Rest Parameters
\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
\`\`\`

## 3.5 Template Literals
\`\`\`javascript
const name = "Alice";
const age = 25;

console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);
\`\`\`

✓ ES6+ Features Complete!`,
    codeExamples: [
      {
        title: 'ES6 Features Combined',
        code: 'const nums = [1, 2, 3];\nconst sum = nums.reduce((a, b) => a + b, 0);\nconsole.log(\`Sum: \${sum}\`);',
        explanation: 'Arrow functions, spread, and template literals'
      }
    ],
    quiz: {
      id: 'js-adv-ch3-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What does ... do in [...arr, 4]?',
          options: ['Spread operator', 'Rest parameter', 'Both A and B', 'None'],
          correctAnswer: 2
        }
      ]
    },
    summary: 'ES6+ features make JavaScript code more concise, readable, and powerful.'
  },
  {
    id: 'js-advanced-ch4-prototypes',
    title: 'Chapter 4: Prototypes & Classes',
    introduction: 'Understand JavaScript\'s prototype-based inheritance and class syntax.',
    topics: ['Prototypes', 'Prototype chain', 'Class syntax', 'Inheritance', 'Static methods'],
    content: `# Prototypes & Classes

## 4.1 Prototypes
\`\`\`javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, I am " + this.name);
};

const alice = new Person("Alice");
alice.greet(); // "Hello, I am Alice"
\`\`\`

## 4.2 Class Syntax (ES6)
\`\`\`javascript
class Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    console.log("Hello, I am " + this.name);\n  }\n}

const alice = new Person("Alice");
alice.greet();
\`\`\`

## 4.3 Inheritance
\`\`\`javascript
class Student extends Person {\n  constructor(name, grade) {\n    super(name);\n    this.grade = grade;\n  }\n\n  study() {\n    console.log(\`\${this.name} is studying\`);\n  }\n}

const bob = new Student("Bob", 10);
bob.greet(); // Inherited from Person
bob.study();
\`\`\`

## 4.4 Static Methods
\`\`\`javascript
class MathUtils {\n  static add(a, b) {\n    return a + b;\n  }\n}

console.log(MathUtils.add(5, 3)); // 8
\`\`\`

## 4.5 Getters and Setters
\`\`\`javascript
class Person {\n  constructor(name) {\n    this._name = name;\n  }\n\n  get name() {\n    return this._name;\n  }\n\n  set name(value) {\n    this._name = value;\n  }\n}
\`\`\`

✓ Prototypes & Classes Complete!`,
    codeExamples: [
      {
        title: 'Class Inheritance',
        code: 'class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name + " makes a sound"); }\n}\n\nclass Dog extends Animal {\n  speak() { console.log(this.name + " barks"); }\n}',
        explanation: 'Class inheritance with method override'
      }
    ],
    quiz: {
      id: 'js-adv-ch4-quiz',
      questions: [
        {
          id: 'q1',
          question: 'What keyword is used to call parent class constructor?',
          options: ['super', 'parent', 'base', 'this'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'JavaScript uses prototype-based inheritance, but ES6 classes provide a cleaner syntax for creating objects and implementing inheritance.'
  },
  {
    id: 'js-advanced-ch5-higherorder',
    title: 'Chapter 5: Higher-Order Functions',
    introduction: 'Learn about functions that take other functions as arguments or return them.',
    topics: ['Callback functions', 'map', 'filter', 'reduce', 'compose', 'currying'],
    content: `# Higher-Order Functions

## 5.1 What are Higher-Order Functions?
Functions that:
- Take other functions as arguments
- Return functions as results

## 5.2 Callback Functions
\`\`\`javascript
function processArray(arr, callback) {\n  return arr.map(callback);\n}

const doubled = processArray([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]
\`\`\`

## 5.3 map - Transform Elements
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]
\`\`\`

## 5.4 filter - Filter Elements
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
\`\`\`

## 5.5 reduce - Reduce to Single Value
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
\`\`\`

## 5.6 Chaining
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a, b) => a + b, 0);

console.log(result); // 60
\`\`\`

✓ Higher-Order Functions Complete!`,
    codeExamples: [
      {
        title: 'Function Chaining',
        code: 'const nums = [1, 2, 3, 4, 5];\nconst result = nums\n  .filter(n => n > 2)\n  .map(n => n * 2)\n  .reduce((a, b) => a + b);\nconsole.log(result);',
        explanation: 'Chaining filter, map, and reduce'
      }
    ],
    quiz: {
      id: 'js-adv-ch5-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which method reduces an array to a single value?',
          options: ['reduce', 'map', 'filter', 'forEach'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Higher-order functions like map, filter, and reduce enable powerful functional programming patterns in JavaScript.'
  },
  {
    id: 'js-advanced-ch6-error',
    title: 'Chapter 6: Error Handling',
    introduction: 'Learn how to handle errors gracefully using try/catch/finally.',
    topics: ['try/catch', 'finally block', 'Throwing errors', 'Custom errors', 'Error types'],
    content: `# Error Handling

## 6.1 try/catch
\`\`\`javascript
try {\n  // Code that might throw an error\n  riskyOperation();\n} catch (error) {\n  console.error("Error:", error.message);\n}
\`\`\`

## 6.2 finally Block
\`\`\`javascript
try {\n  console.log("Trying...");\n} catch (error) {\n  console.error(error);\n} finally {\n  console.log("Always runs");\n}
\`\`\`

## 6.3 Throwing Errors
\`\`\`javascript
function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Cannot divide by zero");\n  }\n  return a / b;\n}

try {\n  divide(10, 0);\n} catch (error) {\n  console.error(error.message);\n}
\`\`\`

## 6.4 Custom Errors
\`\`\`javascript
class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}

try {\n  throw new ValidationError("Invalid input");\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.error("Validation failed:", error.message);\n  }\n}
\`\`\`

## 6.5 Error Types
- **SyntaxError**: Invalid syntax
- **ReferenceError**: Undefined variable
- **TypeError**: Invalid type
- **RangeError**: Invalid range

✓ Error Handling Complete!`,
    codeExamples: [
      {
        title: 'Error Handling',
        code: 'async function fetchData() {\n  try {\n    const res = await fetch("url");\n    if (!res.ok) throw new Error("Failed");\n    return await res.json();\n  } catch (e) {\n    console.error(e);\n  } finally {\n    console.log("Done");\n  }\n}',
        explanation: 'Complete error handling pattern'
      }
    ],
    quiz: {
      id: 'js-adv-ch6-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which block always runs regardless of errors?',
          options: ['finally', 'catch', 'try', 'throw'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Error handling with try/catch/finally ensures your application can gracefully handle unexpected situations.'
  },
  {
    id: 'js-advanced-ch7-modules',
    title: 'Chapter 7: Modules',
    introduction: 'Learn how to organize code into reusable modules using import/export.',
    topics: ['Export', 'Import', 'Default export', 'Named export', 'Module patterns'],
    content: `# Modules

## 7.1 Named Exports
\`\`\`javascript
// math.js
export const PI = 3.14159;
export function add(a, b) {\n  return a + b;\n}

// main.js
import { PI, add } from './math.js';
console.log(PI, add(2, 3));
\`\`\`

## 7.2 Default Export
\`\`\`javascript
// person.js
export default class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}

// main.js
import Person from './person.js';
\`\`\`

## 7.3 Export All
\`\`\`javascript
// utils.js
export * from './math.js';
export * from './string.js';

// main.js
import * as utils from './utils.js';
\`\`\`

## 7.4 Dynamic Imports
\`\`\`javascript
async function loadModule() {\n  const module = await import('./module.js');\n  module.someFunction();\n}
\`\`\`

✓ Modules Complete!`,
    codeExamples: [
      {
        title: 'Module Example',
        code: '// utils.js\nexport const add = (a, b) => a + b;\nexport default function multiply(a, b) { return a * b; }\n\n// main.js\nimport multiply, { add } from \'./utils.js\';',
        explanation: 'Named and default exports'
      }
    ],
    quiz: {
      id: 'js-adv-ch7-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How many default exports can a module have?',
          options: ['One', 'Two', 'Unlimited', 'None'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'Modules allow you to split code into separate files and reuse code across your application.'
  },
  {
    id: 'js-advanced-ch8-json',
    title: 'Chapter 8: JSON & LocalStorage',
    introduction: 'Learn how to work with JSON data and store data in the browser.',
    topics: ['JSON stringify', 'JSON parse', 'LocalStorage', 'SessionStorage', 'Data persistence'],
    content: `# JSON & LocalStorage

## 8.1 JSON (JavaScript Object Notation)
\`\`\`javascript
const obj = { name: "Alice", age: 25 };

// Convert to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25}'

// Parse JSON string
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Alice"
\`\`\`

## 8.2 LocalStorage
\`\`\`javascript
// Save data
localStorage.setItem('user', JSON.stringify({ name: "Alice" }));

// Get data
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name);

// Remove data
localStorage.removeItem('user');

// Clear all
localStorage.clear();
\`\`\`

## 8.3 SessionStorage
\`\`\`javascript
// Similar API, but data clears when tab closes
sessionStorage.setItem('temp', 'value');
const temp = sessionStorage.getItem('temp');
\`\`\`

## 8.4 Practical Example
\`\`\`javascript
class Storage {\n  save(key, data) {\n    localStorage.setItem(key, JSON.stringify(data));\n  }\n\n  load(key) {\n    const data = localStorage.getItem(key);\n    return data ? JSON.parse(data) : null;\n  }\n\n  remove(key) {\n    localStorage.removeItem(key);\n  }\n}
\`\`\`

✓ JSON & LocalStorage Complete!`,
    codeExamples: [
      {
        title: 'LocalStorage Example',
        code: 'const user = { name: "Alice", age: 25 };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst loaded = JSON.parse(localStorage.getItem("user"));\nconsole.log(loaded.name);',
        explanation: 'Storing and retrieving objects'
      }
    ],
    quiz: {
      id: 'js-adv-ch8-quiz',
      questions: [
        {
          id: 'q1',
          question: 'How do you store an object in LocalStorage?',
          options: ['JSON.stringify first', 'Directly', 'JSON.parse first', 'Cannot store objects'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'JSON allows data exchange, and LocalStorage enables persistent data storage in the browser.'
  },
  {
    id: 'js-advanced-ch9-project',
    title: 'Chapter 9: Project - E-Commerce App',
    introduction: 'Build a complete e-commerce application using advanced JavaScript concepts.',
    topics: ['Product catalog', 'Shopping cart', 'Order processing', 'Search and filter', 'Data persistence'],
    content: `# Project: E-Commerce App

## 9.1 Project Overview
Build a console-based e-commerce application with:
- Product catalog with stock management
- Shopping cart functionality
- Order processing
- Search and filtering
- Customer information
- Data persistence with LocalStorage

## 9.2 Product Class
\`\`\`javascript
class Product {\n  constructor(id, name, price, stock) {\n    this.id = id;\n    this.name = name;\n    this.price = price;\n    this.stock = stock;\n  }\n}
\`\`\`

## 9.3 Cart Class
\`\`\`javascript
class Cart {\n  constructor() {\n    this.items = [];\n  }\n\n  addItem(product, quantity) {\n    const existing = this.items.find(i => i.product.id === product.id);\n    if (existing) {\n      existing.quantity += quantity;\n    } else {\n      this.items.push({ product, quantity });\n    }\n  }\n\n  removeItem(productId) {\n    this.items = this.items.filter(i => i.product.id !== productId);\n  }\n\n  getTotal() {\n    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);\n  }\n}
\`\`\`

## 9.4 Store Class
\`\`\`javascript
class Store {\n  constructor() {\n    this.products = [];\n    this.cart = new Cart();\n  }\n\n  addProduct(product) {\n    this.products.push(product);\n  }\n\n  search(query) {\n    return this.products.filter(p => \n      p.name.toLowerCase().includes(query.toLowerCase())\n    );\n  }\n\n  checkout(customer) {\n    const total = this.cart.getTotal();\n    console.log(\`Order for \${customer}: $\${total}\`);\n    this.cart.items = [];\n  }\n}
\`\`\`

✓ E-Commerce Project Complete!`,
    codeExamples: [
      {
        title: 'E-Commerce Structure',
        code: 'class Product {\n  constructor(id, name, price) {\n    this.id = id;\n    this.name = name;\n    this.price = price;\n  }\n}\n\nclass Cart {\n  constructor() { this.items = []; }\n  add(product, qty) { /* ... */ }\n  getTotal() { return this.items.reduce((s, i) => s + i.product.price * i.quantity, 0); }\n}',
        explanation: 'Basic e-commerce structure'
      }
    ],
    quiz: {
      id: 'js-adv-ch9-quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which method calculates cart total?',
          options: ['reduce', 'map', 'filter', 'forEach'],
          correctAnswer: 0
        }
      ]
    },
    summary: 'The E-Commerce project combines classes, modules, error handling, and data persistence into a complete application.'
  }
];
