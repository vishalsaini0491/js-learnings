const accountId = 144553
let accountEmail = "vishal@gmail.com"
var accountPasswrod = "12345"
accountCity = "Jaipur"
let accountState

/*
    Prefer not to use var
    => Becz of issue in block scope and functional scope
   
    => var is function-scoped, meaning it is accessible throughout the entire function, even outside the block where it was declared.
    => let is block-scoped, meaning it is only accessible within the block {} where it was declared.
    
*/

// accountId =2 ---> NOT ALLOWED

accountEmail = "jsd@gmail.com"
accountPassword = "1lkj"
accountCity = "Bengaluru"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
