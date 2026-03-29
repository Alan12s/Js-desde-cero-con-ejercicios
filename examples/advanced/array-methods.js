// =============================================================================
// ARRAY METHODS - Examples
// =============================================================================

const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 25, active: true }
];

// forEach
numbers.forEach((n, i) => console.log(`${i}: ${n}`));

// map
const doubled = numbers.map(n => n * 2);
const names = users.map(u => u.name);

// filter
const evens = numbers.filter(n => n % 2 === 0);
const activeUsers = users.filter(u => u.active);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
const max = numbers.reduce((a, b) => a > b ? a : b);

// find
const firstEven = numbers.find(n => n % 2 === 0);
const foundUser = users.find(u => u.name === "Alice");

// findIndex
const evenIndex = numbers.findIndex(n => n % 2 === 0);

// some/every
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);

// flat/flatMap
[[1, 2], [3, 4]].flat();           // [1, 2, 3, 4]
[[1, 2], [3, 4]].flatMap(x => x);  // [1, 2, 3, 4]

// sort
[3, 1, 4, 1, 5].sort((a, b) => a - b); // Ascending
[3, 1, 4, 1, 5].sort((a, b) => b - a); // Descending

// Group by
users.reduce((acc, u) => {
  acc[u.age] = acc[u.age] || [];
  acc[u.age].push(u);
  return acc;
}, {});
