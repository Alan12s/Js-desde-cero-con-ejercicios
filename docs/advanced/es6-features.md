# ES6+ Features in JavaScript

## Table of Contents
1. [Destructuring](#destructuring)
2. [Spread & Rest](#spread--rest)
3. [Template Literals](#template-literals)
4. [Arrow Functions](#arrow-functions)
5. [Classes](#classes)
6. [Modules](#modules)
7. [Promises](#promises)
8. [Async/Await](#asyncawait)
9. [Additional Features](#additional-features)

---

## Destructuring

### Array Destructuring
```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "green"

// Skip elements
const [,, third] = colors;
console.log(third); // "blue"

// Rest pattern
const [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["green", "blue"]

// Default values
const [a = 1, b = 2] = ["only"];
console.log(a); // "only"
console.log(b); // 2

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

### Object Destructuring
```javascript
const user = { name: "Alice", age: 30, city: "NYC" };

// Basic
const { name, age } = user;
console.log(name); // "Alice"

// Rename
const { name: userName } = user;
console.log(userName); // "Alice"

// Default values
const { name, isAdmin = false } = user;
console.log(isAdmin); // false

// Nested
const { address: { city, zip } } = { address: { city: "NYC", zip: "10001" } };

// In function parameters
function greet({ name, age }) {
  return `Hi, I'm ${name}, ${age} years old`;
}
```

### Combined Example
```javascript
const response = {
  data: {
    user: {
      name: "Alice",
      preferences: { theme: "dark", language: "en" }
    }
  }
};

// Deep destructuring
const { 
  data: { 
    user: { 
      name, 
      preferences: { theme } 
    } 
  } 
} = response;
```

---

## Spread & Rest

### Spread Operator (...)
```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]
const copy = [...arr1]; // Clone array

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
const clone = { ...obj1 };

// Function arguments
const nums = [1, 2, 3];
Math.max(...nums); // 3

// String to array
[..."hello"]; // ["h","e","l","l","o"]
```

### Rest Parameters (...)
```javascript
// Function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Destructuring with rest
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// Object rest
const { name, age, ...others } = { name: "Alice", age: 30, city: "NYC", job: "Dev" };
console.log(others); // { city: "NYC", job: "Dev" }
```

### Spread in Object Literals
```javascript
const defaults = { theme: "light", language: "en", timeout: 5000 };
const userPrefs = { theme: "dark", timeout: 3000 };

// Override defaults
const config = { ...defaults, ...userPrefs };
// { theme: "dark", language: "en", timeout: 3000 }
```

---

## Template Literals

### Basic Syntax
```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

// Expressions
const a = 5, b = 10;
console.log(`Sum: ${a + b}`); // "Sum: 15"

// Multi-line
const html = `
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
`;
```

### Nested Templates
```javascript
const isLoggedIn = true;
const user = { name: "Alice" };

const message = `
  ${isLoggedIn 
    ? `Welcome back, ${user.name}!` 
    : "Please log in"
  }
`;
```

### Tagged Templates
```javascript
function highlight(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += str;
    if (values[i]) {
      result += `<mark>${values[i]}</mark>`;
    }
  });
  return result;
}

const name = "Alice";
const age = 30;
const bio = highlight`My name is ${name} and I am ${age} years old.`;
// "My name is <mark>Alice</mark> and I am <mark>30</mark> years old."
```

---

## Arrow Functions

### Syntax Variations
```javascript
// Full syntax
const add = (a, b) => { return a + b; };

// Implicit return (single expression)
const add = (a, b) => a + b;

// Single parameter - no parentheses needed
const double = x => x * 2;

// No parameters
const getRandom = () => Math.random();

// Multi-line
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
```

### Arrow Functions and `this`
```javascript
// Regular function - own 'this'
function Timer() {
  this.seconds = 0;
  setInterval(function() {
    this.seconds++; // 'this' is NOT Timer instance
  }, 1000);
}

// Arrow function - inherits 'this'
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // 'this' IS Timer instance
  }, 1000);
}
```

### Arrow Functions Limitations
```javascript
// Cannot use as constructor
const Person = (name) => {
  this.name = name;
};
// new Person("Alice"); // Error!

// Cannot use 'arguments' object
const fn = () => {
  console.log(arguments); // Error!
};

// Better to use rest parameters
const fn = (...args) => {
  console.log(args);
};
```

---

## Classes

### Basic Class
```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isActive = true;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  static create(data) {
    return new User(data.name, data.email);
  }
}

const user = new User("Alice", "alice@example.com");
console.log(user.greet()); // "Hello, I'm Alice"
```

### Getters and Setters
```javascript
class User {
  constructor(name) {
    this._name = name;
  }
  
  get name() {
    return this._name.toUpperCase();
  }
  
  set name(value) {
    if (value.length < 2) {
      throw new Error("Name too short");
    }
    this._name = value;
  }
}
```

### Class Inheritance
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
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    super.speak(); // Call parent method
    console.log(`${this.name} barks!`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
// "Rex makes a sound"
// "Rex barks!"
```

### Private Fields
```javascript
class BankAccount {
  #balance; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.#balance += amount;
  }
  
  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
// account.#balance; // Error!
```

---

## Promises

### Creating Promises
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // or: reject(new Error("Failed"));
  }, 1000);
});
```

### Consuming Promises
```javascript
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

### Promise Chaining
```javascript
fetch("/api/user")
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

---

## Async/Await

### Basic Usage
```javascript
async function fetchUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Parallel Execution
```javascript
async function loadData() {
  // Sequential (slow)
  const user = await fetchUser();
  const posts = await fetchPosts();
  
  // Parallel (fast)
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
}
```

---

## Additional Features

### Optional Chaining
```javascript
const user = { 
  address: { 
    city: "NYC" 
  } 
};

// Before
const city = user && user.address && user.address.city;

// After
const city = user?.address?.city;
const zip = user?.address?.zip ?? "Unknown";
```

### Nullish Coalescing
```javascript
const value = null ?? "default";      // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";        // 0
const value4 = "" ?? "default";        // ""
```

### BigInt
```javascript
const huge = 9007199254740991n;
const result = huge + 1n;
```

### Symbol
```javascript
const unique = Symbol("description");
const obj = {
  [unique]: "value",
  regular: "other"
};
```

### Iterators & Generators
```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

### Array.findLast & findLastIndex (ES2023)
```javascript
const nums = [1, 2, 3, 2, 1];
nums.findLast(n => n === 2); // 2 (last occurrence)
nums.findLastIndex(n => n === 2); // 3
```

---

## Quick Reference

```javascript
// Destructuring
const { a, b } = obj;
const [x, y] = arr;

// Spread
[...arr1, ...arr2];
{ ...obj1, ...obj2 };

// Rest
function fn(...args) { }
const [first, ...rest] = arr;

// Template literal
`Hello, ${name}!`;

// Arrow function
const fn = () => expression;
const fn = (a, b) => a + b;

// Class
class Sub extends Base {
  constructor() { super(); }
  method() { }
}

// Optional chaining
obj?.prop?.nested?.value;

// Nullish coalescing
value ?? default;
```

---

## What's Next?

- [Array Methods](./array-methods.md) - Master array transformations
- [Clean Code](./clean-code.md) - Write better, maintainable code
- [Examples](../examples/advanced/es6-features.js) - See ES6+ in action
