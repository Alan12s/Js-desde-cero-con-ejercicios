// =============================================================================
// SOLUTIONS - Conditionals
// =============================================================================

// Exercise 1: isEven
function isEven(n) {
  return n % 2 === 0;
}

// Exercise 2: Grade System
function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// Exercise 3: Traffic Light
function getAction(lightColor) {
  switch (lightColor) {
    case "green": return "Go";
    case "yellow": return "Slow down";
    case "red": return "Stop";
    default: return "Invalid light";
  }
}

// Exercise 4: FizzBuzz
function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

// Exercise 5: Ternary Conversion
const status = age >= 18 ? "adult" : "minor";

// Exercise 6: Complex Condition
function canAccess(user, document) {
  return user.isLoggedIn && (user.isAdmin || user.hasPermission(document));
}

// Exercise 7: BMI Calculator
function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
