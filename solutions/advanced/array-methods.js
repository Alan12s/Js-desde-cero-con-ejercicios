// =============================================================================
// SOLUTIONS - Array Methods
// =============================================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { name: "Alice", age: 25, active: true, category: "electronics" },
  { name: "Bob", age: 30, active: false, category: "electronics" },
  { name: "Charlie", age: 25, active: true, category: "clothing" }
];

// forEach
numbers.forEach((n, i) => console.log(`${i}: ${n}`));

// map
const doubled = numbers.map(n => n * 2);
const names = users.map(u => u.name);

// filter
const evens = numbers.filter(n => n % 2 === 0);
const activeUsers = users.filter(u => u.active);
const electronics = users.filter(u => u.category === "electronics");

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
const max = numbers.reduce((a, b) => a > b ? a : b);
const product = numbers.reduce((acc, n) => acc * n, 1);

// find
const firstEven = numbers.find(n => n % 2 === 0);
const alice = users.find(u => u.name === "Alice");

// findIndex
const evenIndex = numbers.findIndex(n => n % 2 === 0);

// some/every
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);
const allActive = users.every(u => u.active);

// flat/flatMap
[[1, 2], [3, 4]].flat();              // [1, 2, 3, 4]
[[1, 2], [3, 4]].flatMap(x => x);     // [1, 2, 3, 4]
["Hello world", "How are you"].flatMap(s => s.split(" "));

// sort
[3, 1, 4, 1, 5].sort((a, b) => a - b); // ascending
[3, 1, 4, 1, 5].sort((a, b) => b - a); // descending
users.sort((a, b) => a.age - b.age);

// Group by
const groupedByAge = users.reduce((acc, u) => {
  acc[u.age] = acc[u.age] || [];
  acc[u.age].push(u);
  return acc;
}, {});

// Exercise 3: Products
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Shirt", price: 30, category: "clothing" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Pants", price: 50, category: "clothing" }
];

const electronics2 = products.filter(p => p.category === "electronics");
const productNames = products.map(p => p.name);
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max);
const groupedByCategory = products.reduce((acc, p) => {
  acc[p.category] = acc[p.category] || [];
  acc[p.category].push(p);
  return acc;
}, {});

// Exercise 4: Chain
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(n => n % 2 === 0)
  .map(n => n * 2); // [4, 8, 12, 16, 20]

// Custom filter/map
function myFilter(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) result.push(item);
  }
  return result;
}

function myMap(arr, transform) {
  const result = [];
  for (const item of arr) {
    result.push(transform(item));
  }
  return result;
}
