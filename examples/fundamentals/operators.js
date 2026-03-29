// =============================================================================
// OPERATORS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Arithmetic Operators
// -----------------------------------------------------------------------------

let sum = 10 + 5;        // 15
let diff = 10 - 5;       // 5
let product = 10 * 5;    // 50
let quotient = 10 / 3;   // 3.333...
let remainder = 10 % 3;  // 1
let power = 2 ** 4;      // 16

// Increment/Decrement
let count = 0;
count++;      // 1 (post-increment)
++count;      // 2 (pre-increment)
count--;      // 1 (post-decrement)
--count;      // 0 (pre-decrement)

// Difference between pre and post
let a = 5;
let b = a++;     // b = 5, a = 6 (returns old value)
let c = 5;
let d = ++c;    // c = 6, d = 6 (returns new value)

// -----------------------------------------------------------------------------
// Comparison Operators
// -----------------------------------------------------------------------------

// Loose comparison (type coercion)
5 == "5";      // true
5 == 5;        // true
"5" == 5;      // true

// Strict comparison (no coercion)
5 === "5";    // false
5 === 5;       // true

// Not equal
5 != "5";      // false
5 !== "5";     // true

// Greater/Less than
5 > 3;         // true
5 < 3;         // false
5 >= 5;        // true
5 <= 3;        // false

// Special cases
null == undefined;  // true
null === undefined; // false
NaN === NaN;        // false

// -----------------------------------------------------------------------------
// Logical Operators
// -----------------------------------------------------------------------------

// AND (&&)
true && true;       // true
true && false;      // false
false && true;      // false
false && false;     // false

// OR (||)
true || true;       // true
true || false;      // true
false || true;      // true
false || false;     // false

// NOT (!)
!true;              // false
!false;             // true
!!true;             // true

// Short-circuit evaluation
true && console.log("Runs");   // "Runs"
false && console.log("Skipped"); // nothing

// Practical example
const age = 25;
const hasLicense = true;
const canDrive = age >= 18 && hasLicense; // true

// -----------------------------------------------------------------------------
// Assignment Operators
// -----------------------------------------------------------------------------

let score = 10;
score += 5;   // 15
score -= 3;   // 12
score *= 2;   // 24
score /= 4;   // 6
score %= 4;   // 2
score **= 2;  // 4

// -----------------------------------------------------------------------------
// String Operators
// -----------------------------------------------------------------------------

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;  // "John Doe"

// With numbers
"5" + 3;       // "53" (becomes string)
"5" + true;   // "5true"

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`; // "Hello, John!"

// Multi-line
let multiline = `Line 1
Line 2
Line 3`;

// -----------------------------------------------------------------------------
// Ternary Operator
// -----------------------------------------------------------------------------

let age = 20;
let status = age >= 18 ? "adult" : "minor";  // "adult"

// Nested (use carefully)
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F"; // "B"

// Practical use
const price = isMember ? 50 : 100;
const finalPrice = price * 0.9;

// -----------------------------------------------------------------------------
// Bitwise Operators
// -----------------------------------------------------------------------------

5 & 1;    // 1 (0101 & 0001 = 0001)
5 | 1;    // 5 (0101 | 0001 = 0101)
5 ^ 1;    // 4 (0101 ^ 0001 = 0100)
~5;       // -6
5 << 1;   // 10 (0101 << 1 = 1010)
5 >> 1;   // 2  (0101 >> 1 = 0010)

// -----------------------------------------------------------------------------
// Operator Precedence
// -----------------------------------------------------------------------------

// Without parentheses
let result1 = 2 + 3 * 4;     // 14 (not 20)
let result2 = (2 + 3) * 4;   // 20

// Complex
let x = 5;
let y = 10;
let z = x + y * 2;           // 25
let w = (x + y) * 2;         // 30

// Logical precedence
true || false && false;      // true (&& has higher precedence)
(true || false) && false;    // false
