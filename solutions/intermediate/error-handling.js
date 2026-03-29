// =============================================================================
// SOLUTIONS - Error Handling
// =============================================================================

// try/catch/finally
function parseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error('Parse error:', error.message);
    throw error;
  } finally {
    console.log('Cleanup after parse');
  }
}

// Throw Errors
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

// Custom Errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Using Custom Errors
function validateUser(user) {
  if (!user.name) throw new ValidationError('Name is required', 'name');
  if (!user.email.includes('@')) throw new ValidationError('Invalid email', 'email');
  return true;
}

// Async Error Handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error;
  }
}

// Promise Error Handling
fetch('/api/data')
  .then(r => r.json())
  .catch(error => console.error('Failed:', error));

// Partial Failure Handling
async function loadWithPartialFailure() {
  const results = await Promise.allSettled([
    fetch('/api/1').then(r => r.json()),
    fetch('/api/2').then(r => r.json()),
    fetch('/api/3').then(r => r.json())
  ]);
  
  return results.map((r, i) => ({
    index: i,
    success: r.status === 'fulfilled',
    data: r.status === 'fulfilled' ? r.value : r.reason
  }));
}
