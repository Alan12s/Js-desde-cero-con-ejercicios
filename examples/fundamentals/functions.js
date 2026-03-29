// =============================================================================
// FUNCTIONS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Function Declaration
// -----------------------------------------------------------------------------

// Simple function
function greet() {
  return "Hello, World!";
}

// Function with parameters
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Multiple parameters
function add(a, b) {
  return a + b;
}

// -----------------------------------------------------------------------------
// Function Expression
// -----------------------------------------------------------------------------

const greetExpr = function() {
  return "Hello!";
};

const addExpr = function(a, b) {
  return a + b;
};

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

// -----------------------------------------------------------------------------
// Arrow Functions
// -----------------------------------------------------------------------------

// Full syntax
const addArrow = (a, b) => {
  return a + b;
};

// Single expression (implicit return)
const addArrowShort = (a, b) => a + b;

// Single parameter - parentheses optional
const double = x => x * 2;
const greetArrow = name => `Hello, ${name}!`;

// No parameters
const getRandom = () => Math.random();

// Multi-line
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};

// -----------------------------------------------------------------------------
// Default Parameters
// -----------------------------------------------------------------------------

function greetWithDefault(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

greetWithDefault();              // "Hello, Guest!"
greetWithDefault("Alice");       // "Hello, Alice!"
greetWithDefault("Bob", "Hi");   // "Hi, Bob!"

// -----------------------------------------------------------------------------
// Rest Parameters
// -----------------------------------------------------------------------------

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3);      // 6
sum(1, 2, 3, 4, 5); // 15

function logAll(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logAll("a", "b", "c", "d"); // First: a, Rest: ["b", "c", "d"]

// -----------------------------------------------------------------------------
// Return Values
// -----------------------------------------------------------------------------

// Return object
function getStats(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    avg: numbers.reduce((a, b) => a + b) / numbers.length
  };
}

const { min, max, avg } = getStats([1, 2, 3, 4, 5]);

// Return array
function getMinMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}
const [minimum, maximum] = getMinMax([1, 2, 3, 4, 5]);

// -----------------------------------------------------------------------------
// Higher-Order Functions
// -----------------------------------------------------------------------------

// Function as parameter
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

repeat(() => console.log("Hello!"), 3);

// Function returning function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15

// -----------------------------------------------------------------------------
// Closures
// -----------------------------------------------------------------------------

function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// -----------------------------------------------------------------------------
// IIFE (Immediately Invoked Function Expression)
// -----------------------------------------------------------------------------

const result = (function() {
  const privateVar = "secret";
  return privateVar + "!";
})();

// With parameters
const calculated = (function(a, b) {
  return a * b;
})(5, 10);

// -----------------------------------------------------------------------------
// this in Functions
// -----------------------------------------------------------------------------

// Regular function - own 'this'
const person1 = {
  name: "Alice",
  greet: function() {
    return `Hi, I'm ${this.name}`;
  }
};

// Arrow function - inherits 'this'
const person2 = {
  name: "Bob",
  greet: () => {
    return `Hi, I'm ${this.name}`; // 'this' is NOT person2
  }
};

// -----------------------------------------------------------------------------
// Pure Functions
// -----------------------------------------------------------------------------

// Pure - same input always gives same output
function add(a, b) {
  return a + b;
}

// Impure - side effects
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}

// Pure version
function addToTotalPure(currentTotal, value) {
  return currentTotal + value;
}
