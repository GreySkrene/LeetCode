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


/*
Array Methods:

concat(array1, array2, ..., arrayN): Combines two or more arrays.
filter(callback): Creates a new array with elements that pass the test implemented by the provided function.
forEach(callback): Calls a function for each element in an array.
indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array.
join(separator): Joins all elements of an array into a string.
map(callback): Creates a new array with the results of calling a provided function on every element in the array.
pop(): Removes the last element from an array and returns that element.
push(element1, element2, ..., elementN): Adds one or more elements to the end of an array and returns the new length.
reduce(callback, initialValue): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
reverse(): Reverses the order of the elements in an array.
shift(): Removes the first element from an array and returns that element.
slice(startIndex, endIndex): Extracts a section of an array and returns a new array.
sort(compareFunction): Sorts the elements of an array.
splice(startIndex, deleteCount, item1, item2, ..., itemN): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
toString(): Converts an array to a string.
unshift(element1, element2, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length.

*/