// =============================================================================
// CLOSURES - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Basic Closure
// -----------------------------------------------------------------------------

function outer() {
  const message = "Hello";
  
  return function inner() {
    console.log(message);
  };
}

const greet = outer(); // outer() has finished
greet(); // "Hello" - still has access to message!

// -----------------------------------------------------------------------------
// Counter Factory
// -----------------------------------------------------------------------------

function createCounter(initial = 0) {
  let count = initial;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = initial; }
  };
}

const counter1 = createCounter(10);
const counter2 = createCounter();

console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter2.getCount()); // 1 (separate count!)

// -----------------------------------------------------------------------------
// Data Privacy
// -----------------------------------------------------------------------------

function createUser(name) {
  let password = "secret"; // Private
  
  return {
    getName: () => name,
    checkPassword: (p) => p === password,
    setPassword: (p) => password = p
  };
}

const user = createUser("Alice");
console.log(user.getName());           // "Alice"
console.log(user.password);            // undefined
console.log(user.checkPassword("secret")); // true

// -----------------------------------------------------------------------------
// Factory Function
// -----------------------------------------------------------------------------

function multiply(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiply(2);
const triple = multiply(3);
const tenX = multiply(10);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(tenX(5));   // 50

// -----------------------------------------------------------------------------
// Memoization
// -----------------------------------------------------------------------------

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalc = memoize(function(n) {
  return n * n;
});

console.log(expensiveCalc(5)); // Calculates: 25
console.log(expensiveCalc(5)); // Returns cached: 25

// -----------------------------------------------------------------------------
// Event Handler with Loop
// -----------------------------------------------------------------------------

// Problem with var
for (var i = 0; i < 3; i++) {
  // All handlers would log 3 with var!
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  // Each handler has its own i
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function(index) {
    // index is captured in closure
  })(i);
}

// -----------------------------------------------------------------------------
// Module Pattern
// -----------------------------------------------------------------------------

const Calculator = (function() {
  let result = 0;
  
  function add(n) { result += n; return this; }
  function subtract(n) { result -= n; return this; }
  function getResult() { return result; }
  function reset() { result = 0; return this; }
  
  return { add, subtract, getResult, reset };
})();

Calculator.add(5).add(3).subtract(2);
console.log(Calculator.getResult()); // 6
Calculator.reset();
console.log(Calculator.getResult()); // 0

// -----------------------------------------------------------------------------
// State Management
// -----------------------------------------------------------------------------

function createStore(initialState, reducer) {
  let state = initialState;
  
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
    }
  };
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(0, counterReducer);
console.log(store.getState()); // 0
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // 1
