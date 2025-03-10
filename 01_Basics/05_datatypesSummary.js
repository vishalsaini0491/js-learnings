// Differentiation of types of datypes ----> 1. Primitive datatypes      2. Non Primitive (Reference Type) Datatypes

// Done on the basis of two things:

// 1. On the basis of how they are stored in memory
// 2. And how we can access our data


// Primitive : 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt




const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;

const outsideTemp = null;
console.log("typeof outsideTemp=null => ", typeof outsideTemp);

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)
console.log("typeof anotherId= Symbol('123) => ", typeof anotherId);

const bigNumber = 32099290931099013908132n
console.log("typeof bigNumber= 32099290931099013908132n => ", typeof bignumber)

// Non Primitive Datatypes / Reference (Non Primitive)

// Array, objects, functions  => all of their return type comes out to be object onlyvnhf7

// array
const heros = ["shaktimaan", "naagraj", "doga"];
console.log("typeof heros (Array) => ", typeof heros);


// objects: curly braces containing key-value pair
let myObj = {
    // objects
    name: "hitesh",
    age: 22,
}
console.log("typeof myObj (object) => ", typeof myObj);

// function
const myFunction = function(){
    console.log("hello World");
}

console.log("typeof myFunction = function(){} => ",typeof myFunction); // type : object function


// https://262.ecma-international.org/5.1/#sec-11.4.3

