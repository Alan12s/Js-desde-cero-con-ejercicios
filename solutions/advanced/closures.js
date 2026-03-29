// =============================================================================
// SOLUTIONS - Closures
// =============================================================================

// Exercise 1: Basic Closure
function createSecret(initialMessage) {
  let message = initialMessage;
  return function() {
    return message;
  };
}

// Exercise 2: Counter Factory
function createCounter(initial = 0) {
  let count = initial;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = initial; }
  };
}

// Exercise 3: Memoize
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Exercise 4: Private Variables (Bank Account)
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => {
      if (amount <= 0) throw new Error('Invalid amount');
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      return balance;
    },
    getBalance: () => balance
  };
}

// Exercise 5: Loop Closure (Fix)
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

// Using IIFE
for (var i = 0; i < 5; i++) {
  (function(index) {
    setTimeout(() => console.log(index), index * 1000);
  })(i);
}

// -----------------------------------------------------------------------------
// SOLUTIONS - Scope
// -----------------------------------------------------------------------------

// Global scope - everywhere
const globalVar = "global";

// Function scope
function functionScope() {
  const localVar = "local";
  return localVar;
}

// Block scope
if (true) {
  let blockVar = "block scoped";
  const alsoBlockVar = "also block scoped";
}

// Scope chain example
function outer() {
  const outerVar = "outer";
  function middle() {
    const middleVar = "middle";
    function inner() {
      const innerVar = "inner";
      // Can access: innerVar, middleVar, outerVar, globalVar
    }
  }
}
