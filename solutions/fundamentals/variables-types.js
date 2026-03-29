// =============================================================================
// SOLUTIONS - Variables and Types
// =============================================================================

// Exercise 1: Variable Declaration
const myName = "Alice";
let myAge = 25;
const favoriteColor = "blue";

// myName = "Bob"; // Error! const cannot be reassigned
myAge = 26; // OK - let can be reassigned

// Exercise 2: Data Types
function identifyTypes() {
  const values = [
    "Hello", 42, 3.14, true, null, undefined,
    { name: "Alice" }, [1, 2, 3]
  ];
  
  return values.map(v => typeof v);
}

// Exercise 3: Type Conversion
function toString(n) {
  return String(n);
  // or: n + ""
}

function toNumber(str) {
  return Number(str);
  // or: +str
}

function toBoolean(val) {
  return Boolean(val);
  // or: !!val
}

function parseValues() {
  const float = parseFloat("3.14"); // 3.14
  const int = parseInt("42"); // 42
  return { float, int };
}

// Exercise 4: Template Literals
function createBio(name, age, job, city) {
  return `Hi, I'm ${name}, a ${age} year old ${job} living in ${city}!`;
}

// Exercise 5: Calculator State
const calculatorState = {
  currentValue: 0,
  previousValue: 0,
  operator: null
};

function updateCalculator(newValue) {
  calculatorState.currentValue = newValue;
}
