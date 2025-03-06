const accountId = 144553
let accountEmail = "vishal@gmail.com"
var accountPasswrod = "12345"
accountCity = "Jaipur"
let accountState

/*
    Prefer not to use var
    => Becz of issue in block scope and functional scope
*/

// accountId =2 ---> NOT ALLOWED

accountEmail = "jsd@gmail.com"
accountPassword = "1lkj"
accountCity = "Bengaluru"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
