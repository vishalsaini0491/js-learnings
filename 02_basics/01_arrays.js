/*
    array : collection of multiple items in a single variable

        1. array in JS are resizable**
        2. Mix datatype items can be present in single array
        3. JS arrays are not associative arrays: means array elements can't be accessed using arbitrary strings as indexes 
           => ese ni likh sakte for accessing : console.log(myArr["one"]); 
           => correct way: console.log(myArr[1]);

        4. Js arrays are zero indexed

        5.** Js arrays copy operations create shallow copies.

        => What is shallow copy?
        Shallow copy of an object is a copy whose properties share the same references ( point to the same underlying values). As a result, when you modify either source or the copy, you may also cause the other object to change too.

        => What is deep copy?
        Deep copy of an object is a copy whose properties don't share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be rest assured you're not causing the other object to change too.
*/

const myArr = [0,1,2,3,4,5];
const myArr2 = [0,1,2,3,4,5, true, "hitesh"];

const myHeros = ["shaktiman", "naagraj"];
console.log(myHeros[0]);

const myArr3 = new Array(1,2,3,4); // this create the array in heap  memory
/* both myArr2 and myArr3 are reference types and both stores their content in heap memory
   => References (pointers) to both of these heap objects are stored in the stack memory 
      associated with the respective variables.
*/

// Array Methods

myArr.push(0);
console.log(myArr);

myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(923);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(9)); // returns true if 9 exists else false
console.log(myArr.indexOf(3)); // returns index of 3

const newArr = myArr.join(); // creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // we see myArr is bind to newArr

// slice, splice method : returns a copy of section of array
console.log("A ", myArr);

const newArr1 = myArr.slice(1,3);
console.log("B ", newArr1);

const newArr2 = myArr.splice(1,4); // not only returns a copy of section of array but also manipulates original array by removing the mentioned section of array only from original array.
console.log("C ", newArr2);
console.log("D ", myArr);
