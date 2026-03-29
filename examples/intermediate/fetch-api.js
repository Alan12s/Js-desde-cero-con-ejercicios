// =============================================================================
// FETCH API - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Basic GET Request
// -----------------------------------------------------------------------------

// Promise style
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// async/await style
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// -----------------------------------------------------------------------------
// Response Properties
// -----------------------------------------------------------------------------

async function handleResponse() {
  const response = await fetch('/api/data');
  
  response.ok;         // true if 200-299
  response.status;     // HTTP status code
  response.statusText; // "OK", "Not Found"
  response.url;        // Final URL
  response.headers;    // Response headers
}

// -----------------------------------------------------------------------------
// POST Request
// -----------------------------------------------------------------------------

async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// Usage
createUser({ name: 'Alice', email: 'alice@example.com' })
  .then(user => console.log('Created:', user));

// -----------------------------------------------------------------------------
// PUT/DELETE Requests
// -----------------------------------------------------------------------------

async function updateUser(id, data) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

async function deleteUser(id) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  });
  return response.ok;
}

// -----------------------------------------------------------------------------
// Headers
// -----------------------------------------------------------------------------

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123'
});

headers.has('Content-Type');  // true
headers.get('Content-Type');  // "application/json"
headers.set('X-Custom', 'value');
headers.append('X-Custom', 'value2');

// -----------------------------------------------------------------------------
// Error Handling
// -----------------------------------------------------------------------------

async function safeFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
    
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error occurred');
    }
    throw error;
  }
}

// -----------------------------------------------------------------------------
// Concurrent Requests
// -----------------------------------------------------------------------------

async function loadDashboard() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}

// -----------------------------------------------------------------------------
// Request with Timeout
// -----------------------------------------------------------------------------

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}

// -----------------------------------------------------------------------------
// File Upload
// -----------------------------------------------------------------------------

async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData
    // Don't set Content-Type for FormData
  });
  
  return response.json();
}
