const name = "hitesh"
const repoCount = 50

// -------------------- USING BACKTICKS FOR PLACEHOLDERS FOR VARIABLES ---------------------------
console.log(name + repoCount + 12);
console.log(`hello, his name is ${name} and my repo count is ${repoCount}`);
//------------------------------------------------------------------------------------------------


const gameName = new String('hiteshhc'); // we are basically creating object of string type in heap
console.log(`\nBelow all examples will be on string: ${gameName} \n`);
// console.log(gameName[0]);
// console.log(gameName.___proto__);

console.log("1.) string_name.length: ", gameName.length);                        //   =>  str.length

console.log("2.) string_name.toUpperCase: ", gameName.toUpperCase());            //   =>  str.toUpperCase()

console.log("3.) string_name.charAt(2): ", gameName.charAt(2));                  //   =>  str.charAt(2)  

console.log("4.) string_name.indexOf('t'): ",gameName.indexOf('t'));             //   =>  indexof('t')          


const newString = gameName.substring(0,4);  
// can't use negative value and last index is not inclusive
console.log("5.) string_name.substring(0,4): ", newString);

const anotherString = gameName.slice(1,5);  // last index is not inclusive 
console.log("6.) string_name.slice(0,4): ", anotherString);


const anotheranotherString = gameName.slice(-8,4);  // last index is not inclusive
console.log("6.1.) string_name.slice(-8,4): ", anotheranotherString);

const newStringOne = "     hitesh   ";
console.log(`\nnewstring is used now which is: ${newStringOne}`);
console.log("7.) string_name.trim(): ",newStringOne.trim());    // removes whitespaces


const url = "https://www.priyankajangid.xyz/blogs"
console.log(`\nnewstring is used now which is: ${url}`);
console.log("8.) string_name.replace('blogs', 'contact'): ",url.replace('blogs', 'contact'))

console.log(`9.) string_name.includes('priyanka'): ${url.includes('priyanka')}`)

console.log(`\n10.) string_name.split('.'):`)
console.log(url.split('.'))



