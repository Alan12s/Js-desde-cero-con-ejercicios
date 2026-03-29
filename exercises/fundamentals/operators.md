# Operators - Exercises

## Exercise 1: Arithmetic Operations
Create a calculator object with methods:
- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`
- `modulo(a, b)`
- `power(base, exponent)`

## Exercise 2: Comparison Practice
Write a function `compare(a, b)` that returns:
- `"equal"` if a equals b
- `"greater"` if a is greater
- `"less"` if a is less than b
- Use strict equality where appropriate

## Exercise 3: Logical Operators
Write a function `canDrive(age, hasLicense)` that returns true if the person can drive.
Write a function `isEligibleForDiscount(member, purchaseAmount)` that returns true if:
- Member is true, OR
- Purchase amount is greater than 100

## Exercise 4: Temperature Converter
Create functions using the ternary operator:
- `celsiusToFahrenheit(c)` - returns F
- `fahrenheitToCelsius(f)` - returns C
- Use the formula: F = C * 9/5 + 32

## Exercise 5: Grade Calculator
Write a function `getGrade(score)` using if/else or switch:
- 90-100: "A"
- 80-89: "B"
- 70-79: "C"
- 60-69: "D"
- Below 60: "F"

## Exercise 6: Operator Precedence
Predict the result of each expression, then verify:
```javascript
let x = 5;
let y = 10;
let z = 2;

// Predict these:
console.log(x + y * z);
console.log((x + y) * z);
console.log(x++ + y);
console.log(++x + y);
```

---

*Solutions available in [solutions/fundamentals/operators.js](../../solutions/fundamentals/operators.js)*
