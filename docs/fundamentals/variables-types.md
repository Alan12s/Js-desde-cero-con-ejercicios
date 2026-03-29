# Variables and Data Types in JavaScript

## Table of Contents
1. [Variables](#variables)
2. [Data Types](#data-types)
3. [Type Checking](#type-checking)
4. [Type Conversion](#type-conversion)
5. [Best Practices](#best-practices)

---

## Variables

JavaScript has three ways to declare variables:

### `let` - Block-scoped variable (ES6)
```javascript
let age = 25;
age = 26; // Can be reassigned
```

### `const` - Block-scoped constant (ES6)
```javascript
const PI = 3.14159;
const name = "John";
// PI = 3.14; // Error! Cannot reassign
```

### `var` - Function-scoped (Legacy, avoid in modern JS)
```javascript
var oldWay = "Don't use this";
```
**Note:** `var` is function-scoped and has hoisting behavior that can cause bugs. Use `let` and `const` instead.

### Choosing Between `let` and `const`

| Keyword | Reassignable | Scope | Temporal Dead Zone |
|---------|--------------|-------|-------------------|
| `let` | Yes | Block | Yes |
| `const` | No | Block | Yes |

**Rule of thumb:** Use `const` by default. Only use `let` when you need to reassign a variable.

---

## Data Types

JavaScript has 7 primitive data types and 1 complex type:

### Primitive Types

#### 1. String - Text data
```javascript
const name = "Alice";
const greeting = 'Hello';
const template = `Hi, ${name}!`; // Template literal
```

#### 2. Number - Numeric data
```javascript
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 2.5e6; // 2,500,000
```

#### 3. BigInt - Large integers
```javascript
const hugeNumber = 9007199254740991n;
```

#### 4. Boolean - True/False
```javascript
const isActive = true;
const isComplete = false;
```

#### 5. Undefined - Variable declared but not assigned
```javascript
let notAssigned;
console.log(notAssigned); // undefined
```

#### 6. Null - Intentional absence of value
```javascript
const empty = null;
```

#### 7. Symbol - Unique identifier
```javascript
const uniqueId = Symbol('id');
```

### Complex Type

#### Object - Collection of key-value pairs
```javascript
const user = {
  name: "Alice",
  age: 28,
  isAdmin: false
};
```

### Arrays (Special Objects)
```javascript
const colors = ["red", "green", "blue"];
const mixed = [1, "two", true, null];
```

---

## Type Checking

### Using `typeof` Operator
```javascript
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (historical bug!)
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
typeof Symbol()     // "symbol"
```

### Checking Array Type
```javascript
Array.isArray([1, 2, 3])  // true
Array.isArray({0: "a"})   // false
```

---

## Type Conversion

### Implicit Conversion (Coercion)
```javascript
"5" + 3      // "53" (number to string)
"5" - 3      // 2 (string to number)
"5" * "2"    // 10 (both to number)
Boolean("")  // false (empty string)
Boolean("0") // true (non-empty string)
```

### Explicit Conversion

#### To String
```javascript
String(123)        // "123"
(123).toString()   // "123"
String(true)       // "true"
123 + ""           // "123" (implicit)
```

#### To Number
```javascript
Number("123")      // 123
Number("12.5")     // 12.5
Number("abc")      // NaN
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN
parseInt("123")    // 123 (integer)
parseFloat("12.5") // 12.5 (decimal)
+"123"             // 123 (unary plus)
```

#### To Boolean
```javascript
Boolean(1)         // true
Boolean(0)         // false
Boolean("")        // false
Boolean(" ")       // true
Boolean(null)      // false
Boolean(undefined) // false
Boolean({})        // true
Boolean([])        // true
!!value            // Double NOT conversion
```

### Special Values

#### NaN (Not a Number)
```javascript
Math.sqrt(-1)      // NaN
parseInt("abc")    // NaN
NaN === NaN        // false (NaN is not equal to itself!)
isNaN(NaN)         // true
Number.isNaN(NaN)  // true (more reliable)
```

#### Infinity
```javascript
1 / 0              // Infinity
-1 / 0             // -Infinity
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
```

---

## Best Practices

### 1. Always Declare Variables
```javascript
// Bad
count = 10;  // Creates global variable (in non-strict mode)

// Good
const count = 10;
```

### 2. Use Meaningful Names
```javascript
// Bad
const x = 25;
const data = users.filter(u => u.a > 18);

// Good
const maxAge = 25;
const adultUsers = users.filter(user => user.age > 18);
```

### 3. Use camelCase for Variables
```javascript
const firstName = "John";
const lastName = "Doe";
const isLoggedIn = true;
```

### 4. Constants in UPPER_SNAKE_CASE
```javascript
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";
```

### 5. Prefer `const` Over `let`
```javascript
// Best - use const when value won't change
const items = ["apple", "banana"];

// Acceptable - use let when value will change
let count = 0;
count++;
```

---

## Quick Reference

```javascript
// Variable declarations
let variable;           // Declaration
let value = 10;         // Declaration + assignment
const CONSTANT = 100;   // Constant

// Data types
"string"                // String
42, 3.14                // Number
true, false             // Boolean
undefined               // Undefined
null                    // Null
Symbol('id')            // Symbol
{ key: "value" }        // Object
[1, 2, 3]               // Array

// Type checking
typeof value;

// Type conversion
String(value);
Number(value);
Boolean(value);
```

---

## What's Next?

Now that you understand variables and data types, proceed to:
- [Operators](./operators.md) - Learn how to perform operations on values
- [Examples](../examples/fundamentals/variables-types.js) - See code in action
- [Exercises](../exercises/fundamentals/variables-types.md) - Practice with exercises
