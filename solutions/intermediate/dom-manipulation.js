// =============================================================================
// SOLUTIONS - DOM Manipulation
// =============================================================================

// Exercise 1: Select Elements
const elementById = document.getElementById("myId");
const elementsByClass = document.getElementsByClassName("myClass");
const allLi = document.getElementsByTagName("li");
const firstCard = document.querySelector(".card");
const itemsInContainer = document.querySelectorAll(".container .item");

// Exercise 2: Modify Content
function updateContent() {
  document.querySelector("h1").textContent = "Welcome";
  document.querySelector(".description").textContent = "New text";
  document.querySelector("#content").innerHTML += "<p>Added content</p>";
}

// Exercise 3: Create List
function createList(items) {
  const ul = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

// Exercise 4: Counter with Events
class Counter {
  constructor() {
    this.count = 0;
    this.display = document.getElementById("count");
    this.incrementBtn = document.getElementById("increment");
    this.decrementBtn = document.getElementById("decrement");
    this.resetBtn = document.getElementById("reset");
    
    this.incrementBtn.addEventListener("click", () => this.inc());
    this.decrementBtn.addEventListener("click", () => this.dec());
    this.resetBtn.addEventListener("click", () => this.reset());
    this.updateDisplay();
  }
  
  inc() { this.count++; this.updateDisplay(); }
  dec() { this.count--; this.updateDisplay(); }
  reset() { this.count = 0; this.updateDisplay(); }
  updateDisplay() { this.display.textContent = this.count; }
}

// Exercise 5: Todo List
class TodoList {
  constructor() {
    this.todos = [];
    this.input = document.getElementById("todo-input");
    this.list = document.getElementById("todo-list");
    
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTodo();
    });
  }
  
  addTodo() {
    const text = this.input.value.trim();
    if (!text) return;
    
    this.todos.push({ id: Date.now(), text, completed: false });
    this.input.value = "";
    this.render();
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    this.render();
  }
  
  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.render();
  }
  
  render() {
    this.list.innerHTML = this.todos.map(todo => `
      <li class="${todo.completed ? 'completed' : ''}">
        <input type="checkbox" ${todo.completed ? 'checked' : ''}>
        <span>${todo.text}</span>
        <button data-id="${todo.id}">Delete</button>
      </li>
    `).join("");
  }
}
