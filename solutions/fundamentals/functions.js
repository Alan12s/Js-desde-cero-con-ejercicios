// =============================================================================
// SOLUTIONS - Functions
// =============================================================================

// Exercise 1: Basic Functions
function greet(name) { return `Hello, ${name}!`; }
function add(a, b) { return a + b; }
function isAdult(age) { return age >= 18; }

// Exercise 2: Default Parameters
function createGreeting(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Exercise 3: Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

// Exercise 4: Arrow Functions
const double = n => n * 2;
const greet = name => "Hello, " + name;
const isEven = n => n % 2 === 0;

// Exercise 5: Closure Counter
function makeCounter(start = 0, step = 1) {
  let count = start;
  return function() {
    count += step;
    return count;
  };
}

// Exercise 6: Higher-Order Function
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

// Exercise 7: Pure Function
function updateUser(user, updates) {
  return { ...user, ...updates };
}

// Exercise 8: IIFE
const area = (function() {
  const r = 5;
  return Math.PI * r * r;
})();
console.log(area);
