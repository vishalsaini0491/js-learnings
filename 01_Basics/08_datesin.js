// DATE
/*
    JS Date object represent a single moment in time in a platform-independent format.

    => Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());  
console.log(myDate.toLocaleString('en-IN'));  
console.log(myDate.toDateString());  
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23); // in this format month starts from , 00

let myCreatedDate2 = new Date(2023, 11, 23, 5, 4);

let myCreatedDate3 = new Date("2023-01-14"); // in this format month starts from 01

let myCreatedDate4 = new Date("01-14-2027"); // in this format month starts from 01

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

console.log("myTimeStamp value", myTimeStamp); // outputs in millisecond
console.log(myCreatedDate.getTime()); // this is giving answer in milliseconds
console.log(Math.floor(Date.now()/1000)); // milliseconds got converted to seconds

let newDate = new Date();
console.log(newDate.toString());
console.log(newDate.getMonth()); // months starting from 0
console.log(newDate.getDay()); // mon =1, tues = 2

newDate = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log("asdfa", newDate); 