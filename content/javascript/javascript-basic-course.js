// ============================================
// JAVASCRIPT BASIC COURSE - BEGINNER TO INTERMEDIATE
// Complete Course with 12 Chapters
// ============================================

console.log("=".repeat(60));
console.log("   JAVASCRIPT BASIC COURSE - COMPLETE TRAINING");
console.log("=".repeat(60));
console.log();

// ============================================
// CHAPTER 1: SETUP
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 1: SETUP");
console.log("=".repeat(60));

console.log("\n1.1 JavaScript Development Setup:");
console.log("   - Text Editor: VS Code (Recommended)");
console.log("   - Browser: Chrome/Firefox with DevTools");
console.log("   - Runtime: Node.js for server-side JS");

console.log("\n1.2 Running JavaScript:");
console.log("   a) In Browser Console (F12 → Console tab)");
console.log("   b) In HTML file with <script> tag");
console.log("   c) In Node.js with 'node filename.js'");

console.log("\n1.3 Your First JavaScript Program:");
console.log("   " + 'console.log("Hello, World!");');
console.log("   Output: Hello, World!");

console.log("\n✓ Setup Complete - Ready to code JavaScript!");

// ============================================
// CHAPTER 2: INTRODUCTION TO JAVASCRIPT
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 2: INTRODUCTION TO JAVASCRIPT");
console.log("=".repeat(60));

console.log("\n2.1 JavaScript Ki Definition:");
console.log("   JavaScript ek high-level, interpreted programming language hai.");
console.log("   Ye web browsers mein chalti hai aur websites ko interactive banati hai.");

console.log("\n2.2 JavaScript Kyun Zaroori Hai?");
console.log("   ─────────────────────────────");
console.log("   1. Web Development ki #1 Language");
console.log("   2. Har browser mein chalti hai");
console.log("   3. Frontend + Backend dono mein use hoti hai");
console.log("   4. Mobile apps bana sakte hain (React Native)");
console.log("   5. Desktop apps bana sakte hain (Electron)");
console.log("   6. Games bana sakte hain");
console.log("   7. AI/ML bhi ab JavaScript mein aa raha hai");

console.log("\n2.3 JavaScript Ka Role:");
console.log("   ────────────────────");
console.log("   • Websites ko dynamic banana");
console.log("   • User interactions handle karna (clicks, forms, etc.)");
console.log("   • Data fetch karna servers se (APIs)");
console.log("   • Real-time updates (chat, notifications)");
console.log("   • Animations aur effects create karna");
console.log("   • Form validation karna");
console.log("   • Browser storage manage karna");

console.log("\n2.4 JavaScript History:");
console.log("   - 1995: Brendan ne 10 din mein banayi");
console.log("   - 1997: ECMAScript standard bana");
console.log("   - 2009: Node.js ne server-side laya");
console.log("   - 2015: ES6 - Major update aaya");
console.log("   - 2026: Ab har jagah use hoti hai!");

console.log("\n✓ JavaScript is the Language of the Web!");

// ============================================
// CHAPTER 3: VARIABLES (var/let/const)
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 3: VARIABLES (var/let/const)");
console.log("=".repeat(60));

console.log("\n3.1 Variable Kya Hai?");
console.log("   Variable ek container hai jo data store karta hai.");

// var - purana tareeqa
console.log("\n3.2 var Keyword (Old Way - Ab use na karein):");
var oldVariable = "I am var";
console.log("   var oldVariable = \"I am var\";");
console.log("   Value:", oldVariable);
console.log("   Problem: Function-scoped, redeclare kar sakte hain");

// let - naya tareeqa
console.log("\n3.3 let Keyword (Modern Way):");
let modernVariable = "I am let";
console.log("   let modernVariable = \"I am let\";");
console.log("   Value:", modernVariable);
modernVariable = "Changed!";
console.log("   After change:", modernVariable);
console.log("   Feature: Block-scoped, change kar sakte hain");

// const - constant value
console.log("\n3.4 const Keyword (For Constants):");
const constantValue = "Cannot Change";
console.log("   const constantValue = \"Cannot Change\";");
console.log("   Value:", constantValue);
console.log("   Feature: Block-scoped, change NAHI kar sakte");

console.log("\n3.5 Variable Naming Rules:");
console.log("   ✓ let userName = \"Alice\";  (camelCase)");
console.log("   ✓ let user_age = 25;        (snake_case)");
console.log("   ✓ let $price = 100;         ($ allowed)");
console.log("   ✓ let _private = \"secret\";  (_ allowed)");
console.log("   ✗ let 123name = \"test\";    (number se start nahi)");
console.log("   ✗ let user-name = \"test\";  (- allowed nahi)");

console.log("\n3.6 Best Practice:");
console.log("   - let aur const use karein");
console.log("   - var avoid karein");
console.log("   - Descriptive names dein");
console.log("   - camelCase follow karein");

console.log("\n✓ Variables Complete!");

// ============================================
// CHAPTER 4: DATA TYPES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 4: DATA TYPES");
console.log("=".repeat(60));

console.log("\n4.1 Primitive Data Types (7 types):");

// String
let stringType = "Hello JavaScript";
console.log("\n   1. STRING - Text ke liye");
console.log("      let str = \"Hello JavaScript\";");
console.log("      Value:", stringType);
console.log("      Type:", typeof stringType);

// Number
let numberType = 42;
let floatType = 3.14;
console.log("\n   2. NUMBER - Numbers ke liye (integer & decimal)");
console.log("      let num = 42;");
console.log("      let float = 3.14;");
console.log("      Values:", numberType, "and", floatType);
console.log("      Type:", typeof numberType);

// Boolean
let booleanType = true;
console.log("\n   3. BOOLEAN - True/False ke liye");
console.log("      let bool = true;");
console.log("      Value:", booleanType);
console.log("      Type:", typeof booleanType);

// Null
let nullType = null;
console.log("\n   4. NULL - Intentionally empty value");
console.log("      let empty = null;");
console.log("      Value:", nullType);
console.log("      Type:", typeof nullType);

// Undefined
let undefinedType;
console.log("\n   5. UNDEFINED - Value assign nahi kiya");
console.log("      let notAssigned;");
console.log("      Value:", undefinedType);
console.log("      Type:", typeof undefinedType);

// Symbol
let symbolType = Symbol("unique");
console.log("\n   6. SYMBOL - Unique identifier ke liye");
console.log("      let sym = Symbol(\"unique\");");
console.log("      Type:", typeof symbolType);

// BigInt
let bigIntType = 9007199254740991n;
console.log("\n   7. BIGINT - Very large numbers ke liye");
console.log("      let big = 9007199254740991n;");
console.log("      Type:", typeof bigIntType);

console.log("\n4.2 Reference Data Types:");

// Array
let arrayType = [1, 2, 3, 4, 5];
console.log("\n   1. ARRAY - Multiple values store karne ke liye");
console.log("      let arr = [1, 2, 3, 4, 5];");
console.log("      Value:", arrayType);
console.log("      Type:", typeof arrayType);

// Object
let objectType = { name: "Alice", age: 25 };
console.log("\n   2. OBJECT - Key-value pairs store karne ke liye");
console.log("      let obj = { name: \"Alice\", age: 25 };");
console.log("      Value:", objectType);
console.log("      Type:", typeof objectType);

// Function
let functionType = function() { return "Hello"; };
console.log("\n   3. FUNCTION - Reusable code block");
console.log("      Type:", typeof functionType);

console.log("\n4.3 Type Conversion:");
console.log("   String to Number: Number(\"42\") =", Number("42"));
console.log("   Number to String: String(42) =", String(42));
console.log("   To Boolean: Boolean(1) =", Boolean(1));

console.log("\n✓ Data Types Complete!");

// ============================================
// CHAPTER 5: OPERATORS & EXPRESSIONS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 5: OPERATORS & EXPRESSIONS");
console.log("=".repeat(60));

let x = 10, y = 3;

console.log("\n5.1 Arithmetic Operators:");
console.log("   Addition (+):     ", x, "+", y, "=", x + y);
console.log("   Subtraction (-):  ", x, "-", y, "=", x - y);
console.log("   Multiplication (*):", x, "*", y, "=", x * y);
console.log("   Division (/):     ", x, "/", y, "=", x / y);
console.log("   Modulus (%):      ", x, "%", y, "=", x % y);
console.log("   Exponentiation (**):", x, "**", 2, "=", x ** 2);
console.log("   Increment (++):   x =", x, "→ x++ =", ++x);
console.log("   Decrement (--):   x =", x, "→ x-- =", --x);

console.log("\n5.2 Assignment Operators:");
let a = 5;
console.log("   a = 5");
a += 3;
console.log("   a += 3  → a =", a);
a -= 2;
console.log("   a -= 2  → a =", a);
a *= 2;
console.log("   a *= 2  → a =", a);
a /= 2;
console.log("   a /= 2  → a =", a);

console.log("\n5.3 Comparison Operators:");
console.log("   Equal (==):       5 == '5' →", 5 == "5");
console.log("   Strict Equal (===): 5 === '5' →", 5 === "5");
console.log("   Not Equal (!=):   5 != '5' →", 5 != "5");
console.log("   Strict Not (!==): 5 !== '5' →", 5 !== "5");
console.log("   Greater Than (>): 10 > 5  →", 10 > 5);
console.log("   Less Than (<):    10 < 5  →", 10 < 5);
console.log("   >= (Greater or Equal):", 10 >= 10);
console.log("   <= (Less or Equal):   ", 10 <= 5);

console.log("\n5.4 Logical Operators:");
console.log("   AND (&&): true && false →", true && false);
console.log("   OR (||):  true || false →", true || false);
console.log("   NOT (!):  !true         →", !true);

console.log("\n5.5 Ternary Operator:");
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("   let age = 20;");
console.log("   let status = age >= 18 ? \"Adult\" : \"Minor\";");
console.log("   Result:", status);

console.log("\n5.6 Expression Examples:");
let result = (10 + 5) * 2 - 3;
console.log("   (10 + 5) * 2 - 3 =", result);

console.log("\n✓ Operators Complete!");

// ============================================
// CHAPTER 6: CONTROL FLOW
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 6: CONTROL FLOW (if/else, switch, loops)");
console.log("=".repeat(60));

console.log("\n6.1 if/else Statement:");
let marks = 85;
console.log("   let marks = 85;");
if (marks >= 90) {
  console.log("   Grade: A");
} else if (marks >= 80) {
  console.log("   Grade: B ✓ (Our marks)");
} else if (marks >= 70) {
  console.log("   Grade: C");
} else {
  console.log("   Grade: F");
}

console.log("\n6.2 switch Statement:");
let day = "Monday";
console.log("   let day = \"Monday\";");
switch (day) {
  case "Monday":
    console.log("   → Start of work week");
    break;
  case "Friday":
    console.log("   → Weekend is near!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("   → Weekend!");
    break;
  default:
    console.log("   → Midweek day");
}

console.log("\n6.3 for Loop:");
console.log("   for (let i = 1; i <= 5; i++) { console.log(i); }");
console.log("   Output:");
for (let i = 1; i <= 5; i++) {
  console.log("     ", i);
}

console.log("\n6.4 while Loop:");
console.log("   let count = 1;");
console.log("   while (count <= 3) { console.log(count); count++; }");
console.log("   Output:");
let count = 1;
while (count <= 3) {
  console.log("     ", count);
  count++;
}

console.log("\n6.5 do...while Loop:");
console.log("   let num = 1;");
console.log("   do { console.log(num); num++; } while (num <= 3);");
console.log("   Output:");
let num = 1;
do {
  console.log("     ", num);
  num++;
} while (num <= 3);

console.log("\n6.6 break and continue:");
console.log("   for (let i = 1; i <= 10; i++) {");
console.log("     if (i === 5) continue; // Skip 5");
console.log("     if (i === 8) break;    // Stop at 8");
console.log("     console.log(i);");
console.log("   }");
console.log("   Output:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log("     ", i);
}

console.log("\n✓ Control Flow Complete!");

// ============================================
// CHAPTER 7: FUNCTIONS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 7: FUNCTIONS");
console.log("=".repeat(60));

console.log("\n7.1 Function Declaration:");
function greet(name) {
  return "Hello, " + name + "!";
}
console.log("   function greet(name) {");
console.log("     return \"Hello, \" + name + \"!\";");
console.log("   }");
console.log("   greet(\"Alice\") →", greet("Alice"));

console.log("\n7.2 Function Expression:");
const multiply = function(a, b) {
  return a * b;
};
console.log("   const multiply = function(a, b) {");
console.log("     return a * b;");
console.log("   };");
console.log("   multiply(5, 3) →", multiply(5, 3));

console.log("\n7.3 Default Parameters:");
function welcome(name, greeting) {
  greeting = greeting || "Hello";
  return greeting + ", " + name + "!";
}
console.log("   function welcome(name, greeting) {");
console.log("     greeting = greeting || \"Hello\";");
console.log("     return greeting + \", \" + name + \"!\";");
console.log("   }");
console.log("   welcome(\"Bob\") →", welcome("Bob"));
console.log("   welcome(\"Charlie\", \"Hi\") →", welcome("Charlie", "Hi"));

console.log("\n7.4 Callback Function:");
function processUser(name, callback) {
  return callback(name);
}
function sayHello(name) {
  return "Hello, " + name + "!";
}
console.log("   processUser(\"Charlie\", sayHello) →", processUser("Charlie", sayHello));

console.log("\n7.5 Anonymous Function:");
const anonymous = function() {
  return "I am anonymous";
};
console.log("   const anonymous = function() { ... };");
console.log("   anonymous() →", anonymous());

console.log("\n✓ Functions Complete!");

// ============================================
// CHAPTER 8: ARRAYS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 8: ARRAYS");
console.log("=".repeat(60));

console.log("\n8.1 Array Create karna:");
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];
console.log("   let fruits = [\"Apple\", \"Banana\", \"Cherry\"];");
console.log("   let numbers = [1, 2, 3, 4, 5];");
console.log("   let mixed = [1, \"two\", true, null];");

console.log("\n8.2 Array Access karna:");
console.log("   fruits[0] →", fruits[0]);
console.log("   fruits[1] →", fruits[1]);
console.log("   fruits.length →", fruits.length);

console.log("\n8.3 Array Methods - Add/Remove:");
console.log("   fruits.push(\"Date\")     - Add to end");
fruits.push("Date");
console.log("   Result:", fruits);

console.log("   fruits.pop()            - Remove from end");
fruits.pop();
console.log("   Result:", fruits);

console.log("   fruits.unshift(\"Apricot\") - Add to beginning");
fruits.unshift("Apricot");
console.log("   Result:", fruits);

console.log("   fruits.shift()            - Remove from beginning");
fruits.shift();
console.log("   Result:", fruits);

console.log("\n8.4 Array Methods - Search:");
console.log("   fruits.indexOf(\"Banana\") →", fruits.indexOf("Banana"));
console.log("   fruits.includes(\"Cherry\") →", fruits.includes("Cherry"));

console.log("\n8.5 Array Methods - Transform:");
console.log("   fruits.join(\", \") →", fruits.join(", "));
console.log("   fruits.slice(1, 3) →", fruits.slice(1, 3));

console.log("\n8.6 Array Iteration Methods (Introduction):");
let nums = [1, 2, 3, 4, 5];

console.log("\n   for loop - Traditional iteration:");
console.log("   for (let i = 0; i < nums.length; i++) { console.log(nums[i]); }");
console.log("   Output:");
for (let i = 0; i < nums.length; i++) {
  console.log("     ", nums[i]);
}

console.log("\n   Note: Advanced methods (forEach, map, filter, reduce) are covered in Advanced Course");

console.log("\n✓ Arrays Complete!");

// ============================================
// CHAPTER 9: OBJECTS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 9: OBJECTS");
console.log("=".repeat(60));

console.log("\n9.1 Object Create karna:");
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "coding", "gaming"]
};
console.log("   let person = {");
console.log("     firstName: \"John\",");
console.log("     lastName: \"Doe\",");
console.log("     age: 30,");
console.log("     isEmployed: true,");
console.log("     hobbies: [\"reading\", \"coding\", \"gaming\"]");
console.log("   };");

console.log("\n9.2 Object Properties Access karna:");
console.log("   Dot notation:     person.firstName →", person.firstName);
console.log("   Bracket notation: person[\"lastName\"] →", person["lastName"]);

console.log("\n9.3 Object Properties Modify karna:");
person.age = 31;
person.city = "New York";
console.log("   person.age = 31;");
console.log("   person.city = \"New York\";");
console.log("   Updated:", person);

console.log("\n9.4 Object Methods:");
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};
console.log("   let calculator = { add, subtract, multiply };");
console.log("   calculator.add(5, 3) →", calculator.add(5, 3));
console.log("   calculator.subtract(10, 4) →", calculator.subtract(10, 4));
console.log("   calculator.multiply(6, 7) →", calculator.multiply(6, 7));

console.log("\n9.5 Object.keys, Object.values, Object.entries:");
console.log("   Object.keys(person) →", Object.keys(person));
console.log("   Object.values(person) →", Object.values(person));
console.log("   Object.entries(person) →", Object.entries(person));

console.log("\n   Note: Object destructuring and Spread operator are covered in Advanced Course");

console.log("\n✓ Objects Complete!");

// ============================================
// CHAPTER 10: DOM MANIPULATION
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 10: DOM MANIPULATION");
console.log("=".repeat(60));

console.log("\n10.1 DOM Kya Hai?");
console.log("    DOM = Document Object Model");
console.log("    HTML document ka tree structure jo JavaScript se manipulate hota hai");

console.log("\n10.2 Elements Select karna:");
console.log("    document.getElementById('myId')");
console.log("    document.querySelector('.myClass')");
console.log("    document.querySelectorAll('div')");
console.log("    document.getElementsByTagName('p')");

console.log("\n10.3 Content Modify karna:");
console.log("    element.innerHTML = '<strong>New HTML</strong>'");
console.log("    element.textContent = 'Plain Text'");
console.log("    element.innerText = 'Visible Text'");

console.log("\n10.4 Styles Modify karna:");
console.log("    element.style.color = 'red'");
console.log("    element.style.fontSize = '24px'");
console.log("    element.style.backgroundColor = 'blue'");

console.log("\n10.5 Classes Manage karna:");
console.log("    element.classList.add('active')");
console.log("    element.classList.remove('active')");
console.log("    element.classList.toggle('active')");
console.log("    element.classList.contains('active')");

console.log("\n10.6 Elements Create/Delete karna:");
console.log("    let newDiv = document.createElement('div');");
console.log("    parent.appendChild(newDiv);");
console.log("    element.remove();");

console.log("\n10.7 Practical Example (Browser mein chalega):");
console.log("    <!-- HTML -->");
console.log("    <h1 id=\"title\">Hello</h1>");
console.log("    <button id=\"btn\">Click Me</button>");
console.log("");
console.log("    // JavaScript");
console.log("    const title = document.getElementById('title');");
console.log("    const btn = document.getElementById('btn');");
console.log("    title.textContent = 'Welcome!';");
console.log("    title.style.color = 'blue';");
console.log("    btn.addEventListener('click', () => {");
console.log("      alert('Button clicked!');");
console.log("    });");

console.log("\n✓ DOM Manipulation Concepts Complete!");
console.log("  (Note: DOM examples browser mein run karein)");

// ============================================
// CHAPTER 11: EVENTS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 11: EVENTS");
console.log("=".repeat(60));

console.log("\n11.1 Events Kya Hain?");
console.log("    User actions jo JavaScript code trigger karte hain");

console.log("\n11.2 Event Listeners Lagana:");
console.log("    element.addEventListener('click', handler)");
console.log("    element.addEventListener('submit', handler)");
console.log("    element.addEventListener('keydown', handler)");

console.log("\n11.3 Common Events:");
console.log("    Mouse Events:");
console.log("    - click: User click kare");
console.log("    - dblclick: Double click kare");
console.log("    - mouseover: Mouse upar aaye");
console.log("    - mouseout: Mouse hatae");
console.log("    - mousemove: Mouse move kare");

console.log("\n    Keyboard Events:");
console.log("    - keydown: Key press kare");
console.log("    - keyup: Key release kare");
console.log("    - keypress: Key press ho rahi ho");

console.log("\n    Form Events:");
console.log("    - submit: Form submit ho");
console.log("    - change: Input value change ho");
console.log("    - input: Input mein typing ho");
console.log("    - focus: Input focus ho");
console.log("    - blur: Input blur ho");

console.log("\n    Page Events:");
console.log("    - load: Page load ho");
console.log("    - scroll: User scroll kare");
console.log("    - resize: Window resize ho");

console.log("\n11.4 Event Object:");
console.log("    element.addEventListener('click', function(event) {");
console.log("      event.target      // Clicked element");
console.log("      event.type        // Event type (click, keydown, etc.)");
console.log("      event.preventDefault()  // Default action roko");
console.log("      event.stopPropagation() // Bubbling roko");
console.log("    });");

console.log("\n11.5 Practical Example:");
console.log("    // Form Validation");
console.log("    const form = document.querySelector('form');");
console.log("    form.addEventListener('submit', function(e) {");
console.log("      e.preventDefault();  // Page reload roko");
console.log("      const email = document.getElementById('email').value;");
console.log("      if (!email.includes('@')) {");
console.log("        alert('Invalid email!');");
console.log("      }");
console.log("    });");

console.log("\n11.6 Event Bubbling & Capturing:");
console.log("    Bubbling: Child → Parent (default)");
console.log("    Capturing: Parent → Child");
console.log("    addEventListener('click', handler, true)  // Capturing");
console.log("    addEventListener('click', handler, false) // Bubbling");

console.log("\n✓ Events Complete!");
console.log("  (Note: Event examples browser mein run karein)");

// ============================================
// CHAPTER 12: BASIC PROJECT - TODO APP
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 12: BASIC PROJECT - TODO APP");
console.log("=".repeat(60));

// Todo Application Class
class TodoApp {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    const todo = {
      id: this.nextId++,
      text: text,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(todo);
    console.log("✓ Added: \"" + text + "\"");
    return todo;
  }

  getAllTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  toggleTodo(id) {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.completed = !todo.completed;
      const status = todo.completed ? "Completed" : "Pending";
      console.log("✓ Toggled: \"" + todo.text + "\" → " + status);
    }
    return todo;
  }

  deleteTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const deleted = this.todos.splice(index, 1)[0];
      console.log("✓ Deleted: \"" + deleted.text + "\"");
      return deleted;
    }
    return null;
  }

  getFilteredTodos(filter) {
    if (filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    } else if (filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    }
    return this.todos;
  }

  displayTodos() {
    console.log("\n=== TODO LIST ===");
    if (this.todos.length === 0) {
      console.log("No todos yet!");
      return;
    }
    this.todos.forEach(todo => {
      const status = todo.completed ? '✓' : '○';
      console.log(status + " [" + todo.id + "] " + todo.text);
    });
    console.log("Total: " + this.todos.length + " items\n");
  }

  getStats() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const active = total - completed;
    return { total: total, completed: completed, active: active };
  }
}

console.log("\n12.1 Todo App Structure:");
console.log("    Features:");
console.log("    - Add new todos");
console.log("    - Mark todos as complete");
console.log("    - Delete todos");
console.log("    - Filter by status");
console.log("    - View statistics");

console.log("\n12.2 Demo: Todo App Usage\n");

const myTodoApp = new TodoApp();

console.log("Step 1: Adding Todos");
console.log("--------------------");
myTodoApp.addTodo("Learn JavaScript basics");
myTodoApp.addTodo("Practice DOM manipulation");
myTodoApp.addTodo("Build a project");
myTodoApp.addTodo("Learn advanced JavaScript");

myTodoApp.displayTodos();

console.log("Step 2: Toggle Completion");
console.log("------------------------");
myTodoApp.toggleTodo(1);
myTodoApp.toggleTodo(3);
myTodoApp.displayTodos();

console.log("Step 3: View Statistics");
console.log("----------------------");
const stats = myTodoApp.getStats();
console.log("Statistics:");
console.log("  - Total:", stats.total);
console.log("  - Completed:", stats.completed);
console.log("  - Active:", stats.active);

console.log("\nStep 4: Filter Todos");
console.log("-------------------");
console.log("Active Todos:");
myTodoApp.getFilteredTodos('active').forEach(todo => {
  console.log("  - " + todo.text);
});

console.log("\nCompleted Todos:");
myTodoApp.getFilteredTodos('completed').forEach(todo => {
  console.log("  ✓ " + todo.text);
});

console.log("\nStep 5: Delete a Todo");
console.log("--------------------");
myTodoApp.deleteTodo(2);
myTodoApp.displayTodos();

console.log("\n12.3 Browser Version ke liye:");
console.log("    HTML file banayein aur DOM + Events use karein");
console.log("    Full interactive UI ban jayega!");

// ============================================
// COURSE COMPLETION MESSAGE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("🎉 JAVASCRIPT BASIC COURSE COMPLETED!");
console.log("=".repeat(60));
console.log("You've learned (Chapters 1-12):");
console.log("  ✓ Chapter 1: Setup");
console.log("  ✓ Chapter 2: Introduction to JavaScript");
console.log("  ✓ Chapter 3: Variables (var/let/const)");
console.log("  ✓ Chapter 4: Data Types");
console.log("  ✓ Chapter 5: Operators & Expressions");
console.log("  ✓ Chapter 6: Control Flow (if/else, switch, loops)");
console.log("  ✓ Chapter 7: Functions");
console.log("  ✓ Chapter 8: Arrays");
console.log("  ✓ Chapter 9: Objects");
console.log("  ✓ Chapter 10: DOM Manipulation");
console.log("  ✓ Chapter 11: Events");
console.log("  ✓ Chapter 12: Basic Project (Todo App)");
console.log("=".repeat(60));
console.log("\n➡️  Next: Continue to JavaScript Advanced Course");
console.log("=".repeat(60));
