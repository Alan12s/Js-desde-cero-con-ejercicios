// =============================================================================
// SOLUTIONS - Arrays and Objects
// =============================================================================

// Exercise 1: Array Basics
const arr = [1, 2, 3, 4, 5];
arr.push(6);          // [1,2,3,4,5,6]
arr.unshift(0);       // [0,1,2,3,4,5,6]
arr.pop();            // removes 6
arr.shift();          // removes 0
arr.indexOf(3);       // 2
arr.includes(5);     // true

// Exercise 2: Array Methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);      // [2,4,6,8,10]
const doubled = numbers.map(n => n * 2);             // [2,4,6,...]
const sum = numbers.reduce((acc, n) => acc + n, 0); // 55
const firstGT5 = numbers.find(n => n > 5);           // 6

// Exercise 3: Object Basics
const book = { title: "JS Guide", author: "John", year: 2024, isAvailable: true };
book.pages = 300;
book.year = 2025;
book.isAvailable = !book.isAvailable;
delete book.author;

// Exercise 4: Destructuring
const person = { name: "Alice", age: 30, city: "NYC", job: "Developer" };
const colors = ["red", "green", "blue", "yellow"];
const { name, age } = person;
const { job, ...rest } = person;
const [first, , third] = colors;

// Exercise 5: Object Methods
function getUserStats(user) {
  return {
    name: user.name,
    highestScore: Math.max(...user.scores),
    averageScore: user.scores.reduce((a, b) => a + b) / user.scores.length
  };
}

// Exercise 6: Array of Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
const age25 = users.filter(u => u.age === 25);
const names = users.map(u => u.name);
const avgAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;

// Exercise 7: Transform with map
["hello", "world"].map(s => s.toUpperCase());  // ["HELLO", "WORLD"]
[{name: "Alice"}, {name: "Bob"}].map(u => u.name); // ["Alice", "Bob"]
