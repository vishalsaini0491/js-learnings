// Singleton: A singleton is a design pattern that ensures only one instance of an object exists in the entire runtime.

// ctor se object banega to hamesha singleton banega

// 1. object literals:

const mySym = Symbol("key"); // Symbol: A Symbol is a primitive data type whose instances are unique and immutable.  
                              // It is used primarily to create unique identifiers for object properties — especially to 
                              // avoid name collisions.
const jsUser = {
    name: "hitesh",
    0: "ram",
    age: 23,
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"],
    "full name": "Hitesh Chaudary",
    [mySym] : "mykey1"
};

console.log(jsUser.email);
console.log(jsUser["email"]); 

// console.log(jsUser."full name"); or console.log(jsUser.full name);  -----> X can't access "full name" property like this 
console.log(jsUser["full name"]);

console.log(typeof 0);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "hiteshchaudary.aafacom";
// Object.freeze(jsUser); // this will stop any changes to propagate made further in the code in the object
jsUser.email = "chatfpt.afa;@.com"
console.log(jsUser.email);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
};

console.log(jsUser.greeting());
console.log(jsUser.greeting); // prints function's reference, function is not executed

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(jsUser.greeting2());