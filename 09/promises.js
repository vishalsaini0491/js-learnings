// Creating a new Promise instance that simulates an asynchronous task
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asynchronous task 1 is complete.');
        resolve(); // Indicates the task has been successfully completed
    }, 1000);
});

// Example of performing asynchronous tasks
// e.g., database queries, cryptography, or network operations
promiseOne.then(function(){
    console.log("Promise 1 has been resolved and consumed.");
});

// It’s not mandatory to store the promise instance in a variable
// A new Promise can be directly created and consumed as shown below
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynchronous task 2 is complete.");
        resolve();
    }, 1000); // Set a delay of 1000 ms
}).then(function(){
    console.log("Promise 2 has been resolved and consumed.");
});

// Another example: resolving the promise with data
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynchronous task 3 is complete.")
        // The resolve() method can pass data (e.g., objects, arrays, etc.)
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promisethree.then(function(user){
    console.log("Promise 3 has been resolved and consumed")
    console.log(user); // Logs the data passed to resolve()
});

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Hitesh", password: "124"}); // Resolving with user data
        } else {
            reject('ERROR: SOMETHING WENT WRONG'); // Rejecting with an error message
        }
    }, 1000);
});

// Using .then() chaining to avoid callback hell and maintain readability
promisefour
.then(function(user){
    console.log("Promise resolved with user data:", user);
    // Return data to be used in the next .then()
    return user.username;
})
.then(function(username){
    console.log("Extracted username:", username);
})
.catch(function(error){
    // This will handle any errors from above .then() or the promise itself
    console.log("Error encountered:", error);
})
.finally(function(){
    // This will execute regardless of resolve/reject
    console.log("Promise has been settled (either resolved or rejected).");
});


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "1242323"}); // Resolving with user data
        } else {
            reject('ERROR: JS WENT WRONG'); // Rejecting with an error message
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // this response also takes time to convert into json, so isse bhi await karana padega
        console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();


// chaining of .then() : database ke connection karte time kaam aata hai

/*
    Here’s why this approach avoids nested callbacks:

✅ Each .then() returns a new Promise, allowing for a linear, readable chain
✅ This avoids deeply nested setTimeout or other callbacks (which was the core issue with callback hell)

*/

/*
The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.
*/

fetch('https://api.github.com/users/vishalsaini0491')
.then( (response)=> {
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch( (error) => console.log(error))