// =============================================================================
// SOLUTIONS - Loops
// =============================================================================

// Exercise 1: Count to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2: Sum Array
function sumArray(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

// Exercise 3: Find Maximum
function findMax(arr) {
  return Math.max(...arr);
  // Or: arr.reduce((max, n) => n > max ? n : max, arr[0]);
}

// Exercise 4: Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Exercise 5: Reverse Array
function reverseArray1(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseArray2(arr) {
  const result = [];
  let i = arr.length - 1;
  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
}

function reverseArray3(arr) {
  const result = [];
  for (const item of arr) {
    result.unshift(item);
  }
  return result;
}

// Exercise 6: Fibonacci
function fibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i-1] + result[i-2]);
  }
  return result.slice(0, n);
}

// Exercise 7: Find First Even
function findFirstEven(arr) {
  for (const num of arr) {
    if (num % 2 === 0) return num;
  }
  return null;
}

// Exercise 8: Multiplication Table
function createTable() {
  let table = "";
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
      row += (i * j).toString().padStart(4);
    }
    table += row + "\n";
  }
  return table;
}
