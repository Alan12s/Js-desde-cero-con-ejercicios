class Calculator {
  constructor() {
    this.currentNumber = "0";
    this.previousNumber = null;
    this.operation = null;
    this.shouldResetDisplay = false;
    this.display = document.getElementById("display");
    
    this.init();
  }
  
  init() {
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => this.handleButton(button.dataset.value));
    });
    
    document.addEventListener("keydown", (e) => this.handleKeydown(e));
  }
  
  handleButton(value) {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(value)) {
      this.inputNumber(value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      this.inputOperation(value);
    } else if (value === "=") {
      this.calculate();
    } else if (value === "C") {
      this.clear();
    } else if (value === "CE") {
      this.backspace();
    }
  }
  
  handleKeydown(e) {
    const key = e.key;
    if (/[0-9.]/.test(key)) {
      this.inputNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      this.inputOperation(key);
    } else if (key === "Enter" || key === "=") {
      e.preventDefault();
      this.calculate();
    } else if (key === "Backspace") {
      this.backspace();
    } else if (key === "Escape" || key === "c") {
      this.clear();
    }
  }
  
  inputNumber(num) {
    if (this.shouldResetDisplay) {
      this.currentNumber = num === "." ? "0." : num;
      this.shouldResetDisplay = false;
    } else {
      if (num === "." && this.currentNumber.includes(".")) return;
      this.currentNumber = this.currentNumber === "0" && num !== "."
        ? num === "." ? "0." : num
        : this.currentNumber + num;
    }
    this.updateDisplay();
  }
  
  inputOperation(op) {
    if (this.previousNumber !== null && !this.shouldResetDisplay) {
      this.calculate();
    }
    this.previousNumber = parseFloat(this.currentNumber);
    this.operation = op;
    this.shouldResetDisplay = true;
  }
  
  calculate() {
    if (this.operation === null || this.shouldResetDisplay) return;
    
    const current = parseFloat(this.currentNumber);
    let result;
    
    switch (this.operation) {
      case "+": result = this.previousNumber + current; break;
      case "-": result = this.previousNumber - current; break;
      case "*": result = this.previousNumber * current; break;
      case "/": result = current !== 0 ? this.previousNumber / current : "Error"; break;
    }
    
    this.currentNumber = result.toString();
    this.operation = null;
    this.previousNumber = null;
    this.shouldResetDisplay = true;
    this.updateDisplay();
  }
  
  clear() {
    this.currentNumber = "0";
    this.previousNumber = null;
    this.operation = null;
    this.shouldResetDisplay = false;
    this.updateDisplay();
  }
  
  backspace() {
    if (this.shouldResetDisplay) return;
    this.currentNumber = this.currentNumber.length > 1
      ? this.currentNumber.slice(0, -1)
      : "0";
    this.updateDisplay();
  }
  
  updateDisplay() {
    let displayValue = this.currentNumber;
    
    if (displayValue.length > 12) {
      displayValue = parseFloat(displayValue).toExponential(6);
    }
    
    if (this.previousNumber !== null && this.operation !== null) {
      displayValue = `${this.previousNumber} ${this.operation} ${this.currentNumber}`;
    }
    
    this.display.textContent = displayValue;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
});
