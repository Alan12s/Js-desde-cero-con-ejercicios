# Modules in JavaScript

## Table of Contents
1. [What are Modules?](#what-are-modules)
2. [ES6 Modules](#es6-modules)
3. [Exporting](#exporting)
4. [Importing](#importing)
5. [Module Patterns](#module-patterns)
6. [Dynamic Imports](#dynamic-imports)
7. [Best Practices](#best-practices)

---

## What are Modules?

Modules help organize code into separate files with their own scope, making code:
- **Organized** - Group related functionality
- **Reusable** - Import when needed
- **Maintainable** - Easy to update individual files
- **Encapsulated** - Variables/functions not globally accessible

---

## ES6 Modules

Modern JavaScript modules using `import`/`export`:

```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// main.js
import { PI, add } from './math.js';
console.log(add(2, PI));
```

### Module Files
```html
<!-- Use type="module" in script tag -->
<script type="module" src="main.js"></script>
```

### Key Points
- Always in strict mode (`'use strict'` is automatic)
- Each module executes only once
- Deferred loading (like defer attribute)
- CORS requires files to be served (won't work with `file://`)

---

## Exporting

### Named Exports
```javascript
// Export individual items
export const name = "Alice";
export const age = 30;
export function greet() {
  return `Hello, I'm ${name}`;
}

// Or export at the end
const name = "Alice";
const age = 30;
export { name, age };
```

### Default Exports
```javascript
// One default export per module
export default function() {
  return "Default export";
}

// Or with name
function App() { ... }
export default App;
```

### Re-exports
```javascript
// Re-export from another module
export { add } from './math.js';
export { multiply as mult } from './math.js';
export * from './utils.js';
```

---

## Importing

### Named Imports
```javascript
// Import specific named exports
import { add, subtract } from './math.js';

// Rename on import
import { add as addition } from './math.js';

// Import all named exports as object
import * as math from './math.js';
math.add(1, 2);
math.subtract(3, 1);
```

### Default Imports
```javascript
// Import default export
import myFunction from './module.js';

// With named imports
import myFunction, { add, subtract } from './module.js';
```

### Import Combinations
```javascript
// All together
import defaultExport, { named1, named2 as renamed } from './module.js';
```

### Side-effect Imports
```javascript
// Import for side effects only (runs module code)
import './analytics.js';
```

---

## Module Patterns

### Revealing Module Pattern
```javascript
// calculator.js
const state = { result: 0 };

function add(n) {
  state.result += n;
  return state.result;
}

function subtract(n) {
  state.result -= n;
  return state.result;
}

function getResult() {
  return state.result;
}

// Reveal public API
export { add, subtract, getResult };
```

### Factory Pattern
```javascript
// createCounter.js
export function createCounter(initial = 0) {
  let count = initial;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

// usage
import { createCounter } from './createCounter.js';
const counter = createCounter(10);
counter.increment();
```

### Singleton Pattern
```javascript
// store.js
class Store {
  constructor() {
    if (Store.instance) {
      return Store.instance;
    }
    this.data = {};
    Store.instance = this;
  }
  
  set(key, value) {
    this.data[key] = value;
  }
  
  get(key) {
    return this.data[key];
  }
}

export const store = new Store();
```

### Service Pattern
```javascript
// apiService.js
const BASE_URL = 'https://api.example.com';

async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

async function createUser(data) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export { fetchUsers, createUser };
```

---

## Dynamic Imports

Load modules on-demand:

### Basic Syntax
```javascript
// Static (loads with script)
import { add } from './math.js';

// Dynamic (loads when called)
const module = await import('./math.js');
module.add(1, 2);
```

### Practical Example
```javascript
async function loadFeature() {
  if (userWantsAdvanced) {
    const { advancedFeature } = await import('./advanced.js');
    advancedFeature.init();
  } else {
    const { basicFeature } = await import('./basic.js');
    basicFeature.init();
  }
}
```

### Code Splitting
```javascript
// Only load heavy library when needed
async function loadChartLibrary() {
  const { Chart } = await import('chart.js');
  return new Chart(ctx, config);
}
```

---

## Best Practices

### 1. One Module Per File
```javascript
// Good
// user.js
export function createUser(data) { ... }
export function updateUser(id, data) { ... }

// Better - separate concerns
// userFactory.js
export function createUser(data) { ... }

// userService.js  
export function updateUser(id, data) { ... }
```

### 2. Use Barrel Files (index.js)
```javascript
// components/
//   Button.js
//   Card.js
//   Modal.js
//   index.js

// index.js
export { Button } from './Button.js';
export { Card } from './Card.js';
export { Modal } from './Modal.js';

// Usage - cleaner imports
import { Button, Card } from './components';
```

### 3. Consistent Naming
```javascript
// Use PascalCase for classes/components
import Button from './Button.js';

// Use camelCase for functions/utilities
import { formatDate } from './utils.js';
```

### 4. Avoid Circular Dependencies
```javascript
// a.js
import { b } from './b.js';
export const a = "A";

// b.js
// Don't import from a.js - creates circular dependency
```

### 5. Default Exports for Main Entry
```javascript
// App.js (main component)
export default function App() { ... }

// utils.js (utility functions)
export function util1() { ... }  // Named export
export default { util1, util2 }; // Default object
```

---

## Quick Reference

```javascript
// Named exports
export const name = "value";
export function fn() { ... }

export { name, fn };
export { name as alias };

// Default export
export default function() { ... }
export default class { ... }

// Imports
import { name, fn } from './module.js';
import { name as alias } from './module.js';
import * as ns from './module.js';
import defaultExport from './module.js';
import defaultExport, { named } from './module.js';

// Dynamic import
const mod = await import('./module.js');

// Re-export
export { fn } from './module.js';
export * from './module.js';
```

---

## What's Next?

- [Fetch API](./fetch-api.md) - Learn to make HTTP requests
- [Examples](../examples/intermediate/modules.js) - See modules in action
- [Exercises](../exercises/intermediate/modules.md) - Practice with exercises
