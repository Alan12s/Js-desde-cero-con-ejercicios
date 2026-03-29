// =============================================================================
// CONDITIONALS - Examples
// =============================================================================

// -----------------------------------------------------------------------------
// if Statement
// -----------------------------------------------------------------------------

const temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
}

// With block
if (temperature > 30) {
  console.log("It's hot!");
  console.log("Stay hydrated!");
}

// -----------------------------------------------------------------------------
// if...else Statement
// -----------------------------------------------------------------------------

const age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young to vote");
}

// -----------------------------------------------------------------------------
// if...else if...else
// -----------------------------------------------------------------------------

const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// -----------------------------------------------------------------------------
// switch Statement
// -----------------------------------------------------------------------------

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular day");
}

// Fall through example
const fruit = "apple";
switch (fruit) {
  case "apple":
  case "cherry":
  case "strawberry":
    console.log("Red fruit");
    break;
  case "banana":
  case "lemon":
    console.log("Yellow fruit");
    break;
}

// -----------------------------------------------------------------------------
// Ternary Operator
// -----------------------------------------------------------------------------

const age = 20;
const status = age >= 18 ? "adult" : "minor";

// Assign to variable
const greeting = isLoggedIn ? "Welcome back!" : "Please log in";

// In expressions
const price = isMember ? 50 : 100;
const finalPrice = price * 0.9;

// -----------------------------------------------------------------------------
// Nullish Coalescing
// -----------------------------------------------------------------------------

const value1 = null ?? "default";      // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";         // 0 (not nullish)
const value4 = "" ?? "default";        // "" (not nullish)

// Practical use
const userTheme = userSettings.theme ?? "light";
const userName = user.name ?? "Guest";
const userAge = user.age ?? 0;

// -----------------------------------------------------------------------------
// Logical Operators in Conditionals
// -----------------------------------------------------------------------------

// AND - both must be true
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// OR - at least one must be true
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Day off!");
}

// NOT - negate condition
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}

// Combining operators
const age2 = 20;
const income = 50000;
const hasJob = true;

if ((age2 >= 18 && age2 <= 65) && (hasJob || income > 30000)) {
  console.log("Eligible for loan");
}

// -----------------------------------------------------------------------------
// Complex Conditions
// -----------------------------------------------------------------------------

// Named conditions for readability
const isAdult = age >= 18;
const hasValidLicense = hasLicense && !isExpired;
const hasSufficientIncome = income > 30000;

if (isAdult && hasValidLicense && hasSufficientIncome) {
  console.log("Eligible for loan");
}

// -----------------------------------------------------------------------------
// Early Returns
// -----------------------------------------------------------------------------

function validateForm(data) {
  if (!data) return { valid: false, error: "No data" };
  if (!data.name) return { valid: false, error: "Name required" };
  if (!data.email) return { valid: false, error: "Email required" };
  
  return { valid: true };
}

// -----------------------------------------------------------------------------
// Object Map Instead of switch
// -----------------------------------------------------------------------------

const getDayMessage = (day) => {
  const messages = {
    Monday: "Start of work week",
    Friday: "End of work week!",
    Saturday: "Weekend!",
    Sunday: "Weekend!"
  };
  
  return messages[day] || "Regular day";
};

console.log(getDayMessage("Friday")); // "End of work week!"
