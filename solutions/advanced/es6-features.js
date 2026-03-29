// =============================================================================
// SOLUTIONS - ES6+ Features
// =============================================================================

// Destructuring
const obj = { name: "Alice", age: 30, city: "NYC", preferences: ["red", "en"] };
const { name, age } = obj;
const { city, ...rest } = obj;
const [pref1, pref2] = obj.preferences;

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
const [first, ...rest] = [1, 2, 3, 4, 5];

// Template Literals
const greeting = `Hello, ${name}!`;
const multiline = `Line 1
Line 2`;

// Arrow Functions
const add = (a, b) => a + b;
const double = n => n * 2;
const greet = name => `Hello, ${name}!`;

// Classes
class User {
  #password;
  
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = "";
  }
  
  greet() {
    return `Hi, I'm ${this.name}`;
  }
  
  setPassword(pwd) {
    this.#password = pwd;
  }
  
  static create(data) {
    return new User(data.name, data.email);
  }
}

// Optional Chaining
const city = user?.address?.city;
const zip = user?.address?.zip ?? "Unknown";

// Nullish Coalescing
const value = null ?? "default";
const value2 = 0 ?? "default"; // 0

// Map and Set
const map = new Map();
map.set("key", "value");
const val = map.get("key");
const has = map.has("key");

const set = new Set([1, 2, 2, 3]);
set.add(4);
const hasVal = set.has(2);

// Symbols
const unique = Symbol("description");
const obj = { [unique]: "value" };
