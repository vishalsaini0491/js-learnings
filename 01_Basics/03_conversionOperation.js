let score = 33

console.log(typeof score)
console.log(typeof (score))

score = "33a"  
console.log(typeof (score))

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)
console.log(valueInNumber) // will output NaN : Not a Number

scoreee = null
console.log(typeof (score))
scoreee = undefined
console.log(typeof (score))



let isLoggedIn =1 
isLoggedIn = ""
isLoggedIn = "vishal"

/*
    ### let booleanIsLoggedIn = Boolean(isLoggedIn) ###
    1           => true;        0 => false
    ""          => false
    "hitesh"    => true
*/
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

