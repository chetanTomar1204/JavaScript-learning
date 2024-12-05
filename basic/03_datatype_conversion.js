let score = "55";       // conversion in Number.

// console.log(score)
// console.log(typeof (score));

// what if we change its type to string.
let convertedValue = Number(score);

// console.log(typeof convertedValue);

// 55 => 55 (gives number because it is a number duhh).
// "55" => string but convert in number.
// "55abc" => converst's in number but also gives NaN.
// "null" => converst's in number and give zero.
// "boolean" => give's and convert in 1 and 0
// "undefined" => it also dont give error but give NaN.


let isBool = "chetan";         // conversion in boolean.

// console.log(typeof isBool);

// let isABoolean = Boolean(isBool);
// console.log(isABoolean);

// "" => gives false (0).
// 1 => gives true (1).
// "chetan" => also gives true.




/*##################################################        Operations      ##############################################*/

let value = 13
let negValue = -value       // will return negetive value.
// console.log(value);
// console.log(negValue);

// other normal operations 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let firstName = "chetan ";      // this give's obvious output.
let lastName = "tomar";
let fullName = firstName + lastName;
// console.log(fullName);
// console.log(typeof fullName);


// console.log("1" + 2);           // now this give's some interesting output.  => it converts whole output based on first datatype js come across.
// console.log(1 + "2");           // returns => 12
// console.log(1 + 2 + "2");       // returns => 32
// console.log("1" + 2 + 2 );      // returns => 122
// console.log((3 * 4)+ 33 - 14)   // it not recommended to write code like this.

let num1, num2, num3
num1 = num2 = num3 = 4
// console.log(num1, num2, num3);      // but this not the best way to declare variables.

// do checkout prefix and postfix operations in javascript.
let gameScore = 100;
gameScore++;
console.log(gameScore);


 





