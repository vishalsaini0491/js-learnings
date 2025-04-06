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
console.log(Math.max(4,1,21,12,12,1212,123523));


// **********************************IMPORTANT*****************************************************
console.log(Math.random()); //Returns a floating-point number between 0 and <1

console.log(Math.random()* 10 + 1);

// should only return value between 1 to 6
const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min );

/*
        f[x] = y   => range : [0,1)
        To change the range of function between 1 to 6 what we should do ?

        => Changed function: g[x] = a* f[x] + b 
        where, a= scaling factor, which scales the range = new length / old length => (length = max - min + 1) and old length
                                                                                       in case of Math.random() is always: 1
               b= shifts the range
        
        IN OUR CASE:
        [0,1) -> [1,6]

        => a = new length / old length = (6-1 + 1) / (1-0) = 6
        [0,1) -> [0, 6)
        and so far, our function is : f[x] * (a)

        => now, we want to shift the range to start from 1 so we add 1 
        [0,1) -> [1, 7) 
        and now, our function becomes : f[x] * (a) + (b) = g(x)

        now, taking floor function of g(x) => its range becomes: {1,2,3,4,5,6}

*/

//********************************IMPORTANT*****************************************************

