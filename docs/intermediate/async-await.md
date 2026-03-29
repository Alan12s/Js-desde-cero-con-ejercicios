# Async/Await & Promises in JavaScript

## Table of Contents
1. [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
2. [Promises](#promises)
3. [Async/Await](#asyncawait)
4. [Error Handling](#error-handling)
5. [Promise Combinators](#promise-combinators)
6. [Common Patterns](#common-patterns)
7. [Best Practices](#best-practices)

---

## Synchronous vs Asynchronous

### Synchronous Code
Executes line by line, each line waits for previous:
```javascript
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)
```

### Asynchronous Code
Doesn't wait, continues to next line:
```javascript
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes later)
```

### Why Async?
- Network requests (fetch)
- Timers (setTimeout, setInterval)
- File operations (Node.js)
- User events (click handlers are async)

---

## Promises

A Promise represents a value that may be available now, later, or never.

### Promise States
```
Pending → Fulfilled (with value)
Pending → Rejected (with reason)
```

### Creating a Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  const success = true;
  
  if (success) {
    resolve("Done!");      // Fulfills with value
  } else {
    reject(new Error("Failed")); // Rejects with reason
  }
});
```

### Consuming Promises
```javascript
myPromise
  .then(result => {
    console.log(result); // "Done!"
  })
  .catch(error => {
    console.error(error); // Handle error
  })
  .finally(() => {
    console.log("Complete"); // Always runs
  });
```

### Promise Chaining
```javascript
fetch("/api/user")
  .then(response => response.json())  // Returns Promise
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

### then() Return Values
```javascript
Promise.resolve(1)
  .then(x => x + 1)        // Returns 2 (passed to next .then)
  .then(x => Promise.resolve(x + 1)) // Returns 3 (unwrapped)
  .then(x => {             // Returns undefined
    return x + 1;          // Explicit return needed
  });
```

---

## Async/Await

Modern syntax for working with Promises (ES2017):

### Basic Syntax
```javascript
async function fetchData() {
  const result = await promise;
  console.log(result);
}
```

### Async Function Always Returns Promise
```javascript
async function getNumber() {
  return 42;
}

getNumber().then(console.log); // 42

// Equivalent to:
function getNumber() {
  return Promise.resolve(42);
}
```

### Awaiting Promises
```javascript
async function loadUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed:", error);
  }
}
```

### Await with Parallel Operations
```javascript
// Sequential (slow - waits for each)
async function loadData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
}

// Parallel (fast - runs all at once)
async function loadData() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
}
```

---

## Error Handling

### try/catch with Async/Await
```javascript
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error; // Re-throw if needed
  }
}
```

### .catch() with Promises
```javascript
fetch("/api/data")
  .then(response => response.json())
  .catch(error => console.error("Failed:", error));
```

### Handling Multiple Errors
```javascript
// Promise.allSettled - all complete, none block others
const results = await Promise.allSettled([
  fetch("/api/1"),
  fetch("/api/2"),
  fetch("/api/3")
]);

results.forEach((result, i) => {
  if (result.status === "fulfilled") {
    console.log(`API ${i}:`, result.value);
  } else {
    console.error(`API ${i}:`, result.reason);
  }
});
```

---

## Promise Combinators

### Promise.all
Fails fast - rejects if any promise rejects:
```javascript
const [user, posts] = await Promise.all([
  fetch("/api/user").then(r => r.json()),
  fetch("/api/posts").then(r => r.json())
]);
```

### Promise.allSettled
Never fails - waits for all, reports each:
```javascript
const results = await Promise.allSettled([
  fetch("/api/1").then(r => r.json()),
  fetch("/api/2").then(r => r.json())
]);

results.forEach(result => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason);
  }
});
```

### Promise.race
Returns first settled (resolved or rejected):
```javascript
const result = await Promise.race([
  fetch("/api/fast").then(r => r.json()),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Timeout")), 3000)
  )
]);
```

### Promise.any
Returns first fulfilled (ignores rejections):
```javascript
const result = await Promise.any([
  fetch("/api/1").then(r => r.json()),
  fetch("/api/2").then(r => r.json()),
  fetch("/api/3").then(r => r.json())
]);
// Returns first successful response
```

---

## Common Patterns

### Sequential Execution
```javascript
async function processItems(items) {
  const results = [];
  
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }
  
  return results;
}
```

### Parallel Execution with Limit
```javascript
async function parallelWithLimit(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const task of tasks) {
    const promise = task().then(result => {
      results.push(result);
      executing.splice(executing.indexOf(promise), 1);
    });
    
    executing.push(promise);
    
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(executing).then(() => results);
}
```

### Retry Logic
```javascript
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

### Promise Helper Functions
```javascript
// promisify - convert callback to promise
const promisify = fn => (...args) => 
  new Promise((resolve, reject) => 
    fn(...args, (err, result) => 
      err ? reject(err) : resolve(result)
    )
  );

// sleep/delay
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(1000); // Wait 1 second
```

---

## Best Practices

### 1. Always Handle Errors
```javascript
// Bad
async function getData() {
  const data = await fetch(url); // No error handling!
  return data.json();
}

// Good
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
```

### 2. Don't Forget await
```javascript
// Bad - returns promise, not data!
async function getData() {
  return fetch(url).then(r => r.json());
}

// Good - returns actual data
async function getData() {
  return await fetch(url).then(r => r.json());
}
```

### 3. Use Promise.all for Parallel Operations
```javascript
// Slow - sequential
const user = await fetchUser();
const posts = await fetchPosts();

// Fast - parallel
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
```

### 4. Avoid Mixing then/catch with async/await
```javascript
// Choose one style

// Promise style
fetchData()
  .then(process)
  .catch(handleError);

// async/await style
try {
  const data = await fetchData();
  process(data);
} catch (error) {
  handleError(error);
}
```

### 5. Return Promises, Not Values (for Reusability)
```javascript
// Better for composition
async function fetchUser() {
  const response = await fetch("/api/user");
  return response.json();
}

// Caller decides what to do
const user = await fetchUser(); // With await
fetchUser().then(user => ...);   // With .then
```

---

## Quick Reference

```javascript
// Promise creation
new Promise((resolve, reject) => { ... });

// Promise states
promise.then(onFulfilled, onRejected);
promise.catch(onRejected);
promise.finally(onFinally);

// Async/Await
async function fn() {
  const result = await promise;
  return result;
}

// Error handling
try { ... await ... } 
catch (e) { ... }

// Combinators
Promise.all(promises);       // All resolved
Promise.allSettled(promises); // All complete
Promise.race(promises);      // First settled
Promise.any(promises);        // First fulfilled

// Helpers
Promise.resolve(value);
Promise.reject(error);
Promise.all([p1, p2]).then(([r1, r2]) => ...);
```

---

## What's Next?

- [Fetch API](./fetch-api.md) - Learn to make HTTP requests
- [Examples](../examples/intermediate/async-await.js) - See async patterns in action
- [Exercises](../exercises/intermediate/async-await.md) - Practice with exercises
