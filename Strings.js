// Original string
const str = 'Hello, world!';

// Accessing characters
console.log(str[0]);          // Output: H
console.log(str.charAt(7));   // Output: w

// String length
console.log(str.length);      // Output: 13

// Substring
console.log(str.substring(7, 12));  // Output: world
console.log(str.slice(7, 12));      // Output: world

// Splitting
const words = str.split(', ');
console.log(words);         // Output: ['Hello', 'world!']

// Joining
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.join(', '));   // Output: Apple, Banana, Orange

// Concatenation
const firstName = 'John';
const lastName = 'Doe';
console.log(firstName + ' ' + lastName);  // Output: John Doe

// Replacing
const newStr = str.replace('world', 'everyone');
console.log(newStr);        // Output: Hello, everyone!

// Case conversion
console.log(str.toUpperCase());   // Output: HELLO, WORLD!
console.log(str.toLowerCase());   // Output: hello, world!

// Searching
console.log(str.indexOf('world'));   // Output: 7
console.log(str.includes('world'));  // Output: true

// Mapping
const charArray = str.split('').map((char, index) => `${char}-${index}`);
console.log(charArray);
// Output: ["H-0", "e-1", "l-2", "l-3", "o-4", ",-5", " -6", "w-7", "o-8", "r-9", "l-10", "d-11", "!-12"]

// parseInt() and parseFloat()


/*
String Methods:

charAt(index): Returns the character at the specified index in a string.
charCodeAt(index): Returns the Unicode value of the character at the specified index.
concat(str1, str2, ..., strN): Combines two or more strings.
indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.
lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string.
match(regexp): Retrieves the matches when matching a string against a regular expression.
replace(searchValue, replaceValue): Replaces a specified value with another value in a string.
slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string.
split(separator, limit): Splits a string into an array of substrings.
substr(startIndex, length): Extracts a specified number of characters from a string, starting at a specified index.
substring(startIndex, endIndex): Extracts the characters between two specified indices.
toLowerCase(): Converts a string to lowercase letters.
toUpperCase(): Converts a string to uppercase letters.
trim(): Removes whitespace from both ends of a string.

Number Methods:

parseInt(string, radix): Parses a string and returns an integer.
parseFloat(string): Parses a string and returns a floating-point number.
isNaN(value): Determines whether a value is NaN (Not-a-Number).
toFixed(digits): Formats a number using fixed-point notation.
toPrecision(precision): Formats a number to a specified precision in scientific or fixed-point notation.
toString(radix): Converts a number to a string.


typeof var === 'string'
typeof var === 'number'
Number.isInteger(var) === true or false // to find float
*/