# Scope in JavaScript

## Table of Contents
1. [What is Scope?](#what-is-scope)
2. [Global Scope](#global-scope)
3. [Function Scope](#function-scope)
4. [Block Scope](#block-scope)
5. [Lexical Scope](#lexical-scope)
6. [The Scope Chain](#the-scope-chain)
7. [Hoisting](#hoisting)
8. [Best Practices](#best-practices)

---

## What is Scope?

Scope determines where variables are accessible in your code.

```
Global Scope      - Everywhere
├── Function Scope - Inside functions
│   └── Block Scope - Inside {} blocks
```

---

## Global Scope

Variables declared outside any function or block.

```javascript
const appName = "My App";

function greet() {
  console.log(appName); // Can access global
}
greet();

console.log(appName); // Can access global
```

### Problems with Global Scope
```javascript
// Two scripts might overwrite each other
var count = 10; // Script 1
var count = 20; // Script 2 - overwrites!

// Solution: Use modules (ES6) or IIFE
```

---

## Function Scope

Variables declared inside a function are only accessible there.

### var (Function Scoped)
```javascript
function test() {
  if (true) {
    var message = "Inside if";
  }
  console.log(message); // "Inside if" - var is function-scoped!
}
test();
```

### Function Scope Example
```javascript
function createGreeting(name) {
  const greeting = "Hello";
  
  function makeGreeting() {
    return `${greeting}, ${name}!`;
  }
  
  return makeGreeting();
}

console.log(createGreeting("Alice")); // "Hello, Alice!"
// console.log(greeting); // Error - not accessible
// console.log(makeGreeting); // Error - not accessible
```

---

## Block Scope

Variables declared inside `{}` are only accessible there.

### let and const (Block Scoped)
```javascript
if (true) {
  let blockVar = "I'm block scoped";
  const alsoBlockScoped = "Me too";
}
console.log(blockVar); // Error!
console.log(alsoBlockScoped); // Error!
```

### Loop Scope
```javascript
for (let i = 0; i < 3; i++) {
  // i is block-scoped to this loop
}
console.log(i); // Error!

// var would work (function-scoped)
for (var j = 0; j < 3; j++) {}
console.log(j); // 3 - accessible!
```

### Block Scope with Functions
```javascript
{
  const private = "I'm private";
  let data = [1, 2, 3];
}
// Not accessible here
// console.log(private); // Error!
```

---

## Lexical Scope

Functions are defined in the scope where they're created, not where they're called.

```javascript
const x = 10;

function outer() {
  const x = 20;
  
  function inner() {
    console.log(x); // 20 - uses outer()'s x
  }
  
  return inner;
}

const fn = outer();
fn(); // 20
```

### Dynamic vs Lexical
```javascript
// Lexical (JavaScript): Where function is defined
const x = 1;
function foo() {
  console.log(x);
}

function bar() {
  const x = 2;
  foo(); // Prints 1, not 2!
}

bar();
```

---

## The Scope Chain

JavaScript looks up variables through nested scopes.

```javascript
const globalVar = "global";

function outer() {
  const outerVar = "outer";
  
  function middle() {
    const middleVar = "middle";
    
    function inner() {
      const innerVar = "inner";
      console.log(innerVar);   // Found in inner
      console.log(middleVar);  // Found in middle
      console.log(outerVar);   // Found in outer
      console.log(globalVar);  // Found in global
    }
    
    return inner;
  }
  
  return middle;
}

outer()()();
// innerVar, middleVar, outerVar, globalVar
```

### Visualizing the Chain
```
Global Scope
└── globalVar
    └── outer()
        └── outerVar
            └── middle()
                └── middleVar
                    └── inner()
                        └── innerVar
```

---

## Hoisting

JavaScript moves declarations to the top of their scope.

### var Hoisting
```javascript
console.log(x); // undefined (not error!)
var x = 5;

// JavaScript sees it as:
var x; // Declaration hoisted
console.log(x); // undefined
x = 5; // Assignment stays in place
```

### function Hoisting
```javascript
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}

// Functions are fully hoisted (including body)
```

### let and const Hoisting
```javascript
// Temporal Dead Zone
console.log(x); // ReferenceError!
let x = 5;

// Cannot access before declaration (TDZ applies)
```

### Class Hoisting
```javascript
const instance = new MyClass(); // ReferenceError!
class MyClass {}
```

### Practical Example
```javascript
function hoist() {
  console.log(x); // undefined (var hoisted)
  console.log(y); // ReferenceError! (let not hoisted)
  
  if (true) {
    var x = 10;
    let y = 20;
  }
}
hoist();
```

---

## Best Practices

### 1. Use const/let Over var
```javascript
// Bad - var is function-scoped, can cause bugs
function process(items) {
  for (var i = 0; i < items.length; i++) {
    // process item
  }
  console.log(i); // i is still accessible!
}

// Good - let is block-scoped
function process(items) {
  for (let i = 0; i < items.length; i++) {
    // process item
  }
  // i is not accessible here
}
```

### 2. Declare Variables Near Usage
```javascript
// Bad - declarations far from usage
const config = loadConfig();
let user;

function init() {
  user = loadUser();
  renderHeader();
}

// Good - grouped declarations
function init() {
  const config = loadConfig();
  const user = loadUser();
  renderHeader(config, user);
}
```

### 3. Use Modules for Encapsulation
```javascript
// module.js - everything is scoped to module
const privateVar = "can't access from outside";

export const publicVar = "can access";
export function publicFunc() { ... }

// main.js
import { publicVar, publicFunc } from './module.js';
```

### 4. Avoid Global Variables
```javascript
// Bad - globals can conflict
var appName = "My App";
var version = "1.0";

// Good - wrap in module or IIFE
const App = (function() {
  const name = "My App";
  const version = "1.0";
  return { name, version };
})();

// Or use ES6 modules
// export const name = "My App";
```

### 5. Understand Closure Scope
```javascript
// Closure captures variables by reference
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
```

---

## Quick Reference

```javascript
// Global scope
const globalVar = "everywhere";

// Function scope (var)
function fn() {
  var x = 10; // function-scoped
}

// Block scope (let, const)
if (true) {
  let y = 20; // block-scoped
  const z = 30;
}

// Lexical scope
function outer() {
  const x = 1;
  function inner() {
    console.log(x); // Accesses outer's x
  }
  return inner;
}

// Hoisting
console.log(x); // undefined (not error!)
var x = 5;
```

---

## What's Next?

- [ES6+ Features](./es6-features.md) - Master modern JavaScript syntax
- [Examples](../examples/advanced/scope.js) - See scope in action
- [Exercises](../examples/advanced/scope.md) - Practice with exercises
