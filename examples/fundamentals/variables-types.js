// =============================================================================
// VARIABLES AND DATA TYPES - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Variable Declarations
// -----------------------------------------------------------------------------

// const - cannot be reassigned (use by default)
const PI = 3.14159;
const APP_NAME = "JavaScript Learning";

// let - can be reassigned
let score = 0;
score = 10; // OK
// score = 20; // Would work

// var - legacy, avoid in modern JavaScript
var oldWay = "Don't use this";

// -----------------------------------------------------------------------------
// Primitive Data Types
// -----------------------------------------------------------------------------

// String
const name = "Alice";
const greeting = 'Hello';
const template = `Hi, ${name}!`; // Template literal

// Number
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 2.5e6; // 2,500,000

// BigInt (for very large integers)
const hugeNumber = 9007199254740991n;

// Boolean
const isActive = true;
const isComplete = false;

// Undefined
let notAssigned;
console.log("Undefined:", notAssigned); // undefined

// Null
const empty = null;

// Symbol (unique identifiers)
const uniqueId = Symbol('id');

// -----------------------------------------------------------------------------
// Complex Types
// -----------------------------------------------------------------------------

// Object
const user = {
  name: "Alice",
  age: 28,
  isAdmin: false,
  address: {
    city: "New York",
    zip: "10001"
  }
};

// Array
const colors = ["red", "green", "blue"];
const mixed = [1, "two", true, null];

// -----------------------------------------------------------------------------
// Type Checking
// -----------------------------------------------------------------------------

console.log("Type of 'hello':", typeof "hello"); // "string"
console.log("Type of 42:", typeof 42); // "number"
console.log("Type of true:", typeof true); // "boolean"
console.log("Type of undefined:", typeof undefined); // "undefined"
console.log("Type of null:", typeof null); // "object" (historical bug!)
console.log("Type of {}:", typeof {}); // "object"
console.log("Type of []:", typeof []); // "object"
console.log("Type of function:", typeof function(){}); // "function"

// Check if array
console.log("Is array:", Array.isArray([1, 2, 3])); // true
console.log("Is array:", Array.isArray({0: "a"})); // false

// -----------------------------------------------------------------------------
// Type Conversion
// -----------------------------------------------------------------------------

// To String
String(123);        // "123"
(123).toString();  // "123"
123 + "";          // "123"

// To Number
Number("123");     // 123
Number("12.5");    // 12.5
Number("abc");     // NaN
Number(true);      // 1
Number(false);     // 0
parseInt("123");   // 123 (integer)
parseFloat("12.5"); // 12.5 (decimal)
+"123";            // 123 (unary plus)

// To Boolean
Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("hello");  // true
!!value;           // Double negation

// -----------------------------------------------------------------------------
// Special Values
// -----------------------------------------------------------------------------

// NaN (Not a Number)
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("parseInt('abc'):", parseInt("abc")); // NaN
console.log("NaN === NaN:", NaN === NaN); // false (NaN !== itself!)
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// Infinity
console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity

// -----------------------------------------------------------------------------
// Template Literals
// -----------------------------------------------------------------------------

const firstName = "Alice";
const lastName = "Smith";
const age = 30;

const bio = `
  Name: ${firstName} ${lastName}
  Age: ${age}
  Next year: ${age + 1}
  Is adult: ${age >= 18}
`;

// -----------------------------------------------------------------------------
// Best Practices Examples
// -----------------------------------------------------------------------------

// Good: Meaningful names
const maxLoginAttempts = 5;
const userEmailAddress = "alice@example.com";
const isUserLoggedIn = true;

// Good: Consistent naming
const firstName = "John";
const lastName = "Doe";
const isActive = true;

// Good: Constants in UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 5000;
