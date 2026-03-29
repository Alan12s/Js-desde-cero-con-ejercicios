# Mini SPA (Single Page Application)

A vanilla JavaScript single-page application with client-side routing.

## Overview

Build a mini SPA with multiple "pages" and client-side navigation without page reloads.

## Features

- Client-side routing (hash-based)
- Multiple views/pages
- Navigation menu
- Active link highlighting
- Page transitions
- 404 handling
- URL history management

## Project Structure

```
mini-spa/
├── README.md
├── index.html
├── styles.css
├── app.js (main application)
├── router.js (routing logic)
├── views/
│   ├── home.js
│   ├── about.js
│   ├── contact.js
│   └── notFound.js
└── components/
    ├── header.js
    └── footer.js
```

## Instructions

### Step 1: Router Implementation
Create a simple router:
```javascript
const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/contact": ContactPage
};

function router() {
  // Get current path
  // Match to route
  // Render component
}
```

### Step 2: View Components
Create view functions that return HTML:
```javascript
function HomePage() {
  return `
    <div class="page home">
      <h1>Welcome Home</h1>
      <p>Content here...</p>
    </div>
  `;
}
```

### Step 3: Navigation
Implement:
- Link click handling
- History API usage
- Active state updates

### Step 4: Layout
Create reusable header/footer components.

## Bonus Challenges

1. Add route parameters (/user/:id)
2. Add query parameters
3. Add route guards (authentication check)
4. Add lazy loading for routes
5. Add page transitions/animations
6. Add breadcrumbs

## Learning Outcomes

- Client-side routing
- History API
- Component architecture
- SPA architecture
- URL manipulation
- State-based rendering

---

**Difficulty**: Advanced (Pre-Framework)  
**Time Estimate**: 6-8 hours
