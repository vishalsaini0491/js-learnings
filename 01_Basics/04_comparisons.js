// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);



// not comparing same datatype
// compiler implicityly automatical converting both into same datatypes
// console.log("1" > 1);       
// console.log("02" > 1);  



// --------------------------------------------------------------------------------------------------------

/*

     @brief  Comparisons convert null to a number, treating it as 0. 

     But, In case of equals it doesn't works in same way i.e. it is not converted to 0.
*/
// console.log(null > 0);
// console.log(null >= 0);  // true
// console.log(null == 0);
// console.log(null == null); // true
// console.log(null == undefined); // true
// console.log(null < 0);
// console.log(null <= 0); // true


// THIS IN ALL CASES RETURN FALSE ONLY
// console.log(undefined == 0);
// console.log(undefined <= 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// WE HAVE TO AVOID ABOVE TYPE OF CONVERSIONS

// --------------------------------------------------------------------------------------------------------

// === : STRICT CHECK (NOT ONLY CHECKS VALUES BUT ALSO DATA TYPE)

console.log("2" === 2);
console.log("2" === "2");
console.log("one" == 1); // return false only
