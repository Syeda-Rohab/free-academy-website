// ============================================
// JAVASCRIPT ADVANCED COURSE - INTERMEDIATE TO ADVANCED
// 8 Chapters + 1 Advanced Project
// ============================================

console.log("=".repeat(60));
console.log("   JAVASCRIPT ADVANCED COURSE - COMPLETE TRAINING");
console.log("=".repeat(60));
console.log();

// ============================================
// CHAPTER 1: CLOSURES & SCOPE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 1: CLOSURES & SCOPE");
console.log("=".repeat(60));

console.log("\n1.1 Scope Kya Hai?");
console.log("    Scope variable ki accessibility define karta hai.");

console.log("\n1.2 Global Scope:");
let globalVar = "I am global";
function showGlobal() {
  console.log("    Global variable:", globalVar);
}
showGlobal();
console.log("    Kahin se bhi access ho sakta hai");

console.log("\n1.3 Function Scope:");
function showFunctionScope() {
  let functionVar = "I am inside function";
  console.log("    Function variable:", functionVar);
}
showFunctionScope();
// console.log(functionVar); // Error: Not accessible outside
console.log("    Sirf function ke andar accessible hai");

console.log("\n1.4 Block Scope (let/const):");
if (true) {
  let blockVar = "I am in block";
  const blockConst = "I am constant";
  console.log("    Block variable:", blockVar);
  console.log("    Block constant:", blockConst);
}
// console.log(blockVar); // Error: Not accessible outside block
console.log("    Sirf block { } ke andar accessible hai");

console.log("\n1.5 Lexical Scoping:");
function outer() {
  let outerVar = "Outer variable";
  
  function inner() {
    console.log("    Inner accessing outer:", outerVar);
  }
  
  inner();
}
outer();
console.log("    Inner function outer ke variables access kar sakta hai");

console.log("\n1.6 Closures:");
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log("    Closure example:");
console.log("    counter() →", counter());
console.log("    counter() →", counter());
console.log("    counter() →", counter());
console.log("    Count variable ab bhi exist karta hai!");

console.log("\n1.7 Closure Practical Use:");
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("    double(5) →", double(5));
console.log("    triple(5) →", triple(5));

console.log("\n1.8 IIFE (Immediately Invoked Function Expression):");
(function() {
  let private = "I am private";
  console.log("    IIFE executed:", private);
})();
console.log("    Turant execute hone wala function");

console.log("\n✓ Closures & Scope Complete!");

// ============================================
// CHAPTER 2: ASYNC JAVASCRIPT (Promises, async/await)
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 2: ASYNC JAVASCRIPT (Promises, async/await)");
console.log("=".repeat(60));

console.log("\n2.1 Async JavaScript Kyun Zaroori Hai?");
console.log("    - API calls ke liye");
console.log("    - File operations ke liye");
console.log("    - Database operations ke liye");
console.log("    - User interface freeze hone se bachane ke liye");

console.log("\n2.2 Callback Pattern (Purana tareeqa):");
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    console.log("    Callback: Data fetched!");
    callback("Sample data");
  }, 100);
}

fetchDataWithCallback((data) => {
  console.log("    Callback received:", data);
});

console.log("\n2.3 Promises (Naya tareeqa):");
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Promise resolved with data!");
      } else {
        reject("Error occurred!");
      }
    }, 100);
  });
}

fetchDataWithPromise()
  .then(data => {
    console.log("    .then():", data);
  })
  .catch(error => {
    console.log("    .catch():", error);
  });

console.log("\n2.4 Promise States:");
console.log("    - Pending: Initial state");
console.log("    - Fulfilled: Success");
console.log("    - Rejected: Failure");

console.log("\n2.5 Promise Chaining:");
function step1() {
  return Promise.resolve("Step 1 complete");
}

function step2(data) {
  console.log("    " + data);
  return Promise.resolve("Step 2 complete");
}

function step3(data) {
  console.log("    " + data);
  return Promise.resolve("Step 3 complete");
}

step1()
  .then(step2)
  .then(step3)
  .then(result => console.log("    " + result));

console.log("\n2.6 Promise.all (Multiple promises):");
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log("    Promise.all:", values);
  });

console.log("\n2.7 async/await (Sabse clean tareeqa):");
async function fetchDataWithAsync() {
  console.log("    async/await: Fetching data...");
  
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Async/await data received!");
    }, 100);
  });
  
  console.log("   ", data);
  return data;
}

fetchDataWithAsync();

console.log("\n2.8 Error Handling with async/await:");
async function fetchWithErrorHandling() {
  try {
    console.log("    Trying to fetch...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success!");
      }, 100);
    });
    console.log("    Success:", data);
  } catch (error) {
    console.log("    Error:", error);
  } finally {
    console.log("    Finally: Always runs");
  }
}

fetchWithErrorHandling();

console.log("\n2.9 Real-world Example (API Call):");
async function fetchUserData(userId) {
  try {
    console.log("    Fetching user", userId, "...");
    // Simulated API call
    const user = await new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: userId, name: "John Doe", email: "john@example.com" });
      }, 100);
    });
    console.log("    User data:", user);
    return user;
  } catch (error) {
    console.log("    Error fetching user:", error);
  }
}

fetchUserData(123);

console.log("\n✓ Async JavaScript Complete!");

// ============================================
// CHAPTER 3: ES6+ FEATURES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 3: ES6+ FEATURES");
console.log("=".repeat(60));

console.log("\n3.1 let/const (Block Scoping):");
let es6Let = "I can change";
es6Let = "Changed!";
const es6Const = "I cannot change";
console.log("    let:", es6Let);
console.log("    const:", es6Const);

console.log("\n3.2 Arrow Functions:");
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}!`;
const square = x => x * x;

console.log("    add(5, 3) →", add(5, 3));
console.log("    greet('Alice') →", greet("Alice"));
console.log("    square(4) →", square(4));

console.log("\n3.3 Template Literals:");
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log("    Template:", greeting);

console.log("\n3.4 Destructuring:");
console.log("\n    Array Destructuring:");
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log("    [first, second, third] = colors");
console.log("    first:", first, ", second:", second, ", third:", third);

console.log("\n    Object Destructuring:");
const user = { name: "Bob", age: 30, city: "NYC" };
const { name: userName, age: userAge } = user;
console.log("    const { name, age } = user");
console.log("    name:", userName, ", age:", userAge);

console.log("\n3.5 Spread Operator (...):");
const nums1 = [1, 2, 3];
const nums2 = [...nums1, 4, 5, 6];
console.log("    const nums2 = [...nums1, 4, 5, 6]");
console.log("    Result:", nums2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("    const obj2 = { ...obj1, c: 3 }");
console.log("    Result:", obj2);

console.log("\n3.6 Rest Parameters:");
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("    function sum(...numbers) { ... }");
console.log("    sum(1, 2, 3, 4, 5) →", sum(1, 2, 3, 4, 5));

console.log("\n3.7 Default Parameters:");
function welcome(person = "Guest", greeting = "Hello") {
  return `${greeting}, ${person}!`;
}
console.log("    function welcome(person = \"Guest\", ...)");
console.log("    welcome() →", welcome());
console.log("    welcome('Charlie') →", welcome("Charlie"));

console.log("\n3.8 Optional Chaining (?.):");
const nestedObj = { user: { profile: { name: "Test" } } };
console.log("    nestedObj?.user?.profile?.name →", nestedObj?.user?.profile?.name);
console.log("    nestedObj?.missing?.property →", nestedObj?.missing?.property);

console.log("\n3.9 Nullish Coalescing (??):");
const value1 = null;
const value2 = 0;
const value3 = "";
console.log("    null ?? 'default' →", value1 ?? "default");
console.log("    0 ?? 'default' →", value2 ?? "default");
console.log("    '' ?? 'default' →", value3 ?? "default");

console.log("\n3.10 Array Methods (ES6):");
const numbers = [1, 2, 3, 4, 5];
console.log("    numbers:", numbers);
console.log("    map(x => x * 2) →", numbers.map(x => x * 2));
console.log("    filter(x => x > 2) →", numbers.filter(x => x > 2));
console.log("    find(x => x > 3) →", numbers.find(x => x > 3));
console.log("    reduce((a, b) => a + b, 0) →", numbers.reduce((a, b) => a + b, 0));

console.log("\n3.11 Object Methods (ES6):");
const personObj = {
  firstName: "John",
  lastName: "Doe",
  // Shorthand method
  greet() {
    return `Hello, I'm ${this.firstName}`;
  },
  // Computed property
  ["full" + "Name"]: "John Doe"
};
console.log("    personObj.greet() →", personObj.greet());

console.log("\n3.12 Classes (ES6):");
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`    ${this.name} makes a sound`);
  }
}

const animal = new Animal("Animal");
animal.speak();

console.log("\n✓ ES6+ Features Complete!");

// ============================================
// CHAPTER 4: PROTOTYPES & CLASSES
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 4: PROTOTYPES & CLASSES");
console.log("=".repeat(60));

console.log("\n4.1 Prototypes Kya Hain?");
console.log("    Har JavaScript object ka ek prototype hota hai");

console.log("\n4.2 Constructor Function:");
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

const person1 = new Person("Alice", 25);
console.log("    function Person(name, age) { ... }");
console.log("    person1.greet() →", person1.greet());

console.log("\n4.3 Prototype Chain:");
console.log("    person1 → Person.prototype → Object.prototype → null");
console.log("    person1.toString() →", person1.toString());

console.log("\n4.4 ES6 Classes:");
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  static create(name, age) {
    return new PersonClass(name, age);
  }
}

const person2 = new PersonClass("Bob", 30);
console.log("    class PersonClass { ... }");
console.log("    person2.greet() →", person2.greet());

console.log("\n4.5 Static Methods:");
const person3 = PersonClass.create("Charlie", 35);
console.log("    PersonClass.create('Charlie', 35)");
console.log("    person3.greet() →", person3.greet());

console.log("\n4.6 Inheritance with Prototypes:");
function AnimalConstructor(name) {
  this.name = name;
}

AnimalConstructor.prototype.speak = function() {
  console.log(`    ${this.name} makes a sound`);
};

function Dog(name) {
  AnimalConstructor.call(this, name);
}

Dog.prototype = Object.create(AnimalConstructor.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`    ${this.name} barks`);
};

const myDog = new Dog("Buddy");
myDog.speak();

console.log("\n4.7 Inheritance with Classes:");
class AnimalClass {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`    ${this.name} makes a sound`);
  }
}

class DogClass extends AnimalClass {
  speak() {
    console.log(`    ${this.name} barks`);
  }
  
  fetch() {
    console.log(`    ${this.name} fetches the ball`);
  }
}

const myDogClass = new DogClass("Max");
myDogClass.speak();
myDogClass.fetch();

console.log("\n4.8 super Keyword:");
class CatClass extends AnimalClass {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  
  speak() {
    console.log(`    ${this.name} meows (${this.color})`);
  }
}

const myCat = new CatClass("Whiskers", "orange");
myCat.speak();

console.log("\n4.9 Getters & Setters:");
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be positive");
    }
    this._width = value;
  }
}

const rect = new Rectangle(5, 10);
console.log("    rect.area →", rect.area);

console.log("\n✓ Prototypes & Classes Complete!");

// ============================================
// CHAPTER 5: HIGHER-ORDER FUNCTIONS
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 5: HIGHER-ORDER FUNCTIONS");
console.log("=".repeat(60));

console.log("\n5.1 Higher-Order Function Kya Hai?");
console.log("    Jo function doosre function ko:");
console.log("    - Parameter ke tor pe le");
console.log("    - Ya return kare");

console.log("\n5.2 Function as Parameter:");
function processUser(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return `Hello, ${name}!`;
}

function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

console.log("    processUser('Alice', sayHello) →", processUser("Alice", sayHello));
console.log("    processUser('Alice', sayGoodbye) →", processUser("Alice", sayGoodbye));

console.log("\n5.3 Function as Return Value:");
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const helloGreeter = createGreeter("Hello");
const hiGreeter = createGreeter("Hi");

console.log("    const helloGreeter = createGreeter('Hello')");
console.log("    helloGreeter('Alice') →", helloGreeter("Alice"));
console.log("    hiGreeter('Bob') →", hiGreeter("Bob"));

console.log("\n5.5 Array Higher-Order Functions:");
const nums = [1, 2, 3, 4, 5];
console.log("    nums:", nums);

console.log("\n    map - Transform:");
const doubled = nums.map(n => n * 2);
console.log("    nums.map(n => n * 2) →", doubled);

console.log("\n    filter - Filter:");
const evens = nums.filter(n => n % 2 === 0);
console.log("    nums.filter(n => n % 2 === 0) →", evens);

console.log("\n    reduce - Reduce to single value:");
const sumReduce = nums.reduce((acc, n) => acc + n, 0);
console.log("    nums.reduce((acc, n) => acc + n, 0) →", sumReduce);

console.log("\n    find - Find first match:");
const found = nums.find(n => n > 3);
console.log("    nums.find(n => n > 3) →", found);

console.log("\n    some - Check if any match:");
const hasEven = nums.some(n => n % 2 === 0);
console.log("    nums.some(n => n % 2 === 0) →", hasEven);

console.log("\n    every - Check if all match:");
const allPositive = nums.every(n => n > 0);
console.log("    nums.every(n => n > 0) →", allPositive);

console.log("\n    sort - Sort array:");
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("    [3,1,4,1,5,9,2,6].sort((a,b) => a-b) →", sorted);

console.log("\n5.6 Function Composition:");
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const doubleFunc = x => x * 2;
const addTen = x => x + 10;

const doubleThenAdd = compose(addTen, doubleFunc);
console.log("    compose(addTen, doubleFunc)(5) →", doubleThenAdd(5));

console.log("\n5.7 Currying:");
// Simple curry example
function addThree(a, b, c) {
  return a + b + c;
}

// Manual currying
const curriedAdd = (a) => (b) => (c) => a + b + c;
console.log("    Currying: Convert function to chain of single-arg functions");
console.log("    curriedAdd(1)(2)(3) →", curriedAdd(1)(2)(3));
console.log("    Step 1: curriedAdd(1) returns function");
console.log("    Step 2: (1)(2) returns function");
console.log("    Step 3: (1)(2)(3) returns 6");

console.log("\n✓ Higher-Order Functions Complete!");

// ============================================
// CHAPTER 6: ERROR HANDLING
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 6: ERROR HANDLING");
console.log("=".repeat(60));

console.log("\n6.1 try/catch/finally:");
try {
  console.log("    Trying...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("    Caught error:", error.message);
} finally {
  console.log("    Finally: Always runs");
}

console.log("\n6.2 Multiple Catch Blocks:");
try {
  const value = null;
  if (value === null) {
    throw new TypeError("Value is null");
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("    TypeError caught:", error.message);
  } else {
    console.log("    Other error:", error.message);
  }
}

console.log("\n6.3 Custom Errors:");
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  console.log("    " + error.name + ":", error.message);
}

console.log("\n6.4 Error Types:");
console.log("    - SyntaxError: Invalid syntax");
console.log("    - ReferenceError: Undefined variable");
console.log("    - TypeError: Wrong type usage");
console.log("    - RangeError: Invalid range");
console.log("    - URIError: Invalid URI");

console.log("\n6.5 Validation Example:");
function validateEmail(email) {
  if (!email) {
    throw new Error("Email is required");
  }
  if (!email.includes('@')) {
    throw new Error("Invalid email format");
  }
  return true;
}

try {
  validateEmail("test@example.com");
  console.log("    Email validation: Passed");
} catch (error) {
  console.log("    Email validation:", error.message);
}

console.log("\n6.6 Async Error Handling:");
async function fetchDataWithError() {
  try {
    console.log("    Fetching data...");
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 100);
    });
    console.log("    Success!");
  } catch (error) {
    console.log("    Error:", error.message);
  }
}

fetchDataWithError();

console.log("\n6.7 Best Practices:");
console.log("    ✓ Always catch errors in async code");
console.log("    ✓ Use specific error types");
console.log("    ✓ Log errors for debugging");
console.log("    ✓ Show user-friendly messages");
console.log("    ✓ Clean up resources in finally");

console.log("\n✓ Error Handling Complete!");

// ============================================
// CHAPTER 7: MODULES (import/export)
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 7: MODULES (import/export)");
console.log("=".repeat(60));

console.log("\n7.1 Modules Kyun Zaroori Hain?");
console.log("    - Code organization");
console.log("    - Reusability");
console.log("    - Maintainability");
console.log("    - Namespace management");

console.log("\n7.2 CommonJS (Node.js):");
console.log("    // math.js");
console.log("    const PI = 3.14159;");
console.log("    function add(a, b) { return a + b; }");
console.log("    module.exports = { PI, add };");
console.log("");
console.log("    // main.js");
console.log("    const math = require('./math');");
console.log("    console.log(math.PI);");

console.log("\n7.3 ES6 Modules:");
console.log("    // Named Export");
console.log("    export const PI = 3.14159;");
console.log("    export function add(a, b) { return a + b; }");
console.log("");
console.log("    // Default Export");
console.log("    export default class Calculator { ... }");
console.log("");
console.log("    // Import");
console.log("    import Calculator, { PI, add } from './math.js';");

console.log("\n7.4 Module Pattern (IIFE):");
const MathModule = (function() {
  const PI = 3.14159;
  
  return {
    add: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    getPI: function() {
      return PI;
    }
  };
})();

console.log("    MathModule.add(5, 3) →", MathModule.add(5, 3));
console.log("    MathModule.getPI() →", MathModule.getPI());

console.log("\n7.5 Export Types:");
console.log("\n    Named Exports:");
console.log("    export const name = 'value';");
console.log("    export function func() { ... }");
console.log("    export class Class { ... }");
console.log("    import { name, func, Class } from './module';");

console.log("\n    Default Export:");
console.log("    export default function() { ... }");
console.log("    import anyName from './module';");

console.log("\n    Re-export:");
console.log("    export { name } from './other';");
console.log("    export * from './other';");

console.log("\n7.6 Dynamic Imports:");
console.log("    // Lazy loading");
console.log("    button.addEventListener('click', async () => {");
console.log("      const module = await import('./module.js');");
console.log("      module.function();");
console.log("    });");

console.log("\n✓ Modules Complete!");

// ============================================
// CHAPTER 8: JSON & LOCALSTORAGE
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 8: JSON & LOCALSTORAGE");
console.log("=".repeat(60));

console.log("\n8.1 JSON Kya Hai?");
console.log("    JavaScript Object Notation");
console.log("    Data exchange ka standard format");

console.log("\n8.2 JSON Create karna:");
const userObj = {
  name: "Alice",
  age: 25,
  city: "New York",
  hobbies: ["reading", "coding"]
};
console.log("    const user = { name: 'Alice', age: 25, ... };");

console.log("\n8.3 JSON.stringify (Object to JSON):");
const jsonString = JSON.stringify(userObj);
console.log("    JSON.stringify(user)");
console.log("    Result:", jsonString);

console.log("\n8.4 JSON.parse (JSON to Object):");
const parsedObj = JSON.parse(jsonString);
console.log("    JSON.parse(jsonString)");
console.log("    Result:", parsedObj);
console.log("    parsedObj.name →", parsedObj.name);

console.log("\n8.5 JSON with Arrays:");
const usersArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const usersJson = JSON.stringify(usersArray);
console.log("    Array to JSON:", usersJson);
const parsedArray = JSON.parse(usersJson);
console.log("    JSON to Array:", parsedArray);

console.log("\n8.6 LocalStorage Kya Hai?");
console.log("    Browser mein data store karne ki jagah");
console.log("    5-10MB storage");
console.log("    Data persist rehta hai");

console.log("\n8.7 LocalStorage Methods:");
console.log("    localStorage.setItem('key', 'value')");
console.log("    localStorage.getItem('key')");
console.log("    localStorage.removeItem('key')");
console.log("    localStorage.clear()");
console.log("    localStorage.length");
console.log("    localStorage.key(index)");

console.log("\n8.8 LocalStorage Example (Node.js simulation):");
// Simulating localStorage in Node.js
const localStorageSim = {
  _data: {},
  setItem: function(key, value) {
    this._data[key] = String(value);
    console.log(`    setItem('${key}', '${value}')`);
  },
  getItem: function(key) {
    console.log(`    getItem('${key}') →`, this._data[key]);
    return this._data[key];
  },
  removeItem: function(key) {
    delete this._data[key];
    console.log(`    removeItem('${key}')`);
  },
  clear: function() {
    this._data = {};
    console.log("    clear()");
  }
};

console.log("    Storing data:");
localStorageSim.setItem("username", "Alice");
localStorageSim.setItem("email", "alice@example.com");
localStorageSim.setItem("age", "25");

console.log("\n    Retrieving data:");
localStorageSim.getItem("username");
localStorageSim.getItem("email");

console.log("\n8.9 Storing Objects in LocalStorage:");
const userToStore = { name: "Bob", age: 30 };
const userJsonStorage = JSON.stringify(userToStore);
console.log("    Storing object:");
localStorageSim.setItem("user", userJsonStorage);

console.log("\n    Retrieving object:");
localStorageSim.getItem("user");
const retrievedUser = JSON.parse(localStorageSim.getItem("user") || "{}");
console.log("    Parsed:", retrievedUser);

console.log("\n8.10 LocalStorage vs SessionStorage vs Cookies:");
console.log("    ┌─────────────┬──────────┬─────────────┬──────────┐");
console.log("    │ Feature     │ Local    │ Session     │ Cookies  │");
console.log("    ├─────────────┼──────────┼─────────────┼──────────┤");
console.log("    │ Capacity    │ 5-10MB   │ 5MB         │ 4KB      │");
console.log("    │ Expiry      │ Never    │ Tab close   │ Set time │");
console.log("    │ Server Send │ No       │ No          │ Yes      │");
console.log("    └─────────────┴──────────┴─────────────┴──────────┘");

console.log("\n8.11 Practical Use Cases:");
console.log("    - User preferences save karna");
console.log("    - Shopping cart store karna");
console.log("    - Form data temporarily save karna");
console.log("    - Dark/light theme yaad rakhna");
console.log("    - Login token store karna");

console.log("\n8.12 Browser Example:");
console.log("    // Save theme preference");
console.log("    localStorage.setItem('theme', 'dark');");
console.log("");
console.log("    // Load theme preference");
console.log("    const theme = localStorage.getItem('theme');");
console.log("    if (theme === 'dark') {");
console.log("      document.body.classList.add('dark-theme');");
console.log("    }");

console.log("\n✓ JSON & LocalStorage Complete!");

// ============================================
// CHAPTER 9: ADVANCED PROJECT - E-COMMERCE APP
// ============================================

console.log("\n" + "=".repeat(60));
console.log("CHAPTER 9: ADVANCED PROJECT - E-COMMERCE APP");
console.log("=".repeat(60));

// Product Class
class Product {
  constructor(id, name, price, category, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }
  
  isInStock() {
    return this.stock > 0;
  }
  
  reduceStock(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return true;
    }
    return false;
  }
}

// Cart Item Class
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  
  getSubtotal() {
    return this.product.price * this.quantity;
  }
}

// Shopping Cart Class
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    if (!product.isInStock()) {
      console.log(`    ✗ ${product.name} is out of stock!`);
      return false;
    }
    
    const existingItem = this.items.find(
      item => item.product.id === product.id
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(`    ✓ Updated ${product.name} quantity to ${existingItem.quantity}`);
    } else {
      this.items.push(new CartItem(product, quantity));
      console.log(`    ✓ Added ${quantity}x ${product.name} to cart`);
    }
    return true;
  }
  
  removeItem(productId) {
    const index = this.items.findIndex(
      item => item.product.id === productId
    );
    if (index !== -1) {
      const removed = this.items.splice(index, 1)[0];
      console.log(`    ✓ Removed ${removed.product.name} from cart`);
      return removed;
    }
    return null;
  }
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(
      item => item.product.id === productId
    );
    if (item) {
      item.quantity = quantity;
      console.log(`    ✓ Updated ${item.product.name} quantity to ${quantity}`);
    }
  }
  
  getSubtotal() {
    return this.items.reduce(
      (total, item) => total + item.getSubtotal(),
      0
    );
  }
  
  getTax(rate = 0.1) {
    return this.getSubtotal() * rate;
  }
  
  getTotal() {
    return this.getSubtotal() + this.getTax();
  }
  
  getItemCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  displayCart() {
    console.log("\n    === SHOPPING CART ===");
    if (this.items.length === 0) {
      console.log("    Cart is empty");
      return;
    }
    
    this.items.forEach(item => {
      console.log(`    ${item.product.name} x${item.quantity}`);
      console.log(`      $${item.product.price.toFixed(2)} each = $${item.getSubtotal().toFixed(2)}`);
    });
    
    console.log("\n    Subtotal: $" + this.getSubtotal().toFixed(2));
    console.log("    Tax (10%): $" + this.getTax().toFixed(2));
    console.log("    Total: $" + this.getTotal().toFixed(2));
    console.log("    Items: " + this.getItemCount());
  }
  
  clear() {
    this.items = [];
    console.log("    ✓ Cart cleared");
  }
}

// Order Class
class Order {
  constructor(cart, customerInfo) {
    this.id = Date.now();
    this.items = JSON.parse(JSON.stringify(cart.items));
    this.total = cart.getTotal();
    this.customer = customerInfo;
    this.status = "pending";
    this.date = new Date();
  }
  
  confirm() {
    this.status = "confirmed";
    console.log(`    ✓ Order #${this.id} confirmed!`);
  }
  
  ship() {
    this.status = "shipped";
    console.log(`    ✓ Order #${this.id} shipped!`);
  }
  
  deliver() {
    this.status = "delivered";
    console.log(`    ✓ Order #${this.id} delivered!`);
  }
  
  getStatus() {
    return this.status;
  }
}

// E-Commerce Store Class
class ECommerceStore {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.orders = [];
    this.nextId = 1;
  }
  
  addProduct(name, price, category, stock) {
    const product = new Product(this.nextId++, name, price, category, stock);
    this.products.push(product);
    console.log(`    ✓ Product added: ${name} - $${price} (Stock: ${stock})`);
    return product;
  }
  
  getProductsByCategory(category) {
    return this.products.filter(p => p.category === category);
  }
  
  searchProducts(query) {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  getAvailableProducts() {
    return this.products.filter(p => p.isInStock());
  }
  
  placeOrder(cart, customerInfo) {
    if (cart.items.length === 0) {
      console.log("    ✗ Cart is empty!");
      return null;
    }
    
    // Reduce stock
    cart.items.forEach(item => {
      item.product.reduceStock(item.quantity);
    });
    
    const order = new Order(cart, customerInfo);
    this.orders.push(order);
    order.confirm();
    return order;
  }
  
  getOrdersByStatus(status) {
    return this.orders.filter(o => o.status === status);
  }
  
  displayProducts() {
    console.log("\n    === " + this.name + " - PRODUCTS ===");
    this.products.forEach(p => {
      const stockStatus = p.isInStock() ? `In Stock (${p.stock})` : "Out of Stock";
      console.log(`    [${p.id}] ${p.name} - $${p.price} (${p.category}) - ${stockStatus}`);
    });
  }
  
  displayOrders() {
    console.log("\n    === ORDERS ===");
    this.orders.forEach(order => {
      console.log(`    Order #${order.id} - $${order.total.toFixed(2)} - ${order.status}`);
    });
  }
}

// Demo: E-Commerce Store
console.log("\n9.1 Welcome to TechStore!\n");

const store = new ECommerceStore("TechStore");

console.log("Step 1: Adding Products");
console.log("----------------------");
const laptop = store.addProduct("Gaming Laptop", 1299.99, "Electronics", 10);
const mouse = store.addProduct("Wireless Mouse", 49.99, "Accessories", 50);
const keyboard = store.addProduct("Mechanical Keyboard", 149.99, "Accessories", 30);
const headphones = store.addProduct("Noise-Canceling Headphones", 299.99, "Audio", 20);
const monitor = store.addProduct("4K Monitor", 599.99, "Electronics", 15);

store.displayProducts();

console.log("\nStep 2: Customer Shopping Session");
console.log("---------------------------------");
const cart = new ShoppingCart();

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(keyboard, 1);
cart.addItem(headphones, 1);

cart.displayCart();

console.log("\nStep 3: Update Cart");
console.log("------------------");
cart.updateQuantity(mouse.id, 3);
cart.displayCart();

console.log("\nStep 4: Remove Item");
console.log("------------------");
cart.removeItem(keyboard.id);
cart.displayCart();

console.log("\nStep 5: Search Products");
console.log("----------------------");
const searchResults = store.searchProducts("mouse");
console.log("    Search 'mouse':");
searchResults.forEach(p => {
  console.log(`      - ${p.name}: $${p.price}`);
});

console.log("\nStep 6: Filter by Category");
console.log("-------------------------");
const electronics = store.getProductsByCategory("Electronics");
console.log("    Electronics:");
electronics.forEach(p => {
  console.log(`      - ${p.name}: $${p.price}`);
});

console.log("\nStep 7: Checkout");
console.log("----------------");
const customer = {
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St, City",
  phone: "555-1234"
};

console.log("    Customer:", customer.name);
console.log("    Email:", customer.email);

const order = store.placeOrder(cart, customer);

console.log("\nStep 8: Order Processing");
console.log("-----------------------");
setTimeout(() => order.ship(), 100);
setTimeout(() => order.deliver(), 200);

console.log("\nStep 9: Store Statistics");
console.log("-----------------------");
console.log("    Total Products:", store.products.length);
console.log("    Total Orders:", store.orders.length);
console.log("    Available Products:", store.getAvailableProducts().length);

store.displayOrders();

console.log("\n9.2 Features Implemented:");
console.log("    ✓ Product management");
console.log("    ✓ Shopping cart");
console.log("    ✓ Stock management");
console.log("    ✓ Order processing");
console.log("    ✓ Search functionality");
console.log("    ✓ Category filtering");
console.log("    ✓ Customer information");
console.log("    ✓ Order status tracking");

console.log("\n9.3 Browser Version Extensions:");
console.log("    - Add HTML/CSS UI");
console.log("    - Use localStorage for cart persistence");
console.log("    - Add payment integration");
console.log("    - Add user authentication");
console.log("    - Add product reviews");

// ============================================
// COURSE COMPLETION MESSAGE
// ============================================

setTimeout(() => {
  console.log("\n" + "=".repeat(60));
  console.log("🎉 JAVASCRIPT ADVANCED COURSE COMPLETED!");
  console.log("=".repeat(60));
  console.log("You've learned (Chapters 1-8):");
  console.log("  ✓ Chapter 1: Closures & Scope");
  console.log("  ✓ Chapter 2: Async JavaScript (Promises, async/await)");
  console.log("  ✓ Chapter 3: ES6+ Features");
  console.log("  ✓ Chapter 4: Prototypes & Classes");
  console.log("  ✓ Chapter 5: Higher-Order Functions");
  console.log("  ✓ Chapter 6: Error Handling");
  console.log("  ✓ Chapter 7: Modules (import/export)");
  console.log("  ✓ Chapter 8: JSON & LocalStorage");
  console.log("  ✓ Chapter 9: Advanced Project (E-Commerce App)");
  console.log("=".repeat(60));
  console.log("\n🏆 Congratulations! You've completed both Basic and Advanced JavaScript courses!");
  console.log("=".repeat(60));
}, 300);
