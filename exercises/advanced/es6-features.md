# ES6+ & Array Methods - Exercises

## Exercise 1: Destructuring
Given this data:
```javascript
const { name, address: { city, zip }, preferences: [theme, language] }
```
Create a matching object and destructure it.

## Exercise 2: Spread Operator
1. Clone an array without mutation
2. Merge two objects
3. Use rest parameters to get the sum of first two numbers and the rest

## Exercise 3: Array Methods
Given:
```javascript
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Shirt", price: 30, category: "clothing" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Pants", price: 50, category: "clothing" }
];
```
1. Get all electronics
2. Get product names
3. Calculate total price
4. Find most expensive
5. Group by category

## Exercise 4: Chaining Methods
Transform this:
```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
To: [4, 6, 8, 10] (even numbers doubled)

## Exercise 5: Custom Filter/Map
Implement your own versions of:
- myFilter(array, predicate)
- myMap(array, transform)

## Exercise 6: Classes
Create a User class with:
- Constructor with name, email
- Method greet()
- Static method create(data)
- Private field #password

## Exercise 7: Optional Chaining
Safely access deeply nested properties with optional chaining.

---

*Solutions available in [solutions/advanced/es6-features.js* and *solutions/advanced/array-methods.js](../../solutions/advanced/)*
