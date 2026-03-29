# API Dashboard

A comprehensive API dashboard that combines multiple data sources and visualizations.

## Overview

Build an API dashboard that fetches and displays data from multiple APIs with filtering and visualization.

## Features

- Multiple API integration
- Data filtering and sorting
- Multiple chart types
- Real-time data updates
- Search functionality
- Dark/light theme toggle
- Responsive dashboard layout
- Loading and error states

## APIs to Use

1. JSONPlaceholder (posts, users)
2. RandomUser (user data)
3. Open Library (book search)
4. CryptoCompare (crypto prices)

## Project Structure

```
api-dashboard/
├── README.md
├── index.html
├── styles.css
├── js/
│   ├── app.js
│   ├── api/
│   │   ├── client.js
│   │   ├── endpoints.js
│   │   └── cache.js
│   ├── components/
│   │   ├── Card.js
│   │   ├── Chart.js
│   │   └── Modal.js
│   └── utils/
│       ├── dom.js
│       └── format.js
└── assets/
```

## Instructions

### Step 1: API Client
Create a reusable fetch wrapper:
```javascript
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
  }
  
  async get(endpoint, options = {}) {
    // Implement fetch with caching
  }
}
```

### Step 2: Dashboard Layout
Create a grid-based dashboard with:
- Stats cards
- Charts
- Data tables
- Search bars

### Step 3: Data Integration
Connect multiple APIs and display data in various formats.

### Step 4: Interactivity
Add:
- Refresh buttons
- Filter controls
- Sort options
- Theme toggle

## Bonus Challenges

1. Add real-time WebSocket updates
2. Add export functionality
3. Add customizable widgets
4. Add dashboard layouts (drag to rearrange)
5. Add data comparison features
6. Add user preferences (save to localStorage)

## Learning Outcomes

- Multiple API integration
- Data visualization
- State management
- Component architecture
- Error handling
- Caching strategies
- Responsive design

---

**Difficulty**: Advanced (Pre-Framework)  
**Time Estimate**: 10-12 hours
