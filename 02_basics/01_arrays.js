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
        Shallow copy of an object is a copy whose properties share the same references ( point to the same underlying values). As a result, when you either source or the copy, you may also cause the other object to change too.

        => What is deep copy?
        Deep copy of an object is a copy whose properties don't share the same references (point to the same underlying values) as those of the source objectfrom which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
*/

const myArr = [0,1,2,3,4,5];
const myArr2 = [0,1,2,3,4,5, true, "hitesh"];

const myHeros = ["shaktiman", "naagraj"];
console.log(myHeros[0]);

const myArr3 = new Array(1,2,3,4);

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