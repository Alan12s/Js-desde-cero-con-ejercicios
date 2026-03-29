// =============================================================================
// SOLUTIONS - Modules
// =============================================================================

// Exercise 1: Revealing Module Pattern
const Calculator = (function() {
  let result = 0;
  
  function add(n) { result += n; return this; }
  function subtract(n) { result -= n; return this; }
  function multiply(n) { result *= n; return this; }
  function divide(n) { result /= n; return this; }
  function getResult() { return result; }
  function reset() { result = 0; return this; }
  
  return { add, subtract, multiply, divide, getResult, reset };
})();

// Exercise 2: Factory Pattern
function createCounter(initial = 0, step = 1) {
  let count = initial;
  
  return {
    increment: () => { count += step; return count; },
    decrement: () => { count -= step; return count; },
    getCount: () => count,
    reset: () => { count = initial; }
  };
}

// Export for modules
// export { Calculator, createCounter };

// -----------------------------------------------------------------------------
// SOLUTIONS - Error Handling
// -----------------------------------------------------------------------------

// Custom Errors
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

// Error Boundary Wrapper
function withErrorBoundary(fn, fallback) {
  try {
    return fn();
  } catch (error) {
    console.error("Error:", error);
    return fallback ? fallback(error) : null;
  }
}

// Error Handler Utility
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
