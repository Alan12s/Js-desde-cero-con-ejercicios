// =============================================================================
// ASYNC/AWAIT - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Basic Promise
// -----------------------------------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Done!");
  } else {
    reject(new Error("Failed"));
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Complete"));

// -----------------------------------------------------------------------------
// async/await
// -----------------------------------------------------------------------------

async function fetchData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// async always returns Promise
async function getNumber() {
  return 42;
}
getNumber().then(console.log); // 42

// -----------------------------------------------------------------------------
// Error Handling
// -----------------------------------------------------------------------------

async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const user = await response.json();
    return user;
    
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error;
  }
}

// -----------------------------------------------------------------------------
// Parallel Execution
// -----------------------------------------------------------------------------

// Sequential (slow)
async function loadData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
}

// Parallel (fast)
async function loadDataFast() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
}

// Promise.allSettled - all complete, none fail
async function loadWithPartialFailure() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
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
// Common Patterns
// -----------------------------------------------------------------------------

// Retry logic
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

// Timeout
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Timeout")), ms);
    promise
      .then(resolve)
      .catch(reject)
      .finally(() => clearTimeout(timeout));
  });
}

// Sleep/delay
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(1000);

// Sequential with for...of
async function processItems(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }
  return results;
}
