# Arrays and Objects - Exercises

## Exercise 1: Array Basics
Given `const arr = [1, 2, 3, 4, 5]`:
1. Add 6 to the end
2. Add 0 to the beginning
3. Remove the last element
4. Remove the first element
5. Find the index of 3
6. Check if 5 exists

## Exercise 2: Array Methods
Given `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`:
1. Get all even numbers
2. Get all numbers doubled
3. Calculate the sum
4. Find the first number greater than 5

## Exercise 3: Object Basics
Create a `book` object with:
- title
- author
- year
- isAvailable (boolean)
Then:
1. Add a pages property
2. Update the year
3. Toggle isAvailable
4. Delete the author property

## Exercise 4: Destructuring
Given:
```javascript
const person = { name: "Alice", age: 30, city: "NYC", job: "Developer" };
const colors = ["red", "green", "blue", "yellow"];
```
1. Destructure name and age from person
2. Use rest operator to get remaining properties
3. Destructure first and third colors

## Exercise 5: Object Methods
Given:
```javascript
const user = { name: "Bob", scores: [85, 92, 78, 95] };
```
Create a function that returns:
```javascript
{
  name: "Bob",
  highestScore: 95,
  averageScore: 87.5
}
```

## Exercise 6: Array of Objects
Given:
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
```
1. Find all users aged 25
2. Get all user names
3. Find the average age

## Exercise 7: Transform with map
Create a function that transforms:
```javascript
["hello", "world"] → ["HELLO", "WORLD"]
[{name: "Alice"}, {name: "Bob"}] → ["Alice", "Bob"]
```

---

*Solutions available in [solutions/fundamentals/arrays-objects.js](../../solutions/fundamentals/arrays-objects.js)*
