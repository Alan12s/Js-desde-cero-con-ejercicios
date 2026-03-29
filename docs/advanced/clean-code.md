# Clean Code Practices in JavaScript

## Table of Contents
1. [Naming Conventions](#naming-conventions)
2. [Functions](#functions)
3. [Conditionals](#conditionals)
4. [Error Handling](#error-handling)
5. [Comments and Documentation](#comments-and-documentation)
6. [Code Organization](#code-organization)
7. [Common Patterns](#common-patterns)

---

## Naming Conventions

### Variables and Functions
```javascript
// Bad
const x = users.filter(u => u.a > 18);
const fn = (d) => d * 2;
let flag = true;

// Good
const adultUsers = users.filter(user => user.age > 18);
const calculatePrice = (days) => days * 2;
let isLoggedIn = true;
let hasPermission = false;
```

### Booleans
```javascript
// Bad - unclear meaning
let active = true;
let visible = false;

// Good - clear meaning
let isActive = true;
let isVisible = false;
let canEdit = false;
let hasError = false;

// Prefixes that indicate boolean
is, has, can, should, will, needs
```

### Constants
```javascript
// Bad
const max_retry = 3;
const APIURL = "https://api.example.com";

// Good
const MAX_RETRY = 3;
const API_BASE_URL = "https://api.example.com";
const DAYS_IN_WEEK = 7;
```

### Arrays and Objects
```javascript
// Bad - singular name
const user = ["Alice", "Bob"];
const item = { id: 1, name: "Product" };

// Good - plural for collections
const users = ["Alice", "Bob"];
const items = [{ id: 1, name: "Product" }];

// Type-specific names
const userList = [];
const userMap = new Map();
const userSet = new Set();
```

### Functions
```javascript
// Bad - generic names
function handleData() { }
function process() { }
function doStuff() { }

// Good - action + context
function handleUserSubmit() { }
function processPayment() { }
function fetchUserData() { }

// Verb prefixes
get, set, update, delete, create, fetch, calculate, validate, render
```

---

## Functions

### Single Responsibility
```javascript
// Bad - does multiple things
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendEmail(user);
  logActivity(user);
}

// Good - separate functions
function validateUser(user) { ... }
function saveUser(user) { ... }
function notifyUser(user) { ... }
function logUserAction(user) { ... }
function processUser(user) {
  validateUser(user);
  saveUser(user);
  notifyUser(user);
  logUserAction(user);
}
```

### Keep Functions Small
```javascript
// Bad - too long
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {};
  for (const input of form.elements) {
    if (input.name) {
      data[input.name] = input.value;
    }
  }
  // 50 more lines...
}

// Good - decomposed
function extractFormData(form) {
  const data = {};
  for (const input of form.elements) {
    if (input.name) {
      data[input.name] = input.value;
    }
  }
  return data;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const data = extractFormData(event.target);
  processFormData(data);
}
```

### Fewer Parameters
```javascript
// Bad - too many parameters
function createUser(name, age, email, phone, address, city, country, zip) { ... }

// Better - object parameter
function createUser({ name, age, email, phone, address, city, country, zip }) { ... }

// Or use builder pattern
function createUser() {
  return {
    withName(name) { this.name = name; return this; },
    withAge(age) { this.age = age; return this; },
    build() { return new User(this); }
  };
}

const user = createUser()
  .withName("Alice")
  .withAge(30)
  .build();
```

### Pure Functions
```javascript
// Bad - side effects
function addToCart(item) {
  cart.push(item); // Modifies external state
  updateTotal();   // Side effect
  showNotification(); // Side effect
}

// Good - returns value, no side effects
function addToCart(cart, item) {
  return [...cart, item]; // New array, doesn't mutate
}

// Impure version called explicitly
function shoppingFlow(cart, item) {
  const newCart = addToCart(cart, item);
  showNotification(`${item.name} added to cart`);
  return newCart;
}
```

---

## Conditionals

### Early Returns
```javascript
// Bad - nested conditions
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.permissions.includes("read")) {
        // Do something
      }
    }
  }
}

// Good - early returns
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.permissions.includes("read")) return;
  
  // Do something
}
```

### Ternary for Simple Cases
```javascript
// Bad - simple if/else
let status;
if (isActive) {
  status = "Active";
} else {
  status = "Inactive";
}

// Good - ternary
const status = isActive ? "Active" : "Inactive";

// Avoid for complex logic
const status = isActive ? isAdmin ? "Admin" : "User" : "Inactive"; // Hard to read
```

### Switch vs Object Map
```javascript
// Simple switch
function getRoleName(role) {
  switch (role) {
    case "admin": return "Administrator";
    case "user": return "User";
    case "guest": return "Guest";
    default: return "Unknown";
  }
}

// Object map (often cleaner)
const roleNames = {
  admin: "Administrator",
  user: "User",
  guest: "Guest"
};

function getRoleName(role) {
  return roleNames[role] ?? "Unknown";
}
```

### Complex Conditions
```javascript
// Bad - hard to read
if (user.loggedIn && (user.role === "admin" || user.role === "moderator") && user.posts.length > 0) {
  // Do something
}

// Good - named variables
const isLoggedIn = user.loggedIn;
const isPrivileged = ["admin", "moderator"].includes(user.role);
const hasPosts = user.posts.length > 0;

if (isLoggedIn && isPrivileged && hasPosts) {
  // Do something
}
```

---

## Error Handling

### Use Meaningful Error Messages
```javascript
// Bad
if (!user) {
  throw new Error("error");
}

// Good
if (!user) {
  throw new Error("Cannot process order: user not found");
}
```

### Custom Error Classes
```javascript
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}
```

### Handle Errors at Boundaries
```javascript
// Bad - handling everywhere
async function loadUser() {
  try {
    const response = await fetchUser();
    try {
      const posts = await fetchPosts();
      try {
        const comments = await fetchComments();
      } catch (e) {}
    } catch (e) {}
  } catch (e) {}
}

// Good - centralized error handling
async function loadUser() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  return { user, posts, comments };
}

async function handleUserPage() {
  try {
    const data = await loadUser();
    renderUserPage(data);
  } catch (error) {
    showErrorNotification(error.message);
    logError(error);
  }
}
```

---

## Comments and Documentation

### Good Comments
```javascript
// Explain WHY, not WHAT
function hashPassword(password) {
  // Using bcrypt with cost factor 12 (takes ~300ms)
  // This delay is intentional to slow down brute force attacks
  return bcrypt.hash(password, 12);
}

// TODO comments
// TODO: Implement caching for frequently accessed data
// FIXME: Memory leak in event listener - investigate further

// Documentation
/**
 * Calculates the total price including tax and discounts.
 * @param {number} subtotal - The subtotal before tax
 * @param {Object} options - Configuration options
 * @param {number} options.taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @param {number} options.discount - Discount amount to subtract
 * @returns {number} The final total
 */
function calculateTotal(subtotal, { taxRate = 0, discount = 0 } = {}) {
  const tax = subtotal * taxRate;
  return subtotal + tax - discount;
}
```

### Avoid Bad Comments
```javascript
// Bad - states the obvious
let count = 0; // Initialize count to 0
count++; // Increment count

// Bad - misleading
// Always returns true (actually doesn't always)
function validateEmail(email) {
  return email.includes("@");
}

// Bad - commented out code
// const oldVersion = this.calculate();
const newVersion = this.compute();
```

---

## Code Organization

### Consistent Structure
```javascript
// 1. Imports
import { api } from "./api";
import { validateUser } from "./validators";

// 2. Constants
const MAX_RETRY = 3;
const API_URL = "https://api.example.com";

// 3. Helper Functions
function formatDate(date) { ... }
function debounce(fn, delay) { ... }

// 4. Component/Class/Module
export class UserManager { ... }

// 5. Initialize
app.init();
```

### Module Organization
```javascript
// utils/format.js
export function formatDate(date) { ... }
export function formatCurrency(amount) { ... }

// utils/validation.js
export function isValidEmail(email) { ... }
export function isValidPassword(password) { ... }

// utils/index.js - Barrel export
export * from "./format.js";
export * from "./validation.js";

// Usage
import { formatDate, isValidEmail } from "./utils";
```

### File Structure
```
src/
├── components/         # UI components
│   ├── Button/
│   │   ├── Button.js
│   │   ├── Button.css
│   │   └── Button.test.js
│   └── Modal/
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── services/           # API services
├── stores/             # State management
└── App.js
```

---

## Common Patterns

### Nullish Coalescing
```javascript
// Before
const name = user.name ? user.name : "Anonymous";

// After
const name = user.name ?? "Anonymous";
```

### Optional Chaining
```javascript
// Before
const city = user && user.address && user.address.city;

// After
const city = user?.address?.city;
```

### Early Return Pattern
```javascript
function processOrder(order) {
  if (!order) return { error: "No order provided" };
  if (!order.items.length) return { error: "Order is empty" };
  if (!order.user) return { error: "No user associated" };
  
  // Process order...
  return { success: true, order };
}
```

### Value Objects
```javascript
// Before - primitives everywhere
function createEvent(name, date, location) { ... }
createEvent("Party", "2024-12-25", "NYC");

// After - structured values
const Event = {
  create(name, date, location) {
    return Object.freeze({ name, date, location });
  }
};

createEvent("Party", new Date("2024-12-25"), { city: "NYC" });
```

### Composition Over Inheritance
```javascript
// Avoid deep inheritance
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
class SuperDog extends Dog {} // Fragile!

// Prefer composition
const canBark = (state) => ({
  bark: () => console.log("Woof!")
});

const canFetch = (state) => ({
  fetch: () => console.log("Fetching!")
});

function createDog(name) {
  return {
    name,
    ...canBark(),
    ...canFetch()
  };
}
```

---

## Quick Reference

```javascript
// Naming
const isValid = true;      // Booleans
const MAX_SIZE = 100;      // Constants
const userNames = [];      // Arrays (plural)
let firstName = "";        // Variables (camelCase)

// Functions
// - Single responsibility
// - Small and focused
// - Few parameters
// - Pure when possible

// Conditionals
// - Early returns
// - Meaningful conditions
// - Ternary for simple cases

// Error handling
// - Meaningful messages
// - Custom error classes
// - Handle at boundaries

// Comments
// - Explain WHY
// - Document public APIs
// - Avoid obvious comments
```

---

## What's Next?

- [Projects](../projects/) - Apply these practices in real projects
- [Examples](../examples/advanced/clean-code.js) - See clean code in action
- [Exercises](../exercises/advanced/clean-code.md) - Practice clean code
