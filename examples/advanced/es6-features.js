// =============================================================================
// ES6+ FEATURES - Examples
// =============================================================================

// Destructuring
const { name, age } = { name: "Alice", age: 30 };
const [first, ...rest] = [1, 2, 3, 4];

// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };

// Template Literals
const greeting = `Hello, ${name}!`;

// Arrow Functions
const add = (a, b) => a + b;

// Classes
class User {
  #password; // Private field
  
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = "";
  }
  
  greet() {
    return `Hi, I'm ${this.name}`;
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

// Map
const map = new Map();
map.set("key", "value");
map.get("key");
map.has("key");

// Set
const set = new Set([1, 2, 3, 2]);
set.add(4);
set.has(2);

// Symbol
const unique = Symbol("description");
const obj = { [unique]: "value" };
