let score = "55";       // conversion in Number.

console.log(score)
console.log(typeof (score));

// what if we change its type to string.
let convertedValue = Number(score);

console.log(typeof convertedValue);

// 55 => 55 (gives number because it is a number duhh).
// "55" => string but convert in number.
// "55abc" => converst's in number but also gives NaN.
// "null" => converst's in number and give zero.
// "boolean" => give's and convert in 1 and 0
// "undefined" => it also dont give error but give NaN.


let isBool = "chetan";         // conversion in boolean.

console.log(typeof isBool);

let isABoolean = Boolean(isBool);
console.log(isABoolean);

// "" => gives false (0).
// 1 => gives true (1).
// "chetan" => also gives true.

