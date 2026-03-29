# Error Handling in JavaScript

## Table of Contents
1. [Types of Errors](#types-of-errors)
2. [try/catch/finally](#trycatchfinally)
3. [Throwing Errors](#throwing-errors)
4. [Custom Errors](#custom-errors)
5. [Async Error Handling](#async-error-handling)
6. [Error Objects](#error-objects)
7. [Debugging Techniques](#debugging-techniques)
8. [Best Practices](#best-practices)

---

## Types of Errors

### Syntax Errors
Code has grammatical mistakes:
```javascript
// Missing parenthesis
if (true { console.log("error");

// Typos
cons value = 5; // const typo
```

### Runtime Errors (Exceptions)
Code is valid but fails during execution:
```javascript
// ReferenceError - variable doesn't exist
console.log(undefinedVariable); // ReferenceError

// TypeError - wrong type
"string".split(); // Works
null.split();      // TypeError: Cannot read property 'split' of null

// RangeError
(1).toFixed(1000); // RangeError: toFixed() digits argument must be between 0-100

// URIError
decodeURIComponent('%'); // URIError
```

### Logical Errors
Code runs but produces wrong results (hardest to find):
```javascript
// Off-by-one error
for (let i = 0; i <= array.length; i++) { // Extra iteration!

// Wrong operator
if (age > 18 && age < 65) { // Should be || for middle-aged
```

---

## try/catch/finally

### Basic Syntax
```javascript
try {
  // Code that might throw
  riskyOperation();
} catch (error) {
  // Handle the error
  console.error(error.message);
} finally {
  // Always runs, whether error or not
  cleanup();
}
```

### Simple Example
```javascript
try {
  const data = JSON.parse(invalidJson);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON:", error.message);
}
```

### finally Runs Regardless
```javascript
try {
  console.log("Try");
  throw new Error("Oops!");
} catch (e) {
  console.log("Catch");
} finally {
  console.log("Finally"); // Runs after catch
}
// Output: Try, Catch, Finally
```

### finally Without catch
```javascript
try {
  riskyOperation();
} finally {
  cleanup(); // Runs even if no error
}
```

---

## Throwing Errors

### throw Statement
```javascript
throw "simple string";        // Throws string
throw new Error("message");   // Throws Error object
throw 42;                     // Throws number
throw { error: "custom" };    // Throws object
```

### When to Throw
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

### Throwing vs Returning
```javascript
// Return null for "not found" - caller handles
function findUser(id) {
  const user = users.find(u => u.id === id);
  if (!user) return null; // Not an error, just not found
  return user;
}

// Throw for unexpected errors - caller must handle
function processUserData(data) {
  if (!data) {
    throw new Error("Data is required");
  }
  // Process...
}
```

---

## Custom Errors

### Extending Error
```javascript
class ValidationError extends Error {
  constructor(message, field) {
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

### Using Custom Errors
```javascript
function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email format", "email");
  }
}

try {
  validateEmail("invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`${error.field}: ${error.message}`);
  } else {
    throw error; // Re-throw unexpected errors
  }
}
```

### Error Subclass Pattern
```javascript
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}
```

---

## Async Error Handling

### Promise Rejection
```javascript
// .catch() handler
fetch('/api/data')
  .then(response => response.json())
  .catch(error => {
    console.error('Request failed:', error.message);
  });
```

### async/await Errors
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
}
```

### Multiple async Operations
```javascript
async function loadAll() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    return { users, posts, comments };
  } catch (error) {
    console.error('Failed to load data:', error.message);
    throw error;
  }
}
```

### Promise.allSettled for Partial Failures
```javascript
async function loadWithPartialFailure() {
  const results = await Promise.allSettled([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  
  const data = {};
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      data[index] = result.value;
    } else {
      console.error(`Request ${index} failed:`, result.reason);
      data[index] = null;
    }
  });
  
  return data;
}
```

---

## Error Objects

### Error Properties
```javascript
const error = new Error("Something went wrong");

error.message;        // "Something went wrong"
error.name;           // "Error"
error.stack;          // Stack trace string
error.toString();     // "Error: Something went wrong"
```

### Common Error Types
```javascript
new Error("message");           // Generic error
new TypeError("expected string"); // Type mismatch
new ReferenceError("not defined"); // Undefined variable
new RangeError("invalid value");  // Value out of range
new SyntaxError("unexpected token"); // Parsing failed
new URIError("malformed URI");    // URI encoding error
```

### Accessing Stack Trace
```javascript
try {
  riskyOperation();
} catch (error) {
  console.log(error.stack);
}
```

---

## Debugging Techniques

### console.error
```javascript
try {
  processData();
} catch (error) {
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    timestamp: new Date()
  });
}
```

### Debugger Statement
```javascript
function problematicFunction(data) {
  const result = process(data);
  debugger; // Pauses in dev tools
  return result;
}
```

### Conditional Breakpoints
```javascript
// In browser devtools, set breakpoint with condition
// x === 5 // Break when x equals 5
```

### Error Boundaries (Concept)
```javascript
function safeCall(fn, fallback = null) {
  try {
    return fn();
  } catch (error) {
    console.error('Function failed:', error);
    return fallback;
  }
}

const result = safeCall(() => riskyOperation(), 'fallback');
```

### Logging Utility
```javascript
class ErrorHandler {
  static log(error, context = {}) {
    console.error({
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });
  }
  
  static async handleAsync(promise, fallback) {
    try {
      return await promise;
    } catch (error) {
      this.log(error);
      return fallback;
    }
  }
}
```

---

## Best Practices

### 1. Specific Error Handling
```javascript
// Bad - catches everything the same way
try {
  riskyOperation();
} catch (error) {
  alert("An error occurred");
}

// Good - handle different errors differently
try {
  riskyOperation();
} catch (error) {
  if (error instanceof ValidationError) {
    showValidationMessage(error.message);
  } else if (error instanceof NetworkError) {
    showNetworkError();
  } else {
    showGenericError();
    throw error; // Re-throw unexpected errors
  }
}
```

### 2. Don't Catch Everything
```javascript
// Bad - swallows all errors
try {
  doSomething();
} catch (e) {}

// Better - let unexpected errors propagate
try {
  doSomething();
} catch (e) {
  console.error(e);
  throw e;
}

// Best - specific handling
try {
  doSomething();
} catch (e) {
  if (isExpectedError(e)) {
    handleExpectedError(e);
  } else {
    throw e; // Don't hide unexpected errors
  }
}
```

### 3. Provide Context
```javascript
// Bad
function calculate(a, b) {
  try {
    return a / b;
  } catch (e) {
    throw e;
  }
}

// Good
function calculate(a, b) {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    if (b === 0) {
      throw new RangeError('Cannot divide by zero');
    }
    return a / b;
  } catch (e) {
    throw new Error(`calculate(${a}, ${b}) failed: ${e.message}`, { cause: e });
  }
}
```

### 4. User-Friendly Messages
```javascript
// Bad - shows technical error
showError(error.stack);

// Good - shows user-friendly message
showError("Unable to save your changes. Please check your connection and try again.");

// Best - log technical details, show user message
console.error('Save failed:', error);
showError("Unable to save your changes. Please try again.");
```

### 5. Graceful Degradation
```javascript
async function loadContent() {
  try {
    const data = await fetchData();
    return renderContent(data);
  } catch (error) {
    console.error('Failed to load:', error);
    return renderError(); // Show fallback UI
  }
}
```

---

## Quick Reference

```javascript
// try/catch/finally
try { ... }
catch (error) { ... }
finally { ... }

// throw
throw new Error("message");
throw new TypeError("expected number");
throw { code: "ERROR", details: "..." };

// Custom error
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

// Async error handling
try {
  const data = await fetchData();
} catch (error) {
  handleError(error);
}

// Error properties
error.message;
error.name;
error.stack;

// instanceof checks
error instanceof Error;
error instanceof TypeError;
error instanceof ValidationError;
```

---

## What's Next?

- [Closures](../advanced/closures.md) - Master closures in JavaScript
- [Examples](../examples/intermediate/error-handling.js) - See error handling in action
- [Exercises](../exercises/intermediate/error-handling.md) - Practice with exercises
