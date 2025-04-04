const score = 400 
const balance = new Number(100)
console.log(balance);  
console.log(balance.toString().length);  // using string function on 'Number'
console.log(balance.toFixed(2));  // deciding precision after decimal point

const otherNumber = 11223323.8966 
console.log(otherNumber.toPrecision(10));
console.log(otherNumber.toLocaleString());  // returns the number as a string, using local language format, the lang. format depends on the locale setup on your computer
console.log(otherNumber.toLocaleString('en-IN'));  

let maxNumber = Number.MAX_SAFE_INTEGER.toLocaleString('en-IN');  // Represents the maximum integer that can be safely represented without losing precision.
console.log(maxNumber);
maxNumber = Number.MAX_VALUE; //	Largest finite representable number (float)
console.log(maxNumber);

// MATH

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.96));
console.log(Math.floor(4.96));
console.log(Math.ceil(4.96));
