// Define variables
const name = `hitesh`;
const repoCount = 50;

// Using backticks for placeholders in template literals
console.log(name + repoCount + "Ram");
console.log(`Hello, his name is ${name} and his repo count is ${repoCount}`);

// Creating a string object
const gameName = new String(`hiteshhc`);
console.log(`\nBelow are examples demonstrating string methods on: ${gameName}\n`);

// String length
console.log(`1.) string_name.length: ${gameName.length}`);

// Convert to uppercase
console.log(`2.) string_name.toUpperCase(): ${gameName.toUpperCase()}`);

// Get character at a specific index
console.log(`3.) string_name.charAt(2): ${gameName.charAt(2)}`);

// Get index of a character
console.log(`4.) string_name.indexOf('t'): ${gameName.indexOf('t')}`);

// Extract substring (Note: End index is not inclusive, and negative indices are not allowed)
const newString = gameName.substring(0, 4);
console.log(`5.) string_name.substring(0,4): ${newString}`);

// Extract slice (Supports negative indices, end index is not inclusive)
const anotherString = gameName.slice(1, 5);
console.log(`6.) string_name.slice(1,5): ${anotherString}`);

const anotherAnotherString = gameName.slice(-8, 4);
console.log(`6.1.) string_name.slice(-8,4): ${anotherAnotherString}`);

// Trim whitespace from a string
const newStringOne = `     hitesh   `;
console.log(`\nNew string being used: '${newStringOne}'`);
console.log(`7.) string_name.trim(): ${newStringOne.trim()}`);

// String replace method example
const url = `https://www.priyankajangid.xyz/blogs`;
console.log(`\nURL being used: '${url}'`);
console.log(`8.) string_name.replace('blogs', 'contact'): ${url.replace('blogs', 'contact')}`);

// Check if string contains a substring
console.log(`9.) string_name.includes('priyanka'): ${url.includes('priyanka')}`);

// Split string by a delimiter
console.log(`10.) string_name.split('.'): ${url.split('.')}`);
