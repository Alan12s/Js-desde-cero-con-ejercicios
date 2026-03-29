// =============================================================================
// EVENTS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// addEventListener
// -----------------------------------------------------------------------------

const button = document.querySelector("#myButton");

// Basic listener
button.addEventListener("click", function(event) {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", (e) => {
  console.log("Clicked:", e.target);
});

// Named function
function handleClick(event) {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// -----------------------------------------------------------------------------
// Event Object
// -----------------------------------------------------------------------------

button.addEventListener("click", (e) => {
  console.log("Type:", e.type);              // "click"
  console.log("Target:", e.target);          // Element clicked
  console.log("CurrentTarget:", e.currentTarget); // Element with listener
  console.log("Bubbles:", e.bubbles);         // true
});

// Mouse position
button.addEventListener("mousemove", (e) => {
  console.log("Client:", e.clientX, e.clientY);  // Viewport
  console.log("Page:", e.pageX, e.pageY);        // Document
  console.log("Offset:", e.offsetX, e.offsetY);  // Element
});

// -----------------------------------------------------------------------------
// Keyboard Events
// -----------------------------------------------------------------------------

document.addEventListener("keydown", (e) => {
  console.log("Key:", e.key);      // "a", "Enter", "ArrowUp"
  console.log("Code:", e.code);    // "KeyA", "Enter"
  console.log("Ctrl:", e.ctrlKey); // true/false
});

// -----------------------------------------------------------------------------
// preventDefault & stopPropagation
// -----------------------------------------------------------------------------

// Prevent default behavior
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // Stop link navigation
  console.log("Link clicked but not followed");
});

// Form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Handle form manually
});

// Stop propagation
document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation(); // Parent won't receive click
  console.log("Child clicked only");
});

// -----------------------------------------------------------------------------
// Event Types
// -----------------------------------------------------------------------------

// Mouse
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard
document.addEventListener("keydown", handler);
document.addEventListener("keyup", handler);

// Form
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("change", handler);
input.addEventListener("input", handler);

// Document/Window
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
document.addEventListener("DOMContentLoaded", handler);

// -----------------------------------------------------------------------------
// Event Delegation
// -----------------------------------------------------------------------------

// Without delegation (inefficient)
document.querySelectorAll(".todo-item").forEach(item => {
  item.addEventListener("click", handleItemClick);
});

// With delegation (efficient)
document.querySelector(".todo-list").addEventListener("click", (e) => {
  const target = e.target.closest(".todo-item");
  if (target) {
    handleItemClick(target);
  }
});

// -----------------------------------------------------------------------------
// Custom Events
// -----------------------------------------------------------------------------

// Create and dispatch
const event = new Event("build", { bubbles: true });
element.dispatchEvent(event);

// With data
const customEvent = new CustomEvent("userLogin", {
  detail: {
    username: "alice",
    timestamp: new Date()
  }
});

document.addEventListener("userLogin", (e) => {
  console.log(e.detail.username);
});
document.dispatchEvent(customEvent);

// -----------------------------------------------------------------------------
// Event Options
// -----------------------------------------------------------------------------

// Once - only fires once
button.addEventListener("click", handler, { once: true });

// Capture phase
parent.addEventListener("click", handler, { capture: true });

// Passive - improves scroll performance
document.addEventListener("scroll", handler, { passive: true });

// AbortController
const controller = new AbortController();
button.addEventListener("click", handler, { signal: controller.signal });
controller.abort(); // Remove listener
