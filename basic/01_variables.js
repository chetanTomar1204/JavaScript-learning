const accountId = 1129        // with const variable we can not change or alter its value 
let userName = 'chetan'
var email = 'tomar11@gmail.com'     // prefer not use var for variable assigning because of issue in block scope and function scope.
number = 9977777828                 // this is also just a way but we do not prefer to declare varibles without keywords.

let userCity;                       // in this case it will show undefined because we have not stored any value in this variable.

console.log(accountId);
console.log(number);
console.log(email);

console.table([accountId, userCity, userName, number, email])       // short way to access multiple variable at the same time.

