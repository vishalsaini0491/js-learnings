const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/*
marvel_heros.push(dc_heros); // // don't merges both arrays, this push the new array like this: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros); 
console.log(marvel_heros[3][1]);
*/

// OTHER SYNTAX FOR DOING ABOVE THING
marvel_heros.concat(dc_heros); // returns new array and not directly merge/ alter any arrays provided as arguments but returns a shallow copy that contains same elements as the ones from the original arrays.

console.log(marvel_heros); // this will just return normal unaltered array

let newArr = marvel_heros.concat(dc_heros);
console.log(newArr); // now this will print merged array 

/**
 * 
 *          A sparse array is an array in which not all indexes have values assigned. 
 *          => ex: const sparseArray = [1, , 3];
 * 
 *          NOTE: concat() method preserves empty slots and maintains sparse structure.
 * 
 *          
 */

newArr[0] = "Vishal";
console.log(marvel_heros);
