# Notes App with LocalStorage

A notes application that persists data in the browser's localStorage.

## Overview

Build a note-taking app that saves notes locally in the browser.

## Features

- Create new notes
- Edit notes
- Delete notes
- Search notes
- Notes persist on page refresh (localStorage)
- Timestamps for created/updated
- Character count
- Auto-save functionality

## Project Structure

```
notes-app/
├── README.md
├── index.html
├── styles.css
└── script.js
```

## Instructions

### Step 1: HTML Structure
Create:
- Header with search and new note button
- Notes container (grid layout)
- Individual note cards
- New note modal/editor
- Delete confirmation

### Step 2: CSS Styling
Style with:
- Card-based layout
- Note colors/labels
- Hover effects
- Responsive grid
- Modal styling

### Step 3: JavaScript Logic
Implement:
- CRUD operations for notes
- localStorage integration
- Search functionality
- Auto-save on edit
- Timestamps

## Data Structure

```javascript
const note = {
  id: "unique_id",
  title: "Note Title",
  content: "Note content...",
  createdAt: timestamp,
  updatedAt: timestamp,
  color: "#ffffff"
};
```

## Starter Code

```javascript
// Note structure
const createNote = (title, content) => ({
  id: Date.now().toString(),
  title,
  content,
  createdAt: new Date(),
  updatedAt: new Date(),
  color: "#ffffff"
});

// Storage functions
function saveNotes(notes) { }
function loadNotes() { }

// CRUD functions
function addNote(note) { }
function updateNote(id, updates) { }
function deleteNote(id) { }
function searchNotes(query) { }
```

## Bonus Challenges

1. Add note colors/categories
2. Add drag and drop reordering
3. Add pin/favorite notes
4. Add export (JSON/TXT)
5. Add markdown support
6. Add rich text editing

## Learning Outcomes

- localStorage API
- CRUD operations
- Event delegation
- Form handling
- Search algorithms
- State management

---

**Difficulty**: Intermediate  
**Time Estimate**: 4-5 hours
