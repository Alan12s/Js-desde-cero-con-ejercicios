# Calculator Project

A simple but functional calculator built with vanilla JavaScript.

## Overview

Build a calculator that performs basic arithmetic operations with a clean, modern interface.

## Features

- Basic operations: addition, subtraction, multiplication, division
- Clear and backspace functionality
- Decimal point support
- Keyboard input support
- Error handling for division by zero

## Project Structure

```
calculator/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Instructions

### Step 1: HTML Structure
Create the calculator interface with:
- Display screen for results
- Number buttons (0-9)
- Operator buttons (+, -, *, /)
- Clear (C) and equals (=) buttons
- Decimal point button

### Step 2: CSS Styling
Style the calculator to look modern and responsive:
- Use CSS Grid or Flexbox for button layout
- Add hover and active states
- Style the display screen

### Step 3: JavaScript Logic
Implement:
- Display updates when buttons are clicked
- Arithmetic operations
- Chain multiple operations
- Clear and backspace functionality
- Keyboard event listeners

## Starter Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="calculator">
    <div class="display" id="display">0</div>
    <div class="buttons">
      <!-- Add your buttons here -->
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### script.js (starter)
```javascript
// State
let currentNumber = "0";
let previousNumber = null;
let operation = null;

// DOM elements
const display = document.getElementById("display");

// Functions to implement:
function appendNumber(num) { }
function setOperation(op) { }
function calculate() { }
function clear() { }
function backspace() { }
function updateDisplay() { }
```

## Bonus Challenges

1. Add percentage (%) operation
2. Add positive/negative toggle (+/-)
3. Add keyboard support
4. Add calculation history
5. Add sound effects on button press

## Learning Outcomes

- DOM manipulation
- Event handling
- Basic arithmetic operations
- State management
- CSS Grid/Flexbox layout

---

**Difficulty**: Beginner  
**Time Estimate**: 2-3 hours
