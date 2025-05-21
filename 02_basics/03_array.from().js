/*
    array.from()
    ------------

    Array.from() is a static method that creates a new array from something that looks like
    an array (called array-like) or something you can loop through (called iterable).

    Sometimes in JavaScript, we get data that isn’t exactly an array, but behaves like one — 
    for example:
        => Strings
        => NodeLists (like what you get from document.querySelectorAll)
        => Sets
        => Maps
        => Objects with a length property

    We can't use all array methods (map, filter, etc.) on these directly.
    So, we use Array.from() to convert these into real arrays.
        ------------------------------------------------------

    # SYNTAX
      ------
      Array.from(arrayLike, mapFunction?, thisArg?)

    ------------------------------------------------------------------------------------------------------------
    | Parameter	                  |      Description                                                           |
    ------------------------------------------------------------------------------------------------------------
    | arrayLike	                  |      The thing to convert into an array (like string, Set, NodeList, etc.) |
    |                             |                                                                            |    
    | mapFunction (optional)	  |      A function to apply to each element before putting it in the array    |
    |                             |                                                                            |
    | thisArg (optional)	      |      What this should refer to in the mapFunction                          |
    ------------------------------------------------------------------------------------------------------------
*/

// converts string to an array
const word = "hello";
const result1 = Array.from(word);
console.log(result1); // ['h', 'e', 'l', 'l', 'o']

// converts a set into an array
const set = new Set([1, 2, 3]);
const result2 = Array.from(set);
console.log(result2); // [1, 2, 3]

// converts a nodelist to an array
const divs = document.querySelectorAll("div");
const divArray = Array.from(divs);

// Use the map function to transform data:
const result3 = Array.from([1, 2, 3], x => x * 2);
console.log(result3); // [2, 4, 6]

// Create an array of specific length:
const result4 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(result4); // [1, 2, 3, 4, 5]

// explaination to last example
/*
        1. { length: 5 } : This is a plain object with a length property — which behaves
                           like an array-like object to Array.from().

                        => So this acts like: [undefined, undefined, undefined, undefined, undefined]

        2. Map function (_, i) => i + 1) :
         => _ :  This is the current value at index i (we don't need it, so we name it _ as a convention) 
         => i :  This is the index (0, 1, 2, 3, 4)

        Why use _?
        In JavaScript, if a parameter isn’t used, it’s common to name it _ to signal "we're ignoring this".
        In this case, we don’t care about the value (it's just undefined), only the index.

        so, this map function returns :
        The function returns i + 1, so for each index:
        0 + 1 = 1
        1 + 1 = 2
        ...
        4 + 1 = 5
        
        Result: [1, 2, 3, 4, 5]
*/

