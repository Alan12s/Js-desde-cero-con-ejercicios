# Data Visualizer Project

An interactive data visualization application using the Canvas API.

## Overview

Build a data visualization tool that displays charts and allows user interaction.

## Features

- Line chart
- Bar chart
- Pie chart
- Interactive tooltips
- Data input form
- Chart type selector
- Responsive canvas

## Project Structure

```
data-visualizer/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Instructions

### Step 1: HTML Structure
Create:
- Chart type selector
- Data input form (labels and values)
- Canvas element for charts
- Legend display

### Step 2: CSS Styling
Style with:
- Clean chart styling
- Interactive states
- Responsive layout

### Step 3: JavaScript Logic
Implement:
- Canvas drawing functions
- Line chart rendering
- Bar chart rendering
- Pie chart rendering
- Tooltip handling
- Data validation

## Starter Code

```javascript
// Chart data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  values: [65, 59, 80, 81, 56]
};

// Canvas setup
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Chart functions
function drawLineChart(data, ctx) { }
function drawBarChart(data, ctx) { }
function drawPieChart(data, ctx) { }
function drawAxes(ctx, width, height) { }
function drawTooltip(x, y, value) { }
```

## Bonus Challenges

1. Add animations for chart rendering
2. Add zoom and pan functionality
3. Add multiple datasets comparison
4. Add export as PNG
5. Add real-time data updates
6. Add more chart types (radar, bubble)

## Learning Outcomes

- Canvas API
- Drawing operations
- Math for data visualization
- Event handling on canvas
- Responsive design
- Animation basics

---

**Difficulty**: Intermediate  
**Time Estimate**: 5-6 hours
