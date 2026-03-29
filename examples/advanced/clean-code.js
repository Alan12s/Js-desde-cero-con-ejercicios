// =============================================================================
// CLEAN CODE - Examples
// =============================================================================

// Good naming
const isUserLoggedIn = true;
const MAX_RETRY_COUNT = 3;
const userNames = ["Alice", "Bob"];

// Single responsibility
function validateEmail(email) {
  return email.includes("@");
}
function saveUser(user) {
  // Save logic
}
function sendWelcomeEmail(user) {
  // Email logic
}

// Early returns
function processOrder(order) {
  if (!order) return { error: "No order" };
  if (!order.items.length) return { error: "Empty order" };
  return { success: true };
}

// Composition
const isAdult = user => user.age >= 18;
const isActive = user => user.active;
const isValidAdultUser = user => isAdult(user) && isActive(user);

// Constants over magic numbers
const TAX_RATE = 0.08;
const DISCOUNT_THRESHOLD = 100;
const FREE_SHIPPING_MINIMUM = 50;
