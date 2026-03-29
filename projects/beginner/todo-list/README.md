# Todo List Project

A fully functional todo list application with local storage persistence.

## Overview

Build a todo list app that allows users to add, complete, edit, and delete tasks.

## Features

- Add new todos
- Mark todos as complete (toggle)
- Delete todos
- Edit existing todos
- Filter by: All, Active, Completed
- Clear completed todos
- Persistent storage (localStorage)
- Task counter

## Project Structure

```
todo-list/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Instructions

### Step 1: HTML Structure
Create:
- Header with title and input field
- Filter buttons (All, Active, Completed)
- Todo list container
- Footer with task count and clear button

### Step 2: CSS Styling
Style:
- Clean, modern design
- Strike-through for completed items
- Visual feedback for interactions
- Responsive layout

### Step 3: JavaScript Logic
Implement:
- Add new todo
- Toggle todo completion
- Delete todo
- Edit todo (double-click to edit)
- Filter todos
- Persist to localStorage
- Count remaining todos

## Starter Code

```javascript
// State
let todos = [];

// DOM elements
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Functions
function addTodo(text) { }
function toggleTodo(id) { }
function deleteTodo(id) { }
function editTodo(id, newText) { }
function filterTodos(filter) { }
function saveToStorage() { }
function loadFromStorage() { }
function render() { }
```

## Bonus Challenges

1. Drag and drop to reorder todos
2. Add due dates
3. Add priority levels (high, medium, low)
4. Add categories/tags
5. Add search functionality

## Learning Outcomes

- DOM manipulation
- Event handling (click, submit, double-click)
- localStorage API
- Array methods (filter, map, reduce)
- State management
- CSS transitions

---

**Difficulty**: Beginner  
**Time Estimate**: 3-4 hours
