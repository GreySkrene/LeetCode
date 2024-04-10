// Creating Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Orange"];
let mixed = [1, "hello", true, null, undefined];
let empty = [];

// Accessing Elements
let firstElement = fruits[0]; // Accessing the first element
let lastElement = fruits[fruits.length - 1]; // Accessing the last element

// Modifying Elements
fruits[0] = "Mango"; // Changing an element
fruits.push("Grapes"); // Adding an element to the end
fruits.pop(); // Removing the last element
fruits.unshift("Pineapple"); // Adding an element to the beginning
fruits.shift(); // Removing the first element

// Iterating Over Arrays
fruits.forEach(function(fruit) {
    console.log(fruit);
});

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// Array Methods
let doubled = numbers.map(function(num) {
    return num * 2;
});

let filtered = numbers.filter(function(num) {
    return num % 2 === 0;
});

let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

// QuickSort if numbers
// MergeSort if strings
let sorted = numbers.sort(function(a, b) {
    return a - b;
});

let sliced = numbers.slice(1, 3);

let joined = numbers.join("-");

let reversed = numbers.reverse();

// Array Destructuring
let [first, second, ...rest] = fruits;
console.log(first); // "Apple"
console.log(second); // "Banana"
console.log(rest); // ["Orange"]

// Array Spread Operator
let newFruits = ["Pineapple", ...fruits, "Grapes"];
console.log(newFruits); // ["Pineapple", "Apple", "Banana", "Orange", "Grapes"]

// Checking for Array
Array.isArray(numbers); // true

// Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6
