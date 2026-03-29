# Operators in JavaScript

## Table of Contents
1. [Arithmetic Operators](#arithmetic-operators)
2. [Comparison Operators](#comparison-operators)
3. [Logical Operators](#logical-operators)
4. [Assignment Operators](#assignment-operators)
5. [String Operators](#string-operators)
6. [Ternary Operator](#ternary-operator)
7. [Bitwise Operators](#bitwise-operators)
8. [Operator Precedence](#operator-precedence)

---

## Arithmetic Operators

Used to perform mathematical calculations:

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `15 / 3` | `5` |
| `%` | Modulus (remainder) | `5 % 3` | `2` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `let x = 5; x++` | `6` |
| `--` | Decrement | `let x = 5; x--` | `4` |

### Examples
```javascript
// Basic operations
let sum = 10 + 5;        // 15
let diff = 10 - 5;       // 5
let product = 10 * 5;    // 50
let quotient = 10 / 3;   // 3.333...
let remainder = 10 % 3;  // 1
let power = 2 ** 4;      // 16

// Increment/Decrement
let count = 0;
count++;                 // 1 (post-increment)
++count;                 // 2 (pre-increment)
count--;                 // 1 (post-decrement)
--count;                 // 0 (pre-decrement)

// Important difference
let a = 5;
let b = a++;             // b = 5, a = 6 (post: returns old value)
let c = 5;
let d = ++c;             // c = 6, d = 6 (pre: returns new value)
```

---

## Comparison Operators

Used to compare values, returns a boolean (`true` or `false`):

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==` | Equal (value only) | `5 == "5"` | `true` |
| `===` | Strict equal (value + type) | `5 === "5"` | `false` |
| `!=` | Not equal (value only) | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |

### Examples
```javascript
// Loose comparison (type coercion)
5 == "5"     // true (string coerced to number)
5 == 5       // true
"5" == 5     // true

// Strict comparison (no coercion)
5 === "5"    // false (different types)
5 === 5      // true

// Special cases
null == undefined  // true
null === undefined  // false
NaN === NaN        // false (NaN never equals itself)
```

**Best Practice:** Always use `===` and `!==` to avoid unexpected type coercion.

---

## Logical Operators

Used to combine or modify boolean expressions:

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND - both must be true | `true && false` → `false` |
| `\|\|` | OR - at least one must be true | `true \|\| false` → `true` |
| `!` | NOT - inverts the boolean | `!true` → `false` |

### Examples
```javascript
// AND (&&)
true && true     // true
true && false    // false
false && true    // false
false && false   // false

// OR (||)
true || true     // true
true || false    // true
false || true    // true
false || false   // false

// NOT (!)
!true            // false
!false           // true
!!true           // true (double negation)

// Short-circuit evaluation
true && console.log("Runs");  // "Runs" (second operand evaluated)
false && console.log("Skipped"); // nothing (short-circuit)

// Practical example
const age = 25;
const hasLicense = true;
const canDrive = age >= 16 && hasLicense; // true

const isWeekend = true;
const isHoliday = false;
const canRelax = isWeekend || isHoliday; // true
```

### Short-Circuit Evaluation
```javascript
// && returns first falsy value or last value
false && "hello"     // false
undefined && "hello"  // undefined
null && "hello"       // null
"hello" && "world"    // "world"

// || returns first truthy value or last value
true || "hello"       // true
"hello" || "world"    // "hello"
null || undefined      // undefined
false || 0 || ""       // ""
```

---

## Assignment Operators

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | Assigns 5 to x |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

### Examples
```javascript
let score = 10;
score += 5;   // 15
score -= 3;   // 12
score *= 2;   // 24
score /= 4;   // 6
score %= 4;   // 2
score **= 2;  // 4
```

---

## String Operators

### Concatenation
```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// Concatenation with other types
"5" + 3        // "53" (number becomes string)
"5" + true     // "5true"
"Result: " + 42 // "Result: 42"
```

### Template Literals (Preferred)
```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;  // "Hello, Alice!"
let calc = `2 + 2 = ${2 + 2}`;     // "2 + 2 = 4"
let multi = `Line 1
Line 2
Line 3`;  // Multi-line string
```

---

## Ternary Operator

Shorthand for `if/else` statements:

```javascript
// condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "adult" : "minor";  // "adult"

// Nested ternary (avoid for readability)
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
```

---

## Bitwise Operators

Work on binary representations of numbers:

| Operator | Description | Example |
|----------|-------------|---------|
| `&` | AND | `5 & 1` |
| `\|` | OR | `5 \| 1` |
| `^` | XOR | `5 ^ 1` |
| `~` | NOT | `~5` |
| `<<` | Left shift | `5 << 1` |
| `>>` | Right shift | `5 >> 1` |
| `>>>` | Unsigned right | `5 >>> 1` |

```javascript
5 & 1    // 1 (0101 & 0001 = 0001)
5 | 1    // 5 (0101 | 0001 = 0101)
5 ^ 1    // 4 (0101 ^ 0001 = 0100)
~5       // -6
5 << 1   // 10 (0101 << 1 = 1010)
5 >> 1   // 2  (0101 >> 1 = 0010)
```

---

## Operator Precedence

Operators are evaluated in this order (highest to lowest):

1. `()` - Parentheses
2. `**` - Exponentiation
3. `*`, `/`, `%` - Multiplicative
4. `+`, `-` - Additive
5. `<`, `<=`, `>`, `>=` - Comparison
6. `==`, `===`, `!=`, `!==` - Equality
7. `&&` - Logical AND
8. `||` - Logical OR
9. `?:` - Ternary
10. `=`, `+=`, etc. - Assignment

### Examples
```javascript
// Without parentheses
let result = 2 + 3 * 4;    // 14 (not 20)
let result2 = (2 + 3) * 4; // 20

// Mixed operators
let x = 5;
let y = 10;
let z = x + y * 2;         // 25
let w = (x + y) * 2;       // 30
```

---

## Quick Reference

```javascript
// Arithmetic
+, -, *, /, %, **, ++, --

// Comparison
===, !==, >, <, >=, <=

// Logical
&&, ||, !

// Assignment
=, +=, -=, *=, /=, %=, **=

// Ternary
condition ? true : false

// String
+ or template literals: `${var}`
```

---

## What's Next?

- [Conditionals](./conditionals.md) - Learn how to make decisions in code
- [Examples](../examples/fundamentals/operators.js) - See operators in action
- [Exercises](../exercises/fundamentals/operators.md) - Practice with exercises
