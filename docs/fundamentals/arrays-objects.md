# Arrays and Objects in JavaScript

## Table of Contents
1. [Arrays](#arrays)
2. [Array Methods](#array-methods)
3. [Objects](#objects)
4. [Object Methods](#object-methods)
5. [Destructuring](#destructuring)
6. [Spread and Rest](#spread-and-rest)
7. [JSON](#json)
8. [Best Practices](#best-practices)

---

## Arrays

Ordered collections of values:

### Creating Arrays
```javascript
// Array literal (preferred)
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, { name: "obj" }];

// Array constructor (rarely used)
const arr = new Array(1, 2, 3); // [1, 2, 3]
const empty = new Array(3); // [empty × 3] - creates sparse array

// Array.of (creates array from arguments)
const arr = Array.of(1, 2, 3); // [1, 2, 3]
```

### Accessing Elements
```javascript
const fruits = ["apple", "banana", "cherry"];

fruits[0];        // "apple" (first element)
fruits[2];        // "cherry" (third element)
fruits[fruits.length - 1]; // "cherry" (last element)
fruits[10];       // undefined (out of bounds)
```

### Modifying Arrays
```javascript
const arr = [1, 2, 3];

// Add elements
arr.push(4);          // [1, 2, 3, 4] - add to end
arr.unshift(0);        // [0, 1, 2, 3, 4] - add to start

// Remove elements
arr.pop();            // removes last, returns 4
arr.shift();          // removes first, returns 0

// Splice (add/remove at position)
arr.splice(1, 1);     // remove 1 element at index 1
arr.splice(1, 0, 99); // insert 99 at index 1

// Direct assignment
arr[0] = "changed";   // [changed, 2, 3]
```

### Array Properties
```javascript
const arr = [1, 2, 3];
arr.length;           // 3
Array.isArray(arr);   // true
```

---

## Array Methods

### Iteration Methods

#### forEach
```javascript
const nums = [1, 2, 3];
nums.forEach((num, index, array) => {
  console.log(`${index}: ${num}`);
});
// 0: 1
// 1: 2
// 2: 3
```

#### map - Transform
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);     // [2, 4, 6]
const strings = nums.map(n => n.toString()); // ["1", "2", "3"]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const names = users.map(user => user.name); // ["Alice", "Bob"]
```

#### filter - Select
```javascript
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);  // [2, 4]
const greaterThan2 = nums.filter(n => n > 2); // [3, 4, 5]

const users = [
  { name: "Alice", admin: true },
  { name: "Bob", admin: false }
];
const admins = users.filter(u => u.admin); // [Alice's object]
```

#### reduce - Accumulate
```javascript
const nums = [1, 2, 3, 4];
nums.reduce((acc, num) => acc + num, 0);     // 10

// Find sum
const sum = nums.reduce((total, n) => total + n, 0);

// Find max
const max = nums.reduce((a, b) => a > b ? a : b, nums[0]);

// Group by property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];
const grouped = users.reduce((acc, user) => {
  if (!acc[user.age]) acc[user.age] = [];
  acc[user.age].push(user.name);
  return acc;
}, {});
// { 25: ["Alice", "Bob"], 30: ["Charlie"] }
```

#### find - First Match
```javascript
const nums = [1, 2, 3, 4, 5];
nums.find(n => n > 3);         // 4
nums.find(n => n > 10);        // undefined

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
users.find(u => u.id === 1);   // { id: 1, name: "Alice" }
```

#### findIndex - Index of Match
```javascript
const nums = [5, 12, 8, 130, 44];
nums.findIndex(n => n > 10);   // 1 (index of 12)
nums.findIndex(n => n > 1000); // -1 (not found)
```

#### some - Any Match
```javascript
const nums = [1, 2, 3, 4, 5];
nums.some(n => n > 4);         // true
nums.some(n => n > 10);        // false
```

#### every - All Match
```javascript
const nums = [1, 2, 3, 4, 5];
nums.every(n => n > 0);        // true
nums.every(n => n > 3);        // false
```

### Searching Methods

```javascript
const fruits = ["apple", "banana", "cherry", "banana"];

fruits.indexOf("banana");     // 1
fruits.indexOf("grape");      // -1 (not found)
fruits.lastIndexOf("banana"); // 3
fruits.includes("apple");     // true
fruits.includes("grape");     // false
```

### Sorting Methods

```javascript
const nums = [3, 1, 4, 1, 5];
nums.sort();                  // [1, 1, 3, 4, 5] (as strings!)
nums.sort((a, b) => a - b);    // [1, 1, 3, 4, 5] (numeric)
nums.sort((a, b) => b - a);    // [5, 4, 3, 1, 1] (descending)

const users = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 }
];
users.sort((a, b) => a.name.localeCompare(b.name)); // By name
users.sort((a, b) => a.age - b.age);                // By age
```

### Transformation Methods

```javascript
const arr = [1, 2, 3];

arr.concat([4, 5]);           // [1, 2, 3, 4, 5] (doesn't mutate)
arr.slice(1, 2);              // [2] (doesn't mutate)
arr.join("-");                // "1-2-3"
arr.flat();                   // Flattens nested arrays
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## Objects

Key-value pair collections:

### Creating Objects
```javascript
// Object literal (preferred)
const user = {
  name: "Alice",
  age: 30,
  isAdmin: false
};

// Object constructor
const obj = new Object();

// Object.create()
const proto = { greeting: "Hello" };
const child = Object.create(proto);
```

### Accessing Properties
```javascript
const user = { name: "Alice", age: 30 };

// Dot notation
user.name;        // "Alice"

// Bracket notation
user["name"];     // "Alice"
const key = "age";
user[key];        // 30

// Dynamic property access
const getUserProp = (key) => user[key];
```

### Modifying Objects
```javascript
const user = { name: "Alice" };

// Add property
user.age = 30;

// Update property
user.name = "Bob";

// Delete property
delete user.age;

// Check property exists
"name" in user;         // true
user.hasOwnProperty("name"); // true
```

### Object Shorthand
```javascript
const name = "Alice";
const age = 30;

// Property shorthand
const user = { name, age }; // { name: "Alice", age: 30 }

// Method shorthand
const user = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
```

---

## Object Methods

### Object.keys/values/entries
```javascript
const user = { name: "Alice", age: 30, city: "NYC" };

Object.keys(user);    // ["name", "age", "city"]
Object.values(user);  // ["Alice", 30, "NYC"]
Object.entries(user); // [["name", "Alice"], ["age", 30], ["city", "NYC"]]

// Iterate
for (let key of Object.keys(user)) { ... }
for (let value of Object.values(user)) { ... }
for (let [key, value] of Object.entries(user)) { ... }
```

### Object.assign
```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source); // { a: 1, b: 2, c: 3 }

// Clone object
const clone = Object.assign({}, user);

// Merge
const merged = Object.assign({}, obj1, obj2);
```

### Object.freeze/seal
```javascript
const user = { name: "Alice" };

Object.freeze(user);  // Cannot modify
Object.seal(user);    // Can modify existing, can't add/delete
```

---

## Destructuring

### Array Destructuring
```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;     // first="red", second="green"
const [first, , third] = colors;   // Skip second
const [a, ...rest] = colors;       // a="red", rest=["green", "blue"]
const [x = 1, y = 2] = ["only"];    // Default values

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1
```

### Object Destructuring
```javascript
const user = { name: "Alice", age: 30, city: "NYC" };

const { name, age } = user;         // name="Alice", age=30
const { name: userName } = user;    // Rename: userName="Alice"
const { name, isAdmin = false } = user; // Default value
const { name, ...others } = user;   // others={age:30, city:"NYC"}

// In function parameters
function greet({ name, age }) {
  return `Hi, I'm ${name} and I'm ${age}`;
}
greet(user); // "Hi, I'm Alice and I'm 30"

// Nested destructuring
const person = {
  name: "Alice",
  address: { city: "NYC", zip: "10001" }
};
const { address: { city } } = person; // city="NYC"
```

---

## Spread and Rest

### Spread Operator (...)
```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];             // Clone array

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
const copy = { ...obj1 };            // Clone object

// Function arguments
const nums = [1, 2, 3];
Math.max(...nums);                   // 3

// String to array
[..."hello"];                        // ["h", "e", "l", "l", "o"]
```

### Rest Parameters (...)
```javascript
// In function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring with rest
const [first, ...rest] = [1, 2, 3, 4]; // first=1, rest=[2,3,4]

const { name, ...others } = { name: "Alice", age: 30, city: "NYC" };
// name="Alice", others={age:30, city:"NYC"}
```

---

## JSON

JavaScript Object Notation - data format for APIs:

### JSON Methods
```javascript
const user = { name: "Alice", age: 30 };

// Object to JSON string
const jsonString = JSON.stringify(user); 
// '{"name":"Alice","age":30}'

const jsonPretty = JSON.stringify(user, null, 2);
// {
//   "name": "Alice",
//   "age": 30
// }

// JSON string to object
const parsed = JSON.parse(jsonString);
// { name: "Alice", age: 30 }
```

### JSON Data Types
- Strings, numbers, booleans, null, arrays, objects
- No functions, undefined, symbols

---

## Best Practices

### 1. Prefer const with Arrays/Objects
```javascript
// Array - const prevents reassignment, not mutation
const arr = [1, 2, 3];
arr.push(4);     // OK - mutates the array
arr = [1, 2];     // Error - reassignment blocked

// Object - same principle
const obj = { a: 1 };
obj.b = 2;        // OK - adds property
obj = { a: 1 };   // Error - reassignment blocked
```

### 2. Use Descriptive Array/Object Names
```javascript
// Bad
const data = [1, 2, 3];
const item = users[0];

// Good
const temperatures = [32, 45, 28];
const firstUser = users[0];
```

### 3. Clone Arrays/Objects When Needed
```javascript
// Array - shallow clone
const original = [1, 2, 3];
const clone = [...original];     // Spread
const clone = original.slice();   // slice
const clone = Array.from(original);

// Object - shallow clone
const original = { a: 1, b: 2 };
const clone = { ...original };   // Spread
const clone = Object.assign({}, original);

// Deep clone (for nested structures)
const deepClone = JSON.parse(JSON.stringify(original));
```

### 4. Use Map/Filter/Reduce Over Traditional Loops
```javascript
// Traditional
const doubled = [];
for (let n of nums) {
  doubled.push(n * 2);
}

// Modern - more expressive
const doubled = nums.map(n => n * 2);
```

### 5. Avoid Sparse Arrays
```javascript
// Bad
const sparse = new Array(3);
sparse[0] = 1;
sparse[2] = 3; // Gap at index 1
sparse.length; // 3

// Good
const arr = [1, undefined, 3]; // Explicit
```

---

## Quick Reference

```javascript
// Arrays
const arr = [1, 2, 3];
arr.push(4);       // Add to end
arr.pop();         // Remove from end
arr.unshift(0);    // Add to start
arr.shift();       // Remove from start
arr.splice(i, n);   // Remove n elements at i
arr.slice(start, end); // Extract portion

// Iteration
arr.forEach(fn);   // Execute for each
arr.map(fn);       // Transform
arr.filter(fn);     // Select
arr.reduce(fn, init); // Accumulate
arr.find(fn);      // First match
arr.some(fn);      // Any match
arr.every(fn);     // All match

// Objects
const obj = { a: 1, b: 2 };
obj.c = 3;         // Add property
delete obj.a;      // Remove property
Object.keys(obj);  // Get keys
Object.values(obj);// Get values
Object.entries(obj); // Get [k,v] pairs

// Destructuring
const [a, b] = [1, 2];
const { x, y } = { x: 1, y: 2 };

// Spread
[...arr1, ...arr2];
{ ...obj1, ...obj2 };

// JSON
JSON.stringify(obj);
JSON.parse(str);
```

---

## What's Next?

- [DOM Manipulation](../intermediate/dom-manipulation.md) - Learn to manipulate web pages
- [Examples](../examples/fundamentals/arrays-objects.js) - See arrays/objects in action
- [Exercises](../exercises/fundamentals/arrays-objects.md) - Practice with exercises
