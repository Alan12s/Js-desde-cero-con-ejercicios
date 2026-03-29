# Conditionals in JavaScript

## Table of Contents
1. [if Statement](#if-statement)
2. [if...else Statement](#ifelse-statement)
3. [if...else if...else](#ifelse-ifelse)
4. [switch Statement](#switch-statement)
5. [Ternary Operator](#ternary-operator)
6. [Nullish Coalescing](#nullish-coalescing)
7. [Logical Operators in Conditionals](#logical-operators-in-conditionals)
8. [Best Practices](#best-practices)

---

## if Statement

The simplest conditional - executes code only if condition is true:

```javascript
if (condition) {
  // Code runs if condition is true
}
```

### Example
```javascript
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}
// Output: "You are an adult"
```

---

## if...else Statement

Executes one block if true, another if false:

```javascript
if (condition) {
  // Code if true
} else {
  // Code if false
}
```

### Example
```javascript
const temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else {
  console.log("It's comfortable");
}
// Output: "It's comfortable"
```

---

## if...else if...else

Handle multiple conditions:

```javascript
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else if (condition3) {
  // Code if condition3 is true
} else {
  // Code if all conditions are false
}
```

### Example
```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: "Grade: B"
```

---

## switch Statement

Alternative to multiple `if...else if` for comparing one value:

```javascript
switch (expression) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  case value3:
    // Code for value3
    break;
  default:
    // Code if no case matches
}
```

### Example
```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular day");
}
// Output: "Start of work week"
```

### Important: The break Statement
```javascript
// Without break - fall through
const color = "red";

switch (color) {
  case "red":
    console.log("Apple");
  case "yellow":
    console.log("Banana");
  case "green":
    console.log("Leaf");
  default:
    console.log("Unknown");
}
// Output: "Apple", "Banana", "Leaf", "Unknown" (falls through all!)

// With break - stops at matching case
switch (color) {
  case "red":
    console.log("Apple");
    break;
  case "yellow":
    console.log("Banana");
    break;
  default:
    console.log("Unknown");
}
// Output: "Apple"
```

---

## Ternary Operator

Shorthand for simple if...else:

```javascript
condition ? expressionIfTrue : expressionIfFalse
```

### Examples
```javascript
// Basic usage
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Can assign to variables
const greeting = isLoggedIn ? "Welcome back!" : "Please log in";

// Can be used in expressions
const price = isMember ? 50 : 100;
const finalPrice = price * 0.9; // 10% discount
```

### Ternary Chaining (Use Carefully)
```javascript
// Simple cases (OK to chain)
const grade = score >= 90 ? "A" :
              score >= 80 ? "B" :
              score >= 70 ? "C" : "F";

// Complex cases (Better to use if...else)
```

---

## Nullish Coalescing

Returns right side when left is `null` or `undefined`:

```javascript
const value = null ?? "default";     // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";        // 0 (0 is not nullish)
const value4 = "" ?? "default";       // "" (empty string is not nullish)
```

### Practical Example
```javascript
// User preferences with defaults
const userTheme = userSettings.theme ?? "light";
const userName = user.name ?? "Guest";
const userAge = user.age ?? 0;
```

---

## Logical Operators in Conditionals

### Using && (AND) for Multiple Conditions
```javascript
const age = 25;
const hasLicense = true;

// Both conditions must be true
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// Nested if equivalent
if (age >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  }
}
```

### Using || (OR) for Alternative Conditions
```javascript
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Day off!");
}
```

### Using ! (NOT) to Negate
```javascript
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}
```

### Combining Logical Operators
```javascript
const age = 20;
const income = 50000;
const hasJob = true;

// Complex conditions
if ((age >= 18 && age <= 65) && (hasJob || income > 30000)) {
  console.log("Eligible for loan");
}
```

---

## Best Practices

### 1. Use Strict Equality (`===`)
```javascript
// Bad
if (value == true) { ... }

// Good
if (value === true) { ... }
```

### 2. Keep Conditions Simple
```javascript
// Bad - too complex
if ((age > 18 && hasLicense && !isSuspended && insuranceValid) || isEmergency) { ... }

// Good - break into named variables
const canDrive = age > 18 && hasLicense && !isSuspended && insuranceValid;
if (canDrive || isEmergency) { ... }
```

### 3. Prefer switch for Multiple Equal Comparisons
```javascript
// Acceptable for 2-3 cases
if (status === "active") { ... }
else if (status === "pending") { ... }
else if (status === "inactive") { ... }

// Better for many cases
switch (status) { ... }
```

### 4. Use Early Returns
```javascript
// Bad
function validateForm(data) {
  if (data !== null) {
    if (data.name !== "") {
      if (data.email !== "") {
        // submit form
      }
    }
  }
}

// Good
function validateForm(data) {
  if (data === null) return false;
  if (data.name === "") return false;
  if (data.email === "") return false;
  // submit form
}
```

### 5. Handle Edge Cases
```javascript
// Check for falsy values
if (value) { ... }        // null, undefined, 0, "", false, NaN
if (value !== null) { ... } // specific check
if (value !== undefined) { ... } // specific check
if (typeof value !== "undefined") { ... } // safe check
```

---

## Quick Reference

```javascript
// if statement
if (condition) { /* code */ }

// if...else
if (condition) { /* true */ } else { /* false */ }

// if...else if...else
if (c1) { /* c1 */ }
else if (c2) { /* c2 */ }
else { /* default */ }

// switch
switch (expr) {
  case val: /* */ break;
  default: /* */ 
}

// ternary
condition ? true : false

// nullish coalescing
value ?? default

// logical operators
&& (AND), || (OR), ! (NOT)
```

---

## What's Next?

- [Loops](./loops.md) - Learn how to repeat code
- [Examples](../examples/fundamentals/conditionals.js) - See conditionals in action
- [Exercises](../exercises/fundamentals/conditionals.md) - Practice with exercises
