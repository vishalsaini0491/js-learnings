// let score = 33

// console.log(typeof score)
// console.log(typeof (score))

// score = "33a"  
// console.log(typeof (score))

// let valueInNumber = Number(score) 
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // will output NaN : Not a Number

// scoreee = null
// console.log(typeof (score))
// scoreee = undefined
// console.log(typeof (score))



// let isLoggedIn =1 
// isLoggedIn = ""
// isLoggedIn = "vishal"

// /*
//     ### let booleanIsLoggedIn = Boolean(isLoggedIn) ###
//     1           => true;        0 => false
//     ""          => false
//     "hitesh"    => true
// */
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

//  ******************** Operations ****************************

// let value =3 
// let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)  // 12
console.log(1 + "2")  // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32


console.log(+true)  // 1
console.log(+"")    // 0

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2         // looks bad in terms of code reusability

let gameCounter = 100
gameCounter++;  // post increment
++gameCounter;  // pre increment
console.log(gameCounter);