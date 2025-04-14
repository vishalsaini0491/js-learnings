const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/*
marvel_heros.push(dc_heros); // // don't merges both arrays, this push the new array like this: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros); 
console.log(marvel_heros[3][1]);

*/
// OTHER SYNTAX FOR DOING ABOVE THING
marvel_heros.concat(dc_heros); // this returns new arry and not directly merge to 
console.log(marvel_heros);