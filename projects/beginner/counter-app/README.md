# Counter App Project

A simple counter application demonstrating basic state management.

## Overview

Build a counter that tracks a number with increment, decrement, and reset functionality.

## Features

- Display current count
- Increment button (+1)
- Decrement button (-1)
- Reset button (back to 0)
- Optional: Set custom increment value
- Optional: Set count limits (min/max)

## Project Structure

```
counter-app/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Instructions

### Step 1: HTML Structure
Create:
- Count display
- Decrement button
- Reset button
- Increment button

### Step 2: CSS Styling
Style the counter with:
- Large, prominent number display
- Clear button styling
- Color coding (green for increment, red for decrement)

### Step 3: JavaScript Logic
Implement:
- State for current count
- Functions for increment, decrement, reset
- Update display on state change

## Starter Code

```javascript
let count = 0;

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  // Update the display element
}
```

## Bonus Challenges

1. Add step size selector (1, 5, 10, etc.)
2. Add minimum and maximum limits
3. Change background color based on count (positive/negative)
4. Add animation on count change
5. Save count to localStorage

## Learning Outcomes

- State management basics
- Event handling
- DOM updates
- CSS styling
- User interaction patterns

---

**Difficulty**: Beginner  
**Time Estimate**: 1-2 hours
