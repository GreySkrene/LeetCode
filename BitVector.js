// Initialize a bit vector of size 32,000 with all values set to false
let bitVector = Array(32000).fill(false);

// Example usage: set the bit at index 100 to true
let index = 100;
bitVector[index] = true;

// Example usage: get the value of the bit at index 200
index = 200;
let isSet = bitVector[index];
console.log(isSet); // Output: false
