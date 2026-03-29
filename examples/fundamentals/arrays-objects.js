// =============================================================================
// ARRAYS AND OBJECTS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Creating Arrays
// -----------------------------------------------------------------------------

const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, { name: "obj" }];

// Array constructor (rarely used)
const arr = new Array(1, 2, 3);
const empty = new Array(3); // [empty x 3]

// Array.of
const arr2 = Array.of(1, 2, 3);

// -----------------------------------------------------------------------------
// Accessing Elements
// -----------------------------------------------------------------------------

const arr3 = [10, 20, 30];
arr3[0];              // 10 (first)
arr3[2];              // 30 (third)
arr3[arr3.length - 1]; // 30 (last)
arr3[10];             // undefined (out of bounds)

// -----------------------------------------------------------------------------
// Modifying Arrays
// -----------------------------------------------------------------------------

const arr4 = [1, 2, 3];

// Add elements
arr4.push(4);          // [1, 2, 3, 4] - end
arr4.unshift(0);       // [0, 1, 2, 3, 4] - start

// Remove elements
arr4.pop();            // removes last, returns it
arr4.shift();          // removes first, returns it

// Splice
arr4.splice(1, 1);     // remove 1 at index 1
arr4.splice(1, 0, 99); // insert 99 at index 1

// Direct assignment
arr4[0] = "changed";

// -----------------------------------------------------------------------------
// Array Methods - Iteration
// -----------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// map - transform
const doubled = nums.map(n => n * 2);
const strings = nums.map(n => n.toString());
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const names = users.map(user => user.name);

// filter - select
const evens = nums.filter(n => n % 2 === 0);
const adults = users.filter(u => u.age >= 18);

// reduce - accumulate
const sum = nums.reduce((acc, num) => acc + num, 0);
const max = nums.reduce((a, b) => a > b ? a : b, nums[0]);

// find - first match
const firstEven = nums.find(n => n % 2 === 0);
const foundUser = users.find(u => u.name === "Alice");

// findIndex
const firstEvenIndex = nums.findIndex(n => n % 2 === 0);

// some - any match
const hasEven = nums.some(n => n % 2 === 0);
const hasAdult = users.some(u => u.age >= 18);

// every - all match
const allPositive = nums.every(n => n > 0);

// -----------------------------------------------------------------------------
// Array Methods - Search
// -----------------------------------------------------------------------------

const colors = ["red", "green", "blue", "green"];
colors.indexOf("green");      // 1
colors.lastIndexOf("green");   // 3
colors.includes("blue");       // true
colors.includes("yellow");    // false

// -----------------------------------------------------------------------------
// Array Methods - Sort
// -----------------------------------------------------------------------------

const unsorted = [3, 1, 4, 1, 5];
unsorted.sort();                  // As strings: [1, 1, 3, 4, 5]
unsorted.sort((a, b) => a - b);  // Numeric ascending: [1, 1, 3, 4, 5]
unsorted.sort((a, b) => b - a);  // Numeric descending: [5, 4, 3, 1, 1]

const users2 = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 }
];
users2.sort((a, b) => a.name.localeCompare(b.name)); // By name

// -----------------------------------------------------------------------------
// Array Methods - Transform
// -----------------------------------------------------------------------------

const arr5 = [1, [2, 3], [4, [5, 6]]];
arr5.flat();           // [1, 2, 3, 4, [5, 6]]
arr5.flat(2);          // [1, 2, 3, 4, 5, 6]
arr5.flat(Infinity);   // Fully flatten

const words = ["Hello world", "How are you"];
const allWords = words.flatMap(s => s.split(" "));
// ["Hello", "world", "How", "are", "you"]

// -----------------------------------------------------------------------------
// Creating Objects
// -----------------------------------------------------------------------------

const user = {
  name: "Alice",
  age: 30,
  isAdmin: false
};

// Object constructor
const obj = new Object();

// Object.create
const proto = { greeting: "Hello" };
const child = Object.create(proto);

// -----------------------------------------------------------------------------
// Accessing Properties
// -----------------------------------------------------------------------------

const user2 = { name: "Alice", age: 30 };

// Dot notation
user2.name;             // "Alice"

// Bracket notation
user2["name"];          // "Alice"
const key = "age";
user2[key];             // 30

// Check property
"name" in user2;                     // true
user2.hasOwnProperty("name");         // true

// -----------------------------------------------------------------------------
// Modifying Objects
// -----------------------------------------------------------------------------

const user3 = { name: "Alice" };

user3.age = 30;           // Add property
user3.name = "Bob";        // Update property
delete user3.age;         // Delete property

// -----------------------------------------------------------------------------
// Object Shorthand
// -----------------------------------------------------------------------------

const name = "Alice";
const age = 30;

// Property shorthand
const user4 = { name, age }; // { name: "Alice", age: 30 }

// Method shorthand
const user5 = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};

// -----------------------------------------------------------------------------
// Object Methods
// -----------------------------------------------------------------------------

const user6 = { name: "Alice", age: 30, city: "NYC" };

Object.keys(user6);    // ["name", "age", "city"]
Object.values(user6);  // ["Alice", 30, "NYC"]
Object.entries(user6); // [["name", "Alice"], ["age", 30], ["city", "NYC"]]

// Object.assign
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source); // { a: 1, b: 2, c: 3 }

// Clone
const clone = Object.assign({}, user6);
const clone2 = { ...user6 };

// Object.freeze/seal
const frozen = Object.freeze({ a: 1 });
// frozen.a = 2; // Error in strict mode

// -----------------------------------------------------------------------------
// Destructuring
// -----------------------------------------------------------------------------

// Array destructuring
const [first, second] = [1, 2, 3];
const [,, third] = [1, 2, 3];
const [head, ...tail] = [1, 2, 3];

// Object destructuring
const { name: userName, age: userAge } = user6;
const { name, isAdmin = false } = user6;

// Nested
const nested = { outer: { inner: "value" } };
const { outer: { inner } } = nested;

// In function parameters
function greet({ name, age }) {
  return `Hi, I'm ${name}, ${age} years old`;
}

// -----------------------------------------------------------------------------
// Spread Operator
// -----------------------------------------------------------------------------

// Array spread
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const combined = [...arr6, ...arr7];
const copy = [...arr6];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
const objCopy = { ...obj1 };

// Function arguments
Math.max(...[1, 2, 3]);

// -----------------------------------------------------------------------------
// JSON
// -----------------------------------------------------------------------------

const user7 = { name: "Alice", age: 30 };

// Object to JSON
const jsonString = JSON.stringify(user7);
// '{"name":"Alice","age":30}'

const jsonPretty = JSON.stringify(user7, null, 2);
// {
//   "name": "Alice",
//   "age": 30
// }

// JSON to object
const parsed = JSON.parse(jsonString);
// { name: "Alice", age: 30 }
