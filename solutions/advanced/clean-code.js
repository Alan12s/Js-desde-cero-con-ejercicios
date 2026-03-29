// =============================================================================
// SOLUTIONS - Clean Code
// =============================================================================

// Good Naming
const isUserLoggedIn = true;
const MAX_RETRY_COUNT = 3;
const userNames = ["Alice", "Bob"];
const hasPermission = user.role === "admin";

// Single Responsibility
function validateEmail(email) {
  return email.includes("@");
}

function saveUser(user) {
  // Save user to database
}

function sendWelcomeEmail(user) {
  // Send welcome email
}

function registerUser(userData) {
  validateUser(userData);
  const user = createUser(userData);
  saveUser(user);
  sendWelcomeEmail(user);
}

// Early Returns
function processOrder(order) {
  if (!order) return { error: "No order" };
  if (!order.items.length) return { error: "Empty order" };
  if (!order.user) return { error: "No user" };
  
  // Process order...
  return { success: true, order };
}

// Composition
const isAdult = user => user.age >= 18;
const isActive = user => user.active;
const isValidUser = user => isAdult(user) && isActive(user);

// Constants over Magic Numbers
const TAX_RATE = 0.08;
const DISCOUNT_THRESHOLD = 100;
const FREE_SHIPPING_MINIMUM = 50;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Pure Functions
function add(a, b) {
  return a + b;
}

function calculateTotal(subtotal, taxRate = 0.08) {
  return subtotal * (1 + taxRate);
}

// Avoid Side Effects
function addItemToCart(cart, item) {
  return [...cart, item]; // Return new array
}

// Descriptive Names
function processUserData(userData) { }  // Good
function calc(x) { }                     // Bad

function getUserById(id) { }
function calculateMonthlyRevenue(transactions) { }
function isUserEligibleForDiscount(user, purchaseAmount) { }

// Small Functions
function parseDate(dateString) {
  return new Date(dateString);
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// Consistent Style
const userName = "Alice";  // camelCase
const MAX_SIZE = 100;       // UPPER_SNAKE_CASE for constants
const userNames = [];       // Plural for arrays
