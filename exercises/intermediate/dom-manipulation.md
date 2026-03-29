# DOM Manipulation - Exercises

## Exercise 1: Select Elements
Create an HTML file and select:
1. An element by ID
2. All elements with a class
3. All `<li>` elements
4. The first `.card` element
5. All `.item` elements inside `.container`

## Exercise 2: Modify Content
Given HTML:
```html
<h1 id="title">Hello</h1>
<p class="description">Old text</p>
<div id="content"></div>
```
Write JavaScript to:
1. Change the h1 text to "Welcome"
2. Change the p text to "New text"
3. Add `<p>Added content</p>` to the div

## Exercise 3: Create Elements
Create a function `createList(items)` that:
1. Creates a `<ul>` element
2. Creates `<li>` for each item
3. Appends all to the `<ul>`
4. Returns the `<ul>`

## Exercise 4: Event Listeners
Create a counter with:
- A display showing the count
- A "+" button to increment
- A "-" button to decrement
- A "Reset" button

## Exercise 5: Todo List
Create a todo list that:
1. Has an input and "Add" button
2. Displays todos with delete button
3. Can mark todos as complete
4. Removes completed items

## Exercise 6: DOM Traversal
Given nested elements:
```html
<div class="card">
  <div class="content">
    <h2 class="title">Title</h2>
    <p class="text">Text</p>
  </div>
</div>
```
1. Select the h2
2. Navigate to the .card parent
3. Navigate to all siblings of the h2

---

*Solutions available in [solutions/intermediate/dom-manipulation.js](../../solutions/intermediate/dom-manipulation.js)*
