const newName = "chetan";
const score = 99;

// console.log(newName + score + "this is total score");      //This is old way to concatinate string, now not in trend.

// console.log(`My name is ${newName} and my score is ${score}.`);    // this is how you write javascript nowadays.

const name = new String("chetan");              // other way to diclare datatype. and it is a object we can access char.

// console.log(name[4]);                       // this are all the functions and methods for menuplating string in js.
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.indexOf("a"));
// console.log(name.charAt(5));

// const naam = new String("The quick brown fox jumps over the lazy dog.");     // we can slice, trim, and preform other operations.
// console.log(naam.substring(0));       
// console.log(naam.substring(0,44));       
// console.log(naam.substring(-1,31));
// console.log(naam.substring(31,-1));
// console.log(naam.slice(31,-1));
// console.log(naam.slice(-10,-1));
// console.log(naam.slice(10,20));


// const OneName = new String("     singh  ");     // can remove spaces from string.
// console.log(OneName.trim());

// const phrase = "The quick brown fox jumps over the lazy dog."       // returns arrey of splited value.
// console.log(phrase.split(' '))


// const str1 = "To be, or not to be, that is the question.";          // startswith > returns true or false.
// console.log(str1.startsWith('To'));
// console.log(str1.startsWith('t t',12));


const stringObject = new String('favorait');            // can convert any data's type. > object to string.
console.log(stringObject);
console.log(typeof stringObject);

let toObject = stringObject.toString() 
console.log(typeof toObject);

console.log(toObject.valueOf());            // Return's strings value.





