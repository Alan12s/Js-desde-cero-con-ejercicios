# Array Methods in JavaScript

## Table of Contents
1. [Iteration Methods](#iteration-methods)
2. [Transformation Methods](#transformation-methods)
3. [Search Methods](#search-methods)
4. [Sorting Methods](#sorting-methods)
5. [Testing Methods](#testing-methods)
6. [Practical Examples](#practical-examples)

---

## Iteration Methods

### forEach
Execute a function for each element:
```javascript
const numbers = [1, 2, 3];

numbers.forEach((num, index, array) => {
  console.log(`${index}: ${num}`);
});
// 0: 1
// 1: 2
// 2: 3

// Returns undefined - for side effects only
const result = numbers.forEach(n => n * 2);
console.log(result); // undefined
```

### for...of
Modern iteration over iterables:
```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

// With index
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
```

---

## Transformation Methods

### map
Transform each element, return new array:
```javascript
const numbers = [1, 2, 3];

// Basic
const doubled = numbers.map(n => n * 2);
// [2, 4, 6]

// Extract property
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];
const names = users.map(user => user.name);
// ["Alice", "Bob"]

// Transform to objects
const nums = [1, 2, 3];
const objects = nums.map((n, i) => ({ id: i, value: n }));
// [{ id: 0, value: 1 }, { id: 1, value: 2 }, { id: 2, value: 3 }]

// Chain with filter
const result = [1, 2, 3, 4, 5]
  .map(n => n * 2)
  .filter(n => n > 4);
// [6, 8, 10]
```

### filter
Keep elements that pass the test:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Even numbers
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// Objects
const users = [
  { name: "Alice", admin: true },
  { name: "Bob", admin: false }
];
const admins = users.filter(u => u.admin);
// [{ name: "Alice", admin: true }]

// Multiple conditions
const result = [1, 2, 3, 4, 5].filter(n => n > 2 && n < 5);
// [3, 4]
```

### reduce
Accumulate to single value:
```javascript
const numbers = [1, 2, 3, 4];

// Sum
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10

// Product
const product = numbers.reduce((acc, n) => acc * n, 1);
// 24

// Max value
const max = numbers.reduce((acc, n) => n > acc ? n : acc, numbers[0]);
// 4

// With index and array
const indexedSum = numbers.reduce((acc, n, i, arr) => {
  console.log(`Index ${i}: ${n}, Sum so far: ${acc}`);
  return acc + n;
}, 0);
```

### flat
Flatten nested arrays:
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];

nested.flat();           // [1, 2, 3, 4, [5, 6]]
nested.flat(2);         // [1, 2, 3, 4, 5, 6]
nested.flat(Infinity);  // Fully flatten

// map + flat
const result = nested.flatMap(arr => arr.map(n => n * 2));
// [2, 4, 6, 8, 10, 12]
```

### flatMap
map + flat in one pass:
```javascript
const sentences = ["Hello world", "How are you"];

const words = sentences.flatMap(s => s.split(" "));
// ["Hello", "world", "How", "are", "you"]

// vs separate
const words2 = sentences.map(s => s.split(" ")).flat();
// Same result, but flatMap is more efficient
```

---

## Search Methods

### find
Return first matching element:
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const user = users.find(u => u.id === 1);
// { id: 1, name: "Alice" }

const notFound = users.find(u => u.id === 999);
// undefined
```

### findIndex
Return index of first match:
```javascript
const numbers = [5, 12, 8, 130, 44];

const index = numbers.findIndex(n => n > 10);
// 1 (index of 12)

// Not found returns -1
const notFound = numbers.findIndex(n => n > 1000);
// -1
```

### indexOf / lastIndexOf
Find element index (primitive values):
```javascript
const fruits = ["apple", "banana", "cherry", "banana"];

fruits.indexOf("banana");     // 1
fruits.lastIndexOf("banana"); // 3
fruits.indexOf("grape");      // -1
```

### includes
Check if array contains value:
```javascript
const nums = [1, 2, 3];

nums.includes(2);      // true
nums.includes(5);     // false
nums.includes(2, 3);  // false (start from index 3)
```

---

## Sorting Methods

### sort
Sort array in place:
```javascript
const numbers = [3, 1, 4, 1, 5];

// Default - converts to strings
numbers.sort();
// [1, 1, 3, 4, 5]

// Numeric sort
numbers.sort((a, b) => a - b);
// [1, 1, 3, 4, 5] (ascending)

numbers.sort((a, b) => b - a);
// [5, 4, 3, 1, 1] (descending)

// Objects
const users = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 }
];

users.sort((a, b) => a.name.localeCompare(b.name));
// Sorted by name

users.sort((a, b) => a.age - b.age);
// Sorted by age
```

### reverse
Reverse array order:
```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

## Testing Methods

### some
Check if ANY element passes test:
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.some(n => n > 4);    // true (5 > 4)
numbers.some(n => n > 10);   // false
numbers.some(n => n === 3);  // true
```

### every
Check if ALL elements pass test:
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.every(n => n > 0);   // true (all positive)
numbers.every(n => n > 3);   // false (1, 2, 3 are not)
numbers.every(n => n < 10);  // true
```

---

## Practical Examples

### Group By
```javascript
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

const grouped = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user);
  return acc;
}, {});
// { admin: [Alice, Charlie], user: [Bob] }
```

### Count By
```javascript
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, cherry: 1 }
```

### Unique Values
```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4];

[...new Set(numbers)];              // [1, 2, 3, 4]
numbers.filter((n, i, arr) => arr.indexOf(n) === i); // [1, 2, 3, 4]
```

### Chaining Methods
```javascript
const sales = [
  { product: "Phone", price: 500, category: "electronics" },
  { product: "Shirt", price: 30, category: "clothing" },
  { product: "Laptop", price: 1000, category: "electronics" },
  { product: "Pants", price: 50, category: "clothing" }
];

const result = sales
  .filter(s => s.category === "electronics")  // Only electronics
  .map(s => s.price * 0.9)                    // 10% discount
  .reduce((sum, price) => sum + price, 0);   // Total

console.log(result); // 1350 (900 + 450)
```

### Find with Cascade
```javascript
const orders = [
  { id: 1, status: "delivered", items: ["book", "pen"] },
  { id: 2, status: "pending", items: ["notebook"] },
  { id: 3, status: "delivered", items: ["shirt"] }
];

// Find pending order with more than one item
const order = orders.find(
  o => o.status === "pending" && o.items.length > 1
);
// undefined (no match)

// Find delivered order
const delivered = orders.find(o => o.status === "delivered");
// { id: 1, status: "delivered", items: ["book", "pen"] }
```

### Partition Array
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const partition = (arr, fn) =>
  arr.reduce(
    (acc, val) => {
      acc[fn(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );

const [evens, odds] = partition(numbers, n => n % 2 === 0);
// evens: [2, 4, 6]
// odds: [1, 3, 5]
```

---

## Quick Reference

```javascript
// Iteration
arr.forEach(fn);           // Execute for each
for (const item of arr)   // Modern loop

// Transform
arr.map(fn);               // Transform each
arr.filter(fn);            // Keep matches
arr.reduce(fn, init);      // Accumulate
arr.flat(depth);           // Flatten
arr.flatMap(fn);           // Map + flatten

// Search
arr.find(fn);              // First match
arr.findIndex(fn);         // Index of match
arr.indexOf(val);          // Index of value
arr.includes(val);         // Contains value

// Sort
arr.sort(compareFn);       // Sort in place
arr.reverse();             // Reverse in place

// Test
arr.some(fn);              // Any match?
arr.every(fn);             // All match?
```

---

## What's Next?

- [Clean Code](./clean-code.md) - Write maintainable JavaScript
- [Examples](../examples/advanced/array-methods.js) - See array methods in action
- [Exercises](../exercises/advanced/array-methods.md) - Practice with exercises
