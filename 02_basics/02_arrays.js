const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman",  , "Krish"];

/*
marvel_heros.push(dc_heros); // // don't merges both arrays, this push the new array like this: 
    [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros); 
console.log(marvel_heros[3][1]);
*/

// OTHER SYNTAX FOR DOING ABOVE THING
marvel_heros.concat(dc_heros); 

/**
 *       The Array.prototype.concat() method creates a new array by combining the elements of the original arrays
 *       and return that new array. However, this combination is shallow, meaning:
 *       => Primitive values (e.g., strings, numbers) are copied by value.
 *       => Objects and arrays within the original arrays are copied by reference.
 */

console.log(marvel_heros); // this will just return normal unaltered array

let newArr = marvel_heros.concat(dc_heros);
console.log(newArr); // now this will print merged array 

/**
 *          A sparse array is an array in which not all indexes have values assigned. 
 *          => ex: const sparseArray = [1, , 3];
 * 
 *          NOTE: concat() method preserves empty slots and maintains sparse structure.   
 */

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const arrayInArray = [1, [12,31, ,12], [12,241,[12,21, ,3], 2], ]; 
const allElements = arrayInArray.flat(Infinity); // don't preserves empty slots or say don't maintains sparse structure
console.log(allElements);

console.log(Array.isArray(allElements)) // tells if given argument is array or not?


console.log(Array.from("Hitesh")) // converts a string to an array 
console.log(Array.from({name: "hitesh"})) // interesting



/*
    The Array.of() static method creates a new Array instance from a variable number of arguments,
    regardless of number or type of the arguments.
*/
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
