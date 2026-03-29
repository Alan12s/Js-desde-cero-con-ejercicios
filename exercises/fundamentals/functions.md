# Functions - Exercises

## Exercise 1: Basic Functions
Create the following functions:
1. `greet(name)` - returns "Hello, [name]!"
2. `add(a, b)` - returns sum of two numbers
3. `isAdult(age)` - returns true if age >= 18

## Exercise 2: Default Parameters
Create a function `createGreeting(name, greeting = "Hello")` that returns the greeting.

## Exercise 3: Rest Parameters
Create a function `sumAll(...numbers)` that sums all passed numbers.
Example: `sumAll(1, 2, 3, 4, 5)` → 15

## Exercise 4: Arrow Functions
Convert these to arrow functions:
```javascript
function double(n) { return n * 2; }
function greet(name) { return "Hello, " + name; }
function isEven(n) { return n % 2 === 0; }
```

## Exercise 5: Closures
Create a function `makeCounter(start = 0, step = 1)` that returns a counter function.
```javascript
const counter = makeCounter(0, 2);
counter(); // 2
counter(); // 4
counter(); // 6
```

## Exercise 6: Higher-Order Function
Create a function `repeat(fn, times)` that calls fn times times.
```javascript
repeat(() => console.log("Hi"), 3);
// Should print "Hi" three times
```

## Exercise 7: Pure Function
Create a pure function `updateUser(user, updates)` that returns a new user object with updates applied (doesn't mutate original).

## Exercise 8: IIFE
Create an IIFE that calculates the area of a circle (PI * r^2) with r = 5 and logs the result.

---

*Solutions available in [solutions/fundamentals/functions.js](../../solutions/fundamentals/functions.js)*
