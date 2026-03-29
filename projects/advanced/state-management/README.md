# State Management System

A custom state management system inspired by Redux, built with vanilla JavaScript.

## Overview

Build a predictable state container with actions and reducers for managing application state.

## Features

- Central state store
- Actions (plain objects)
- Reducers (pure functions)
- Subscriptions (notify on changes)
- Middleware support (logging, async)
- DevTools (time-travel debugging concept)
- State immutability

## Project Structure

```
state-management/
├── README.md
├── index.html
├── styles.css
├── store/
│   ├── createStore.js
│   ├── combineReducers.js
│   └── applyMiddleware.js
├── reducers/
│   ├── index.js
│   └── counterReducer.js
└── app.js
```

## Instructions

### Step 1: Create Store
Implement createStore:
```javascript
function createStore(reducer) {
  let state;
  let listeners = [];
  
  return {
    getState() { return state; },
    dispatch(action) { 
      state = reducer(state, action);
      listeners.forEach(fn => fn());
    },
    subscribe(fn) {
      listeners.push(fn);
      return () => {
        listeners = listeners.filter(l => l !== fn);
      };
    }
  };
}
```

### Step 2: Create Reducers
```javascript
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
```

### Step 3: Combine Reducers
```javascript
function combineReducers(reducers) {
  return (state = {}, action) => {
    const nextState = {};
    for (const key in reducers) {
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  };
}
```

### Step 4: Middleware
```javascript
function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    // Apply middleware chain
  };
}
```

## Bonus Challenges

1. Add async action creators (thunk)
2. Add selector functions (computed state)
3. Add persistence middleware (save to localStorage)
4. Add undo/redo functionality
5. Add devTools integration concept

## Learning Outcomes

- Redux-like architecture
- Immutable state patterns
- Pure functions
- Middleware pattern
- Pub/sub pattern
- Functional programming concepts

---

**Difficulty**: Advanced (Pre-Framework)  
**Time Estimate**: 8-10 hours
