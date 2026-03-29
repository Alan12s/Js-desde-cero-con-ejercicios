// =============================================================================
// SOLUTIONS - Async/Await
// =============================================================================

// Exercise 1: Basic Promise
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 2000);
});

// .then style
myPromise.then(result => console.log(result));

// async/await style
async function getResult() {
  const result = await myPromise;
  console.log(result);
}

// Exercise 2: Promise Chain
function processChain() {
  return Promise.resolve(5)
    .then(x => x * 2)
    .then(x => x + 10)
    .then(x => console.log(x)); // 20
}

// Exercise 3: Error Handling
async function safeParse(json) {
  try {
    const result = JSON.parse(json);
    return result;
  } catch (error) {
    throw new Error(`Failed to parse: ${error.message}`);
  }
}

// Exercise 4: Promise.all
async function fetchAll(urls) {
  const promises = urls.map(url => fetch(url).then(r => r.json()));
  return await Promise.all(promises);
}

// Exercise 5: Retry Logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

// Exercise 6: Sequential vs Parallel
async function sequential() {
  const start = Date.now();
  await delay(1000);
  await delay(1000);
  await delay(1000);
  console.log("Sequential:", Date.now() - start); // ~3000ms
}

async function parallel() {
  const start = Date.now();
  await Promise.all([delay(1000), delay(1000), delay(1000)]);
  console.log("Parallel:", Date.now() - start); // ~1000ms
}

const delay = ms => new Promise(r => setTimeout(r, ms));

// Exercise 7: Sleep Function
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function delayedGreeting() {
  await sleep(2000);
  console.log("Hello after 2 seconds!");
}

// Exercise 8: Async Iterator
async function processAsyncItems(items) {
  for (const item of items) {
    const result = await processItem(item);
    console.log(result);
  }
}
