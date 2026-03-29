# Closures in JavaScript

## Table of Contents
1. [What is a Closure?](#what-is-a-closure)
2. [How Closures Work](#how-closures-work)
3. [Practical Uses](#practical-uses)
4. [Closure Patterns](#closure-patterns)
5. [Common Pitfalls](#common-pitfalls)
6. [Best Practices](#best-practices)

---

## What is a Closure?

A closure is a function that remembers the variables from the place where it was created, even after that outer function has returned.

```javascript
function outer() {
  const message = "Hello";
  
  function inner() {
    console.log(message); // inner "remembers" message
  }
  
  return inner;
}

const greet = outer(); // outer() has finished
greet(); // "Hello" - still has access to message!
```

### Key Concept
The inner function "closes over" the outer variables, keeping them alive.

---

## How Closures Work

### Step-by-Step
```javascript
function makeCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### What Happens
1. `makeCounter()` creates `count` variable
2. Inner function is returned and stored in `counter`
3. Even though `makeCounter()` finished, `count` stays alive
4. Each `counter()` call increments the same `count`

### Multiple Closures
```javascript
function makeCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.getCount()); // 2 (separate count!)
console.log(counter2.getCount()); // 1
```

---

## Practical Uses

### Data Privacy
```javascript
function createUser(name) {
  let password = "secret"; // Private
  
  return {
    getName: () => name,
    checkPassword: (p) => p === password,
    setPassword: (p) => password = p
  };
}

const user = createUser("Alice");
console.log(user.getName());     // "Alice"
console.log(user.password);      // undefined (protected!)
console.log(user.checkPassword("secret")); // true
```

### Factory Functions
```javascript
function multiply(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiply(2);
const triple = multiply(3);
const tenX = multiply(10);

console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(tenX(5));   // 50
```

### Event Handlers with Loop
```javascript
// Classic problem - all handlers share same i
for (var i = 0; i < 3; i++) {
  document.getElementById(`btn-${i}`).addEventListener("click", function() {
    console.log(i); // Always logs 3!
  });
}

// Solution with closure (let creates new scope per iteration)
for (let i = 0; i < 3; i++) {
  document.getElementById(`btn-${i}`).addEventListener("click", function() {
    console.log(i); // Logs 0, 1, 2
  });
}

// Or with IIFE (immediately invoked function expression)
for (var i = 0; i < 3; i++) {
  (function(index) {
    document.getElementById(`btn-${index}`).addEventListener("click", function() {
      console.log(index);
    });
  })(i);
}
```

### Memoization
```javascript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize(function(n) {
  // Simulate expensive calculation
  return n * n;
});

console.log(expensiveCalc(5)); // Calculates: 25
console.log(expensiveCalc(5)); // Returns cached: 25
```

### Partial Application
```javascript
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5 = partial(add, 5);
const add5and10 = partial(add, 5, 10);

console.log(add5(10));        // 15
console.log(add5and10(3));    // 18
```

---

## Closure Patterns

### Module Pattern
```javascript
const Calculator = (function() {
  let result = 0;
  
  function add(n) {
    result += n;
    return this;
  }
  
  function subtract(n) {
    result -= n;
    return this;
  }
  
  function getResult() {
    return result;
  }
  
  function reset() {
    result = 0;
    return this;
  }
  
  return {
    add,
    subtract,
    getResult,
    reset
  };
})();

Calculator.add(5).add(3).subtract(2);
console.log(Calculator.getResult()); // 6
Calculator.reset();
console.log(Calculator.getResult()); // 0
```

### Revealing Module Pattern
```javascript
const UserManager = (function() {
  const users = new Map();
  
  function addUser(id, name) {
    users.set(id, { name, createdAt: new Date() });
  }
  
  function getUser(id) {
    return users.get(id);
  }
  
  function getAllUsers() {
    return Array.from(users.values());
  }
  
  return {
    addUser,
    getUser,
    getAllUsers
  };
})();
```

### State Management
```javascript
function createStore(initialState, reducer) {
  let state = initialState;
  
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
    }
  };
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(0, counterReducer);
console.log(store.getState()); // 0
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // 1
```

### Curry Function
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));  // 6
console.log(add(1, 2)(3));  // 6
console.log(add(1, 2, 3));  // 6
```

---

## Common Pitfalls

### Closures in Loops (var)
```javascript
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3!
  }, 100);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 100);
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index);
    }, 100);
  })(i);
}
```

### Memory Leaks
```javascript
// Potential memory leak
function createHandler() {
  const largeArray = new Array(1000000);
  
  return function() {
    // Uses largeArray indirectly
    console.log(largeArray.length);
  };
}

// Better: Only capture what you need
function createHandler() {
  const length = 1000000; // Store only what you need
  
  return function() {
    console.log(length);
  };
}
```

### Accidental Global Variables
```javascript
function broken() {
  result = 10; // Forgot const/let - creates global!
}

function fixed() {
  const result = 10; // Properly scoped
}
```

---

## Best Practices

### 1. Use Closures for Encapsulation
```javascript
// Good - private state
function createStack() {
  let items = [];
  
  return {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    get size() { return items.length; }
  };
}
```

### 2. Don't Over-Engineer
```javascript
// Unnecessary complexity
const counter = (() => {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count
  };
})();

// Simpler alternative
class Counter {
  #count = 0;
  inc() { return ++this.#count; }
  dec() { return --this.#count; }
}
```

### 3. Be Aware of Memory
```javascript
// Cache only necessary data
function createProcessor() {
  const cache = new Map();
  
  return function process(key, data) {
    if (!cache.has(key)) {
      cache.set(key, expensiveOperation(data));
    }
    return cache.get(key);
  };
}
```

### 4. Use Modules Over Nested Closures
```javascript
// Nested closures can get confusing
function outer() {
  const x = 1;
  return function() {
    const y = 2;
    return function() {
      const z = 3;
      return x + y + z;
    };
  };
}

// Consider flat structure
function createProcessor() {
  const x = 1;
  function middle() {
    const y = 2;
    return function() {
      const z = 3;
      return x + y + z;
    };
  }
  return middle;
}
```

---

## Quick Reference

```javascript
// Basic closure
function outer() {
  const x = 10;
  return function inner() {
    console.log(x);
  };
}

// Closure in loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Module pattern
const Module = (function() {
  let privateVar = 10;
  
  return {
    publicMethod() { ... }
  };
})();

// Factory function
function multiplier(factor) {
  return num => num * factor;
}
```

---

## What's Next?

- [ES6+ Features](./es6-features.md) - Master modern JavaScript syntax
- [Examples](../examples/advanced/closures.js) - See closures in action
- [Exercises](../exercises/advanced/closures.md) - Practice with exercises
