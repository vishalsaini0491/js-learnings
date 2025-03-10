"use strict";

const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + 12);

console.log(`hello, his name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc'); 
// we are basically creating object of string type in heap

// console.log(gameName[0]);
// console.log(gameName.___proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(indexOf('t'));

const newString = gameName.substring(0,4);  // can't use negative value
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const anotheranotherString = gameName.slice(-7,4);
console.log(anotheranotherString);

