# Async/Await - Exercises

## Exercise 1: Basic Promise
Create a promise that resolves after 2 seconds with "Done!". Use both .then() and async/await.

## Exercise 2: Promise Chain
Create a chain of promises:
1. First resolves with a number
2. Second multiplies by 2
3. Third adds 10
4. Log the final result

## Exercise 3: Error Handling
Create an async function that tries to:
1. Parse invalid JSON and catch the error
2. Re-throw with a custom message
3. Handle all errors gracefully

## Exercise 4: Promise.all
Create a function that fetches data from multiple "endpoints" (simulated) and returns when all are complete.

## Exercise 5: Retry Logic
Create an async function that retries a failing operation 3 times before giving up.

## Exercise 6: Sequential vs Parallel
Compare performance:
1. Execute 3 async operations sequentially
2. Execute the same 3 operations in parallel
3. Log the time taken for each approach

## Exercise 7: sleep Function
Create a `sleep(ms)` function that returns a promise that resolves after ms milliseconds.
Use it to create a delayed greeting.

## Exercise 8: Async Iterator
Use async/await with a for...of loop to process an array of async operations.

---

*Solutions available in [solutions/intermediate/async-await.js](../../solutions/intermediate/async-await.js)*
