// =============================================================================
// SOLUTIONS - Events
// =============================================================================

// Exercise 1: Click Counter
class ClickCounter {
  constructor() {
    this.count = 0;
    this.display = document.getElementById("count");
    document.getElementById("button").addEventListener("click", () => {
      this.count++;
      this.display.textContent = this.count;
    });
  }
}

// Exercise 2: Keyboard Events
function setupKeyboardTracker() {
  const input = document.getElementById("input");
  const keyDisplay = document.getElementById("key");
  const charCount = document.getElementById("charCount");
  
  input.addEventListener("keydown", (e) => {
    keyDisplay.textContent = e.key;
  });
  
  input.addEventListener("input", (e) => {
    charCount.textContent = input.value.length;
  });
  
  input.addEventListener("keypress", (e) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  });
}

// Exercise 3: Mouse Tracker
function setupMouseTracker() {
  document.addEventListener("mousemove", (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
  });
}

// Exercise 4: Form Validation
class FormValidator {
  constructor(form) {
    this.form = form;
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    
    this.form.querySelectorAll("input").forEach(input => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearError(input));
    });
  }
  
  validateField(input) {
    const value = input.value;
    let error = null;
    
    if (input.name === "name" && !value.trim()) {
      error = "Name is required";
    }
    
    if (input.name === "email" && !value.includes("@")) {
      error = "Invalid email";
    }
    
    this.showError(input, error);
    return !error;
  }
  
  showError(input, message) {
    const errorEl = input.nextElementSibling;
    if (message) {
      errorEl.textContent = message;
      input.classList.add("error");
    } else {
      errorEl.textContent = "";
      input.classList.remove("error");
    }
  }
  
  clearError(input) {
    this.showError(input, null);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    this.form.querySelectorAll("input").forEach(input => {
      if (!this.validateField(input)) isValid = false;
    });
    if (isValid) console.log("Form submitted!");
  }
}

// Exercise 5: Event Delegation
function setupDelegation() {
  document.querySelector(".list").addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    if (item) {
      console.log("Clicked:", item.textContent);
    }
  });
}

// Exercise 6: Tab Switching
class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".tab");
    this.contents = container.querySelectorAll(".content");
    
    this.tabs.forEach(tab => {
      tab.addEventListener("click", () => this.switchTo(tab.dataset.tab));
    });
  }
  
  switchTo(tabId) {
    this.tabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabId);
    });
    this.contents.forEach(content => {
      content.classList.toggle("active", content.id === tabId);
    });
  }
}

// Exercise 8: Debounce
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
