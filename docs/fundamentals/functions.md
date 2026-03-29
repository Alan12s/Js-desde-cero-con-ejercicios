# Functions in JavaScript

## Table of Contents
1. [Function Declaration](#function-declaration)
2. [Function Expression](#function-expression)
3. [Arrow Functions](#arrow-functions)
4. [Parameters and Arguments](#parameters-and-arguments)
5. [Return Values](#return-values)
6. [Scope](#scope)
7. [Closures](#closures)
8. [Higher-Order Functions](#higher-order-functions)
9. [Best Practices](#best-practices)

---

## Function Declaration

A function declaration defines a named function:

```javascript
function functionName(parameters) {
  // code
  return value;
}
```

### Examples
```javascript
// Simple function
function greet() {
  return "Hello, World!";
}
console.log(greet()); // "Hello, World!"

// Function with parameters
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Alice")); // "Hello, Alice!"

// Function with multiple parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
```

### Hoisting
Function declarations are hoisted - they can be called before they appear in code:
```javascript
// This works! (hoisted)
sayHi(); 

function sayHi() {
  console.log("Hi!");
}
```

---

## Function Expression

A function expression assigns a function to a variable:

```javascript
const functionName = function(parameters) {
  // code
  return value;
};
```

### Examples
```javascript
// Anonymous function expression
const greet = function() {
  return "Hello!";
};
console.log(greet()); // "Hello!"

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // 120

// Not hoisted (unlike declarations)
sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = function() {
  console.log("Hello!");
};
```

---

## Arrow Functions

ES6 shorthand for function expressions:

```javascript
// Full syntax
const func = (params) => {
  return value;
};

// Single parameter - parentheses optional
const func = param => value;

// Single expression - braces and return optional
const func = param => value;

// Multi-line requires braces and return
const func = param => {
  const result = doSomething(param);
  return result;
};
```

### Examples
```javascript
// Traditional
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;

// Single parameter
const double = x => x * 2;
const greet = name => `Hello, ${name}!`;

// No parameters
const getRandom = () => Math.random();

// Multi-line arrow function
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
```

### Arrow Functions and `this`
Arrow functions don't have their own `this`:
```javascript
const person = {
  name: "Alice",
  // Traditional function - has its own 'this'
  sayHello: function() {
    return `Hi, I'm ${this.name}`;
  },
  // Arrow function - inherits 'this' from surrounding scope
  sayHi: () => {
    return `Hi, I'm ${this.name}`; // 'this' is NOT person
  }
};
```

---

## Parameters and Arguments

### Default Parameters
```javascript
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greet());              // "Hello, Guest!"
console.log(greet("Alice"));       // "Hello, Alice!"
console.log(greet("Bob", "Hi"));   // "Hi, Bob!"
```

### Rest Parameters
Collect multiple arguments into an array:
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3));      // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function logAll(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logAll("a", "b", "c", "d"); // First: a, Rest: ["b", "c", "d"]
```

### Arguments Object (Not in Arrow Functions)
```javascript
function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
```

---

## Return Values

### Returning Values
```javascript
function add(a, b) {
  return a + b;
}
const result = add(2, 3); // 5

// No return returns undefined
function noReturn() {
  console.log("Hello");
}
console.log(noReturn()); // undefined
```

### Early Returns
```javascript
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return "User is inactive";
  
  return processUserData(user);
}
```

### Returning Multiple Values
```javascript
// Using array
function getStats(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const avg = numbers.reduce((a, b) => a + b) / numbers.length;
  return [min, max, avg];
}
const [minimum, maximum, average] = getStats([1, 2, 3, 4, 5]);

// Using object
function getStats(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    avg: numbers.reduce((a, b) => a + b) / numbers.length
  };
}
const { min, max, avg } = getStats([1, 2, 3, 4, 5]);
```

---

## Scope

### Global Scope
```javascript
const globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}
```

### Local/Function Scope
```javascript
function outer() {
  const outerVar = "I'm in outer function";
  
  function inner() {
    const innerVar = "I'm in inner function";
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }
  
  inner();
  console.log(innerVar); // Error! Not accessible
}
```

### Block Scope
```javascript
if (true) {
  let blockScoped = "I'm block scoped";
  const alsoBlockScoped = "Me too";
  var functionScoped = "I'm function scoped"; // Avoid!
}
console.log(functionScoped); // Accessible (problematic)
console.log(blockScoped); // Error!
```

---

## Closures

A function that remembers its outer variables:

```javascript
function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1 (separate count)
```

### Practical Closure Example
```javascript
function createPriceCalculator(discount) {
  const discountRate = discount; // Captured by closure
  
  return function(price) {
    const discountAmount = price * discountRate;
    return price - discountAmount;
  };
}

const tenPercentOff = createPriceCalculator(0.10);
const twentyPercentOff = createPriceCalculator(0.20);

console.log(tenPercentOff(100));  // 90
console.log(twentyPercentOff(100)); // 80
```

---

## Higher-Order Functions

Functions that take or return other functions:

### Functions as Parameters
```javascript
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

repeat(() => console.log("Hello!"), 3);
// Hello!
// Hello!
// Hello!
```

### Functions Returning Functions
```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Common Higher-Order Functions
```javascript
// map - transform each element
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter - keep elements that pass test
[1, 2, 3, 4, 5].filter(x => x > 2); // [3, 4, 5]

// reduce - combine into single value
[1, 2, 3, 4].reduce((acc, x) => acc + x, 0); // 10

// forEach - execute for each element
[1, 2, 3].forEach(x => console.log(x));

// find - return first matching element
[1, 2, 3, 4].find(x => x > 2); // 3

// some - check if any pass test
[1, 2, 3].some(x => x > 2); // true

// every - check if all pass test
[1, 2, 3].every(x => x > 0); // true
```

---

## Best Practices

### 1. Use Descriptive Names
```javascript
// Bad
function calc(a, b) { ... }

// Good
function calculateTotalPrice(price, tax) { ... }
```

### 2. Keep Functions Small
```javascript
// Bad - too many responsibilities
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendEmail(user);
  logActivity(user);
}

// Good - separate concerns
function validateUser(user) { ... }
function saveUser(user) { ... }
function notifyUser(user) { ... }
function logUserAction(user) { ... }
```

### 3. One Function, One Job
```javascript
// Bad
function updateUser(user) {
  // validation, update, save, notify - too much!
}

// Good
function validateUserData(data) { ... }
function applyUserUpdate(user, updates) { ... }
function saveUser(user) { ... }
```

### 4. Use Arrow Functions for Callbacks
```javascript
// Good
numbers.map(n => n * 2);
numbers.filter(n => n > 0);

// For methods with multiple operations, use traditional
numbers.map(n => {
  const doubled = n * 2;
  return doubled + 1;
});
```

### 5. Handle Edge Cases
```javascript
// Bad
function divide(a, b) {
  return a / b; // Division by zero returns Infinity
}

// Good
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

---

## Quick Reference

```javascript
// Declaration
function name(params) { return value; }

// Expression
const name = function(params) { return value; };

// Arrow function
const name = (params) => value;
const name = params => value;

// Default parameters
function name(param = default) { ... }

// Rest parameters
function name(...params) { ... }

// Return
return value;
return { a, b }; // Object
return [a, b];    // Array

// Higher-order
function highOrder(fn) { fn(); }
function returnsFunc() { return () => "..."; }
```

---

## What's Next?

- [Arrays & Objects](./arrays-objects.md) - Learn about data collections
- [Examples](../examples/fundamentals/functions.js) - See functions in action
- [Exercises](../exercises/fundamentals/functions.md) - Practice with exercises
