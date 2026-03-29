// =============================================================================
// DOM MANIPULATION - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// Selecting Elements
// -----------------------------------------------------------------------------

// By ID
const header = document.getElementById("main-header");

// By class (returns HTMLCollection)
const cards = document.getElementsByClassName("card");

// By tag (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// querySelector (first match)
const firstCard = document.querySelector(".card");
const submitBtn = document.querySelector("button[type='submit']");

// querySelectorAll (NodeList)
const allCards = document.querySelectorAll(".card");
const allInputs = document.querySelectorAll("input");

// -----------------------------------------------------------------------------
// Modifying Elements
// -----------------------------------------------------------------------------

const el = document.querySelector("h1");

// textContent - safe, only text
el.textContent;                    // Get text
el.textContent = "New Title";       // Set text

// innerHTML - parses HTML (use carefully)
el.innerHTML;                              // Get HTML
el.innerHTML = "<strong>Bold</strong>";    // Set HTML

// innerText - respects CSS
el.innerText; // Returns visible text

// -----------------------------------------------------------------------------
// Creating Elements
// -----------------------------------------------------------------------------

// createElement
const div = document.createElement("div");
const button = document.createElement("button");

// appendChild
const container = document.querySelector(".container");
container.appendChild(div);

// append (multiple)
container.append(div, button);

// prepend (as first child)
const list = document.querySelector("ul");
const firstItem = document.createElement("li");
list.prepend(firstItem);

// insertAdjacentHTML
const parent = document.querySelector(".container");
parent.insertAdjacentHTML("beforeend", "<p>Added at end</p>");
parent.insertAdjacentHTML("afterbegin", "<p>Added at start</p>");

// remove
const toRemove = document.querySelector(".remove-me");
toRemove.remove();

// -----------------------------------------------------------------------------
// Working with Attributes
// -----------------------------------------------------------------------------

const link = document.querySelector("a");

// getAttribute
link.getAttribute("href");

// setAttribute
link.setAttribute("href", "https://newurl.com");
link.setAttribute("target", "_blank");

// hasAttribute / removeAttribute
link.hasAttribute("href");     // true
link.removeAttribute("target");

// data attributes
const userEl = document.querySelector("[data-user-id]");
userEl.dataset.userId;       // "123"
userEl.dataset.name = "Alice";

// -----------------------------------------------------------------------------
// Working with Classes
// -----------------------------------------------------------------------------

const card = document.querySelector(".card");

card.classList.add("active", "highlighted");
card.classList.remove("hidden");
card.classList.toggle("active");
card.classList.contains("active"); // true
card.classList.replace("old", "new");

// -----------------------------------------------------------------------------
// Working with Styles
// -----------------------------------------------------------------------------

const box = document.querySelector(".box");

box.style.color = "red";
box.style.backgroundColor = "blue"; // camelCase!
box.style.fontSize = "20px";
box.style.display = "flex";

// Computed styles
const styles = window.getComputedStyle(box);
styles.color;           // "rgb(255, 0, 0)"
styles.fontSize;        // "16px"

// -----------------------------------------------------------------------------
// Practical Examples
// -----------------------------------------------------------------------------

// Update multiple items
document.querySelectorAll(".description").forEach(el => {
  el.textContent = "Updated";
});

// Calculate total from prices
const prices = document.querySelectorAll(".price");
const total = [...prices].reduce((sum, el) => {
  return sum + parseFloat(el.textContent);
}, 0);

// Create list from data
const data = ["Apple", "Banana", "Cherry"];
const ul = document.querySelector("#fruit-list");

data.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  ul.appendChild(li);
});

// Use DocumentFragment for performance
const fragment = document.createDocumentFragment();
data.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.appendChild(li);
});
ul.appendChild(fragment);
