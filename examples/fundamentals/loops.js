// =============================================================================
// LOOPS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// for Loop
// -----------------------------------------------------------------------------

// Count 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Count backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Even numbers
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Iterate over array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// -----------------------------------------------------------------------------
// while Loop
// -----------------------------------------------------------------------------

// Simple counter
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Find first element
const numbers = [3, 7, 2, 9, 5];
let i = 0;
while (numbers[i] < 5) {
  i++;
}
console.log(`First number >= 5 is at index ${i}: ${numbers[i]}`);

// -----------------------------------------------------------------------------
// do...while Loop
// -----------------------------------------------------------------------------

// Always runs at least once
let input = "";
do {
  input = prompt("Enter 'quit' to exit:");
} while (input !== "quit");

// Random until 7
let random;
do {
  random = Math.floor(Math.random() * 10);
  console.log(random);
} while (random !== 7);

// -----------------------------------------------------------------------------
// for...in Loop
// -----------------------------------------------------------------------------

// Iterate over object
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Iterate over array indices (not recommended)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`${index}: ${colors[index]}`);
}

// -----------------------------------------------------------------------------
// for...of Loop
// -----------------------------------------------------------------------------

// Iterate over array
const fruits2 = ["apple", "banana", "cherry"];
for (let fruit of fruits2) {
  console.log(fruit);
}

// Iterate over string
for (let char of "Hello") {
  console.log(char);
}

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

// -----------------------------------------------------------------------------
// Loop Control
// -----------------------------------------------------------------------------

// break - exit loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1, 2, 3, 4

// continue - skip iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5

// Labels
outerLoop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}

// -----------------------------------------------------------------------------
// Array Methods (Modern Alternative)
// -----------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// map
const doubled = nums.map(num => num * 2);

// filter
const evens = nums.filter(num => num % 2 === 0);

// reduce
const sum = nums.reduce((acc, num) => acc + num, 0);

// find
const found = nums.find(num => num > 3);

// some
const hasEven = nums.some(num => num % 2 === 0);

// every
const allPositive = nums.every(num => num > 0);

// -----------------------------------------------------------------------------
// Performance Tips
// -----------------------------------------------------------------------------

// Cache length
const arr = [1, 2, 3, 4, 5];
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// -----------------------------------------------------------------------------
// Common Patterns
// -----------------------------------------------------------------------------

// Sum array
const numbers2 = [1, 2, 3, 4, 5];
let total = 0;
for (let num of numbers2) {
  total += num;
}
console.log("Sum:", total);

// Find max
const nums3 = [5, 2, 8, 1, 9];
let max = nums3[0];
for (let num of nums3) {
  if (num > max) max = num;
}
console.log("Max:", max);

// Build string
const words = ["Hello", "World", "!"];
let sentence = "";
for (let word of words) {
  sentence += word + " ";
}
console.log(sentence.trim());
