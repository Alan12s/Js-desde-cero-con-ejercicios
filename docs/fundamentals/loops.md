# Loops in JavaScript

## Table of Contents
1. [for Loop](#for-loop)
2. [while Loop](#while-loop)
3. [do...while Loop](#dowhile-loop)
4. [for...in Loop](#forin-loop)
5. [for...of Loop](#forof-loop)
6. [Loop Control](#loop-control)
7. [Array Methods Instead of Loops](#array-methods-instead-of-loops)
8. [Best Practices](#best-practices)

---

## for Loop

Executes a block of code a specific number of times:

```javascript
for (initialization; condition; increment) {
  // code to run each iteration
}
```

### Syntax Breakdown
- **Initialization**: Run once before the loop starts
- **Condition**: Checked before each iteration
- **Increment**: Run after each iteration

### Examples
```javascript
// Count 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Count backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1

// Even numbers (0 to 10)
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10

// Iterate over array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## while Loop

Executes as long as condition is true:

```javascript
while (condition) {
  // code
  // must modify condition to avoid infinite loop
}
```

### Examples
```javascript
// Simple counter
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
// Output: 1, 2, 3, 4, 5

// Find first element meeting condition
const numbers = [3, 7, 2, 9, 5];
let i = 0;
while (numbers[i] < 5) {
  i++;
}
console.log(`First number >= 5 is at index ${i}: ${numbers[i]}`);

// Process until user quits
let input = "";
while (input !== "quit") {
  input = prompt("Enter 'quit' to exit:");
}
```

---

## do...while Loop

Always executes at least once before checking condition:

```javascript
do {
  // code (runs at least once)
} while (condition);
```

### Examples
```javascript
// Ask for password at least once
let password;
do {
  password = prompt("Enter password:");
} while (password !== "secret");

// Generate random numbers until condition met
let random;
do {
  random = Math.floor(Math.random() * 10);
  console.log(random);
} while (random !== 7);
```

### while vs do...while
```javascript
// while - might not execute
let x = 0;
while (x > 0) {
  console.log(x); // Never runs
}

// do...while - always runs once
let y = 0;
do {
  console.log(y); // Runs once: 0
} while (y > 0);
```

---

## for...in Loop

Iterates over enumerable properties of an object:

```javascript
for (variable in object) {
  // code
}
```

### Examples
```javascript
// Iterate over object properties
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York

// Iterate over array indices (not recommended, use for...of instead)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`${index}: ${colors[index]}`);
}
```

---

## for...of Loop

Iterates over iterable objects (arrays, strings, etc.):

```javascript
for (variable of iterable) {
  // code
}
```

### Examples
```javascript
// Iterate over array
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry

// Iterate over string
for (let char of "Hello") {
  console.log(char);
}
// Output: H, e, l, l, o

// With index
const items = ["a", "b", "c"];
for (let [index, item] of items.entries()) {
  console.log(`${index}: ${item}`);
}

// Destructure in for...of
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
for (let { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}
```

---

## Loop Control

### break Statement
Exits the loop entirely:
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1, 2, 3, 4
```

### continue Statement
Skips to next iteration:
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5 (3 is skipped)
```

### Labels (Advanced)
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

## Array Methods Instead of Loops

Modern JavaScript prefers array methods over traditional loops:

### forEach
```javascript
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});
```

### map
```javascript
const doubled = [1, 2, 3].map(num => num * 2);
// [2, 4, 6]
```

### filter
```javascript
const evens = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
// [2, 4]
```

### reduce
```javascript
const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
// 10
```

---

## Best Practices

### 1. Choose the Right Loop
```javascript
// Array iteration - prefer for...of or array methods
const items = [1, 2, 3];
for (let item of items) { ... }      // Good
items.forEach(item => { ... });      // Also good

// Object iteration - use for...in
const obj = { a: 1, b: 2 };
for (let key in obj) { ... }         // Correct

// Known iteration count - use for
for (let i = 0; i < 10; i++) { ... }  // Appropriate
```

### 2. Avoid Infinite Loops
```javascript
// Bad - infinite loop!
for (let i = 1; i > 0; i++) { ... }

// Bad - never updates
while (true) {
  console.log("Help!");
}

// Good - has exit condition
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
```

### 3. Use const for Loop Variables When Appropriate
```javascript
// Modern way - i doesn't change (the value changes)
for (const i = 0; i < 5; i++) { ... }

// Traditional way - i is reassigned
for (let i = 0; i < 5; i++) { ... }
```

### 4. Cache Length for Performance
```javascript
const arr = [1, 2, 3, 4, 5];

// Slower - recalculates length each iteration
for (let i = 0; i < arr.length; i++) { ... }

// Faster - caches length
for (let i = 0, len = arr.length; i < len; i++) { ... }
```

### 5. Prefer Modern Methods When Appropriate
```javascript
// Traditional loop for side effects
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Modern alternatives
items.forEach(console.log);              // Simple
items.map(item => item.name);            // Transform
items.filter(item => item.active);        // Filter
```

---

## Loop Comparison Table

| Loop | Use Case | Example |
|------|----------|---------|
| `for` | Known iteration count | Loop 10 times |
| `while` | Unknown iteration count | Until condition met |
| `do...while` | Execute at least once | Menu, validation |
| `for...in` | Object properties | Iterate object keys |
| `for...of` | Iterable items | Arrays, strings |
| `forEach` | Array iteration | Each array element |

---

## Quick Reference

```javascript
// for loop
for (let i = 0; i < 5; i++) { ... }

// while loop
while (condition) { ... }

// do...while
do { ... } while (condition);

// for...in (objects)
for (let key in obj) { ... }

// for...of (arrays)
for (let item of arr) { ... }

// control
break;      // Exit loop
continue;   // Next iteration
```

---

## What's Next?

- [Functions](./functions.md) - Learn to create reusable code blocks
- [Examples](../examples/fundamentals/loops.js) - See loops in action
- [Exercises](../exercises/fundamentals/loops.md) - Practice with exercises
