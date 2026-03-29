# Events in JavaScript

## Table of Contents
1. [Event Basics](#event-basics)
2. [Event Listeners](#event-listeners)
3. [Event Object](#event-object)
4. [Event Types](#event-types)
5. [Event Propagation](#event-propagation)
6. [Event Delegation](#event-delegation)
7. [Custom Events](#custom-events)
8. [Best Practices](#best-practices)

---

## Event Basics

Events are actions that happen in the browser (clicks, keypresses, page load, etc.) that JavaScript can respond to.

### How Events Work
1. User action or browser event occurs
2. Event is dispatched on a target element
3. Event listeners (if any) are notified
4. Listener code executes

### Example Flow
```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function(event) {
  console.log("Button was clicked!");
});
```

---

## Event Listeners

### addEventListener
The modern way to handle events:
```javascript
element.addEventListener(eventType, handler);
element.addEventListener(eventType, handler, options);
```

### removeEventListener
Remove listeners when no longer needed:
```javascript
function handleClick() {
  console.log("Clicked!");
}

button.addEventListener("click", handleClick);
// Later...
button.removeEventListener("click", handleClick);
```

### One-time Listener
```javascript
button.addEventListener("click", handler, { once: true });
```

### Options Object
```javascript
element.addEventListener("click", handler, {
  once: true,       // Only fire once
  capture: false,   // Capture phase vs bubble phase
  passive: true,    // Won't call preventDefault
  signal: abortController.signal // Cancel with AbortController
});
```

### Event Handler Syntaxes
```javascript
// Named function
function handleClick() { ... }
button.addEventListener("click", handleClick);

// Anonymous function
button.addEventListener("click", function(e) { ... });

// Arrow function
button.addEventListener("click", (e) => { ... });

// on-event property (legacy, avoid)
button.onclick = function(e) { ... }; // Overwrites previous!
```

---

## Event Object

When an event occurs, an event object is passed to the handler:

### Common Event Object Properties
```javascript
button.addEventListener("click", (event) => {
  event.type;         // "click"
  event.target;       // Element that triggered event
  event.currentTarget; // Element listener is attached to
  event.bubbles;     // Does event bubble?
  event.defaultPrevented; // Was preventDefault called?
  event.timeStamp;   // Time event occurred
});
```

### Mouse Event Properties
```javascript
element.addEventListener("click", (e) => {
  e.clientX;          // X position relative to viewport
  e.clientY;          // Y position relative to viewport
  e.pageX;            // X position relative to document
  e.pageY;            // Y position relative to document
  e.offsetX;          // X position relative to element
  e.offsetY;          // Y position relative to element
  e.button;           // Which button (0=left, 1=middle, 2=right)
  e.altKey;           // Was Alt key held?
  e.ctrlKey;          // Was Ctrl held?
  e.shiftKey;         // Was Shift held?
});
```

### Keyboard Event Properties
```javascript
document.addEventListener("keydown", (e) => {
  e.key;              // The key value ("a", "Enter", "ArrowUp")
  e.code;             // Physical key code ("KeyA", "Enter")
  e.keyCode;          // Legacy key code (deprecated)
  e.which;            // Legacy (deprecated)
});
```

### preventDefault
Cancel default browser behavior:
```javascript
// Prevent link navigation
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link was clicked but not followed");
});

// Prevent form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Handle form manually
});

// Prevent context menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

### stopPropagation
Stop event from bubbling/capturing:
```javascript
button.addEventListener("click", (e) => {
  e.stopPropagation(); // Stop bubbling up
  console.log("Button clicked only");
});
```

### stopImmediatePropagation
Stop other listeners on same element:
```javascript
button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});

button.addEventListener("click", (e) => {
  // This won't fire now!
});
```

---

## Event Types

### Mouse Events
```javascript
element.addEventListener("click", handler);      // Click
element.addEventListener("dblclick", handler);    // Double click
element.addEventListener("mousedown", handler);  // Mouse button down
element.addEventListener("mouseup", handler);     // Mouse button up
element.addEventListener("mouseenter", handler);  // Mouse enters element
element.addEventListener("mouseleave", handler); // Mouse leaves element
element.addEventListener("mousemove", handler);   // Mouse moves
element.addEventListener("mouseover", handler);   // Mouse enters (bubbles)
element.addEventListener("mouseout", handler);    // Mouse leaves (bubbles)
```

### Keyboard Events
```javascript
document.addEventListener("keydown", handler);  // Key pressed down
document.addEventListener("keyup", handler);    // Key released
document.addEventListener("keypress", handler); // Character typed (deprecated)
```

### Form Events
```javascript
form.addEventListener("submit", handler);       // Form submitted
input.addEventListener("focus", handler);       // Input focused
input.addEventListener("blur", handler);        // Input loses focus
input.addEventListener("change", handler);      // Value changed (on blur for inputs)
input.addEventListener("input", handler);      // Value changes (immediate)
input.addEventListener("reset", handler);      // Form reset
```

### Document/Window Events
```javascript
window.addEventListener("load", handler);        // Page fully loaded
window.addEventListener("DOMContentLoaded", handler); // DOM ready
window.addEventListener("resize", handler);      // Window resized
window.addEventListener("scroll", handler);      // Page scrolled
window.addEventListener("beforeunload", handler); // Before leaving page
document.addEventListener("visibilitychange", handler); // Tab visibility
```

### Touch Events (Mobile)
```javascript
element.addEventListener("touchstart", handler);
element.addEventListener("touchmove", handler);
element.addEventListener("touchend", handler);
```

---

## Event Propagation

Events flow through three phases:

```
1. Capture Phase (top → down)
   window → document → html → body → ... → target

2. Target Phase (on the element)
   Event fires on target

3. Bubble Phase (down → top) ← DEFAULT
   target → ... → body → html → document → window
```

### Visualizing Propagation
```javascript
// Parent with capture listener
parent.addEventListener("click", () => console.log("Parent CAPTURE"), true);

// Child with bubble listener (default)
child.addEventListener("click", () => console.log("Child BUBBLE"), false);

// Click order: Parent CAPTURE → Child BUBBLE
```

### Controlling Propagation
```javascript
// Listen in capture phase
element.addEventListener("click", handler, true);

// Listen in bubble phase (default)
element.addEventListener("click", handler, false);
element.addEventListener("click", handler); // Same as above
```

---

## Event Delegation

Handle events on multiple children with a single listener on parent:

### Without Delegation (Inefficient)
```javascript
// Bad - creates separate listener for each item
document.querySelectorAll(".todo-item").forEach(item => {
  item.addEventListener("click", handleItemClick);
});
```

### With Delegation (Efficient)
```javascript
// Good - single listener handles all items
document.querySelector(".todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-item")) {
    handleItemClick(e.target);
  }
});
```

### Practical Example - Todo List
```javascript
const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", (e) => {
  // Determine what was clicked
  const target = e.target;
  
  if (target.classList.contains("delete-btn")) {
    const todoItem = target.closest(".todo-item");
    todoItem.remove();
  }
  
  if (target.classList.contains("todo-item")) {
    target.classList.toggle("completed");
  }
});
```

### Delegation Benefits
1. Memory efficient (one listener vs many)
2. Works for dynamically added elements
3. Less code to maintain

---

## Custom Events

### Creating Custom Events
```javascript
const event = new Event("build", {
  bubbles: true,
  cancelable: true,
  composed: true
});

// Dispatch
element.dispatchEvent(event);
```

### CustomEvent with Data
```javascript
const event = new CustomEvent("userLogin", {
  detail: {
    username: "alice",
    timestamp: new Date()
  }
});

document.dispatchEvent(event);

// Listen
document.addEventListener("userLogin", (e) => {
  console.log(e.detail.username); // "alice"
  console.log(e.detail.timestamp);
});
```

### Built-in Event Constructor
```javascript
const myEvent = new Event("myEvent");
const myEvent = new Event("myEvent", { bubbles: true });
const myEvent = new Event("myEvent", { bubbles: true, cancelable: true });
```

---

## Best Practices

### 1. Use addEventListener, Not on-event Properties
```javascript
// Bad - overwrites previous handler
button.onclick = handler1;
button.onclick = handler2; // handler1 is gone!

// Good - adds both handlers
button.addEventListener("click", handler1);
button.addEventListener("click", handler2); // Both fire
```

### 2. Remove Event Listeners When Done
```javascript
// Define handler as named function
function handleClick() { ... }

// Add
button.addEventListener("click", handleClick);

// Remove (only works with named function!)
button.removeEventListener("click", handleClick);

// Clean up in component unmount patterns
class Component {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    button.addEventListener("click", this.handleClick);
  }
  
  destroy() {
    button.removeEventListener("click", this.handleClick);
  }
}
```

### 3. Use Passive Listeners for Scroll
```javascript
// Improves scroll performance
document.addEventListener("scroll", handler, { passive: true });
```

### 4. Debounce/Throttle Fast Events
```javascript
// Debounce - wait for pause
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Throttle - limit frequency
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
window.addEventListener("resize", debounce(handleResize, 250));
window.addEventListener("scroll", throttle(handleScroll, 100));
```

### 5. Check Event Target
```javascript
// Always verify what was clicked
button.addEventListener("click", (e) => {
  // e.target might be child element!
  const button = e.target.closest("button");
  if (!button) return;
  
  // Now safe to use button
});
```

---

## Quick Reference

```javascript
// Add listener
element.addEventListener("click", handler);
element.addEventListener("click", handler, { capture: true });
element.addEventListener("click", handler, { once: true });
element.addEventListener("click", handler, { passive: true });

// Remove listener
element.removeEventListener("click", handler);

// Event object
event.target;           // What triggered
event.currentTarget;    // Element with listener
event.type;             // Event name
event.preventDefault(); // Cancel default
event.stopPropagation();// Stop bubbling

// Dispatch custom event
element.dispatchEvent(new Event("custom"));
element.dispatchEvent(new CustomEvent("custom", { detail: data }));

// Delegation
parent.addEventListener("click", (e) => {
  if (e.target.matches(".child")) {
    handle(e.target);
  }
});
```

---

## What's Next?

- [Async/Await & Promises](./async-await.md) - Learn asynchronous JavaScript
- [Examples](../examples/intermediate/events.js) - See events in action
- [Exercises](../exercises/intermediate/events.md) - Practice with exercises
