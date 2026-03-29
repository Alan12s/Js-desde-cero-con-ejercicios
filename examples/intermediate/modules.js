// =============================================================================
// MODULES - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Named Exports
// -----------------------------------------------------------------------------

// math.js
export const PI = 3.14159;
export const TAU = PI * 2;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Export at end
const multiply = (a, b) => a * b;
export { multiply };

// -----------------------------------------------------------------------------
// Default Export
// -----------------------------------------------------------------------------

// App.js
export default function App() {
  return "My App";
}

// Or
function App() { ... }
export default App;

// -----------------------------------------------------------------------------
// Importing
// -----------------------------------------------------------------------------

// Named imports
import { add, subtract } from './math.js';

// Rename on import
import { add as addition } from './math.js';

// All named exports
import * as math from './math.js';
math.add(1, 2);
math.PI;

// Default import
import App from './App.js';

// Mix
import App, { add } from './module.js';

// -----------------------------------------------------------------------------
// Re-exports
// -----------------------------------------------------------------------------

// index.js - barrel file
export { add } from './math.js';
export { multiply } from './operations.js';
export { greet } from './utils.js';

// -----------------------------------------------------------------------------
// Module Pattern - Revealing Module
// -----------------------------------------------------------------------------

// calculator.js
const state = { result: 0 };

function add(n) {
  state.result += n;
  return state.result;
}

function subtract(n) {
  state.result -= n;
  return state.result;
}

function getResult() {
  return state.result;
}

function reset() {
  state.result = 0;
}

export { add, subtract, getResult, reset };

// -----------------------------------------------------------------------------
// Module Pattern - Factory
// -----------------------------------------------------------------------------

// createCounter.js
export function createCounter(initial = 0) {
  let count = initial;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = initial; }
  };
}

// -----------------------------------------------------------------------------
// Dynamic Import
// -----------------------------------------------------------------------------

// Load on demand
async function loadFeature() {
  if (userWantsAdvanced) {
    const { advancedFeature } = await import('./advanced.js');
    advancedFeature.init();
  }
}

// Code splitting
async function loadChartLibrary() {
  const { Chart } = await import('chart.js');
  return new Chart(ctx, config);
}
