# DOM Manipulation in JavaScript

## Table of Contents
1. [What is the DOM?](#what-is-the-dom)
2. [Selecting Elements](#selecting-elements)
3. [Modifying Elements](#modifying-elements)
4. [Creating Elements](#creating-elements)
5. [Working with Attributes](#working-with-attributes)
6. [Working with Classes](#working-with-classes)
7. [Working with Styles](#working-with-styles)
8. [Best Practices](#best-practices)

---

## What is the DOM?

The Document Object Model (DOM) is a programming interface that represents the structure of an HTML document as a tree of nodes.

```
document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   └── h1
        ├── main
        │   ├── p
        │   └── ul
        │       ├── li
        │       └── li
        └── footer
```

### The `document` Object
```javascript
document.getElementById("id");      // Legacy but fast
document.querySelector("selector");  // Modern, flexible
document.body;                       // <body> element
document.head;                       // <head> element
document.title;                      // Page title
```

---

## Selecting Elements

### getElementById
Selects a single element by its ID:
```javascript
const header = document.getElementById("main-header");
```

### getElementsByClassName
Returns HTMLCollection of elements with class:
```javascript
const cards = document.getElementsByClassName("card");
// cards[0], cards[1], etc.
```

### getElementsByTagName
Returns HTMLCollection of elements by tag:
```javascript
const paragraphs = document.getElementsByTagName("p");
const allLinks = document.getElementsByTagName("a");
```

### querySelector
Returns first matching element (CSS selector):
```javascript
const firstCard = document.querySelector(".card");
const submitBtn = document.querySelector("button[type='submit']");
const lastItem = document.querySelector("ul li:last-child");
```

### querySelectorAll
Returns NodeList of all matching elements:
```javascript
const allCards = document.querySelectorAll(".card");
const allInputs = document.querySelectorAll("input");
const nested = document.querySelectorAll("ul li");
```

### HTMLCollection vs NodeList
```javascript
// HTMLCollection - live collection, array-like
const elements = document.getElementsByClassName("item");
elements[0];           // Access by index
elements.length;       // Has length
// elements.forEach is NOT available!

// NodeList - static or live, has forEach
const elements = document.querySelectorAll(".item");
elements[0];
elements.length;
elements.forEach(el => console.log(el)); // Available!
```

---

## Modifying Elements

### textContent
Gets/sets text content (safe):
```javascript
const el = document.querySelector("h1");
el.textContent;              // Get text
el.textContent = "New Title"; // Set text
```

### innerHTML
Gets/sets HTML content (use carefully):
```javascript
el.innerHTML;                    // Get HTML
el.innerHTML = "<strong>Bold</strong>"; // Set HTML
el.innerHTML += " Added";        // Append (not recommended)
```

### innerText
Gets/sets visible text (respects CSS):
```javascript
const el = document.querySelector(".hidden");
el.innerText; // Returns visible text (CSS matters)
el.textContent; // Returns all text (ignores CSS)
```

### Practical Examples
```javascript
// Update heading
document.querySelector("h1").textContent = "Welcome!";

// Update multiple items
document.querySelectorAll(".description").forEach(el => {
  el.textContent = "Updated";
});

// Calculate total
const prices = document.querySelectorAll(".price");
const total = [...prices].reduce((sum, el) => {
  return sum + parseFloat(el.textContent);
}, 0);
```

---

## Creating Elements

### createElement
```javascript
const div = document.createElement("div");
const button = document.createElement("button");
const link = document.createElement("a");
```

### appendChild / append
```javascript
const container = document.querySelector(".container");

// Create and add single element
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
container.appendChild(newDiv);

// append - can add multiple
const p1 = document.createElement("p");
const p2 = document.createElement("p");
container.append(p1, p2);

// appendChild - returns the node
const appended = container.appendChild(newDiv);
```

### prepend
Adds as first child:
```javascript
const list = document.querySelector("ul");
const firstItem = document.createElement("li");
firstItem.textContent = "First";
list.prepend(firstItem);
```

### insertAdjacentHTML
Insert HTML at specific position:
```javascript
const container = document.querySelector(".container");

container.insertAdjacentHTML("beforeend", "<p>Added at end</p>");
container.insertAdjacentHTML("afterbegin", "<p>Added at start</p>");
container.insertAdjacentHTML("beforebegin", "<p>Before container</p>");
container.insertAdjacentHTML("afterend", "<p>After container</p>");
```

### removeChild / remove
```javascript
// Remove child
const parent = document.querySelector(".container");
const child = document.querySelector(".to-remove");
parent.removeChild(child);

// remove (modern)
child.remove();
```

---

## Working with Attributes

### getAttribute / setAttribute
```javascript
const link = document.querySelector("a");

// Get
link.getAttribute("href");       // Returns href value
link.href;                        // Also works for standard attrs

// Set
link.setAttribute("href", "https://newurl.com");
link.setAttribute("target", "_blank");

// Check
link.hasAttribute("href");       // true/false

// Remove
link.removeAttribute("target");
```

### data Attributes
```html
<div id="user" data-id="123" data-name="alice"></div>
```
```javascript
const user = document.getElementById("user");

user.dataset.id;      // "123" (camelCase)
user.dataset.name;    // "alice"
user.dataset.userId;  // Also works for data-user-id

user.dataset.id = "456";  // Sets data-id
delete user.dataset.id;   // Removes attribute
```

---

## Working with Classes

### classList
```javascript
const el = document.querySelector(".card");

// Add classes
el.classList.add("active", "highlighted");

// Remove classes
el.classList.remove("hidden", "disabled");

// Toggle (add if missing, remove if present)
el.classList.toggle("active");

// Check if has class
el.classList.contains("active"); // true/false

// Replace
el.classList.replace("old-class", "new-class");
```

### className
```javascript
el.className;                 // Get all classes as string
el.className = "new-class";   // Set all classes (replaces)
```

---

## Working with Styles

### inline Styles
```javascript
const el = document.querySelector(".box");

el.style.color = "red";
el.style.backgroundColor = "blue"; // camelCase in JS!
el.style.fontSize = "20px";
el.style.display = "flex";
```

### computedStyle
Get actual computed styles:
```javascript
const el = document.querySelector(".box");
const styles = window.getComputedStyle(el);

styles.color;           // "rgb(255, 0, 0)"
styles.fontSize;         // "16px"
styles.backgroundColor; // "rgb(0, 0, 255)"
```

### CSS Variables
```javascript
const root = document.documentElement;

root.style.setProperty("--primary-color", "#3498db");
root.style.getPropertyValue("--primary-color");
root.style.removeProperty("--primary-color");
```

---

## Best Practices

### 1. Cache DOM References
```javascript
// Bad - queries DOM repeatedly
for (let i = 0; i < 100; i++) {
  document.querySelector(".item").textContent = i;
}

// Good - cache reference
const item = document.querySelector(".item");
for (let i = 0; i < 100; i++) {
  item.textContent = i;
}
```

### 2. Use DocumentFragment for Multiple Elements
```javascript
// Bad - causes reflow each time
const container = document.querySelector(".container");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = i;
  container.appendChild(div); // Reflow each time!
}

// Good - batch insert
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = i;
  fragment.appendChild(div);
}
container.appendChild(fragment); // Single reflow!
```

### 3. Use Event Delegation
```javascript
// Bad - listener on each item
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", handleClick);
});

// Good - single listener on parent
document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    handleClick(e.target);
  }
});
```

### 4. Avoid innerHTML for User Input
```javascript
// Safe - use textContent for user data
const userInput = "<script>alert('xss')</script>";
el.textContent = userInput;  // Safe - escaped

// Dangerous - innerHTML executes scripts
el.innerHTML = userInput;     // Don't do this!
```

### 5. Batch DOM Reads and Writes
```javascript
// Bad - alternating reads and writes
element.offsetHeight;  // Read (forces layout)
element.style.height = "100px"; // Write
element.offsetHeight;  // Read (forces layout)
element.style.width = "100px";  // Write

// Good - batch reads then writes
const height = element.offsetHeight; // Read all
const width = element.offsetWidth;
element.style.height = height + "px"; // Write all
element.style.width = width + "px";
```

---

## Quick Reference

```javascript
// Select
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("selector");

// Create
document.createElement("tag");
document.createDocumentFragment();

// Modify content
element.textContent = "text";
element.innerHTML = "<p>HTML</p>";

// Attributes
element.getAttribute("name");
element.setAttribute("name", "value");
element.dataset.id = "123";

// Classes
element.classList.add("class");
element.classList.remove("class");
element.classList.toggle("class");
element.classList.contains("class");

// Styles
element.style.property = "value";

// Add/Remove
parent.appendChild(child);
parent.append(child1, child2);
parent.prepend(child);
element.remove();

// Position
element.insertAdjacentHTML("beforeend", html);
```

---

## What's Next?

- [Events](./events.md) - Learn to handle user interactions
- [Examples](../examples/intermediate/dom-manipulation.js) - See DOM manipulation in action
- [Exercises](../exercises/intermediate/dom-manipulation.md) - Practice with exercises
