// =============================================================================
// SOLUTIONS - Operators
// =============================================================================

// Exercise 1: Calculator
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero",
  modulo: (a, b) => a % b,
  power: (base, exp) => Math.pow(base, exp)
};

// Exercise 2: Compare
function compare(a, b) {
  if (a === b) return "equal";
  return a > b ? "greater" : "less";
}

// Exercise 3: Logical Operators
function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense;
}

function isEligibleForDiscount(member, purchaseAmount) {
  return member || purchaseAmount > 100;
}

// Exercise 4: Temperature Converter
const celsiusToFahrenheit = c => c * 9/5 + 32;
const fahrenheitToCelsius = f => (f - 32) * 5/9;

// Exercise 5: Grade Calculator
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// Exercise 6: Operator Precedence
let x = 5, y = 10, z = 2;
// x + y * z = 5 + 20 = 25
// (x + y) * z = 15 * 2 = 30
// x++ + y = 5 + 10 = 15 (x becomes 6)
// ++x + y = 6 + 10 = 16 (x becomes 6)
