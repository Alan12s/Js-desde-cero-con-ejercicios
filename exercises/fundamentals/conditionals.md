# Conditionals - Exercises

## Exercise 1: Simple if/else
Write a function `isEven(n)` that returns true if n is even, false otherwise.

## Exercise 2: Grade System
Create a function `getLetterGrade(score)` that returns:
- "A" for 90-100
- "B" for 80-89
- "C" for 70-79
- "D" for 60-69
- "F" for below 60

## Exercise 3: Traffic Light
Write a function `getAction(lightColor)` that returns:
- "green" → "Go"
- "yellow" → "Slow down"
- "red" → "Stop"
- Any other color → "Invalid light"

Use a switch statement.

## Exercise 4: FizzBuzz
Write `fizzBuzz(n)` that prints:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both
- The number as a string otherwise

## Exercise 5: Ternary Operator
Convert this if/else to ternary:
```javascript
if (age >= 18) {
  status = "adult";
} else {
  status = "minor";
}
```

## Exercise 6: Complex Condition
Write `canAccess(user, document)` that returns true if:
- User is logged in AND
- User is admin OR has the document permission

## Exercise 7: BMI Calculator
Write `getBMICategory(bmi)`:
- Below 18.5: "Underweight"
- 18.5-24.9: "Normal"
- 25-29.9: "Overweight"
- 30 and above: "Obese"

---

*Solutions available in [solutions/fundamentals/conditionals.js](../../solutions/fundamentals/conditionals.js)*
