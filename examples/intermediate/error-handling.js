// =============================================================================
// ERROR HANDLING - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// try/catch/finally
// -----------------------------------------------------------------------------

try {
  const data = JSON.parse(invalidJson);
  console.log(data);
} catch (error) {
  console.error('Invalid JSON:', error.message);
} finally {
  console.log('Cleanup here'); // Always runs
}

// -----------------------------------------------------------------------------
// Throwing Errors
// -----------------------------------------------------------------------------

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// throw statement variations
throw "simple string";
throw 42;
throw { error: "custom" };

// -----------------------------------------------------------------------------
// Custom Errors
// -----------------------------------------------------------------------------

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

// Using custom errors
function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
}

try {
  validateEmail('invalid');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`${error.field}: ${error.message}`);
  }
}

// -----------------------------------------------------------------------------
// Async Error Handling
// -----------------------------------------------------------------------------

// Promise style
fetch('/api/data')
  .then(response => response.json())
  .catch(error => {
    console.error('Request failed:', error.message);
  });

// async/await style
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

// Multiple async operations
async function loadAll() {
  try {
    const [users, posts] = await Promise.all([
      fetchUsers(),
      fetchPosts()
    ]);
    return { users, posts };
  } catch (error) {
    console.error('Failed to load:', error.message);
    throw error;
  }
}

// Promise.allSettled for partial failures
async function loadWithPartialFailure() {
  const results = await Promise.allSettled([
    fetch('/api/1'),
    fetch('/api/2'),
    fetch('/api/3')
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`API ${index}:`, result.value);
    } else {
      console.error(`API ${index} failed:`, result.reason);
    }
  });
}

// -----------------------------------------------------------------------------
// Error Object Properties
// -----------------------------------------------------------------------------

try {
  throw new Error('Something went wrong');
} catch (error) {
  error.message;        // "Something went wrong"
  error.name;           // "Error"
  error.stack;          // Stack trace
  error.toString();      // "Error: Something went wrong"
}

// -----------------------------------------------------------------------------
// Logging Utility
// -----------------------------------------------------------------------------

class ErrorHandler {
  static log(error, context = {}) {
    console.error({
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });
  }
  
  static async handleAsync(promise, fallback = null) {
    try {
      return await promise;
    } catch (error) {
      this.log(error);
      return fallback;
    }
  }
}
