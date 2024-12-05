// their are two category of datatypes 1. primitive and 2. is non-primitive
// this categarization is based on how a data is stored and how you are accessing the stored data.

// 1. Primitive :  this datatypes are call-by-value means when you call this datatyes they gives you the copy of stored data. not the original data. and the changes does not affect original stored data.

    //7 types of primitive datatype: string, number, boolean, null, undefined, symbol, BigInt.

    const word = "chetan";
    const num = 22;
    const male = true;
    const weather = null;
    const location = undefined;
    const copies = Symbol('single');
    const bankBalance = 99947248239772483n

    console.log(typeof num);
    console.log(typeof male);
    console.log(typeof location);
    console.log(typeof weather);
    console.log(typeof copies);
    console.log(typeof bankBalance);
    

// 2. Non-primitive or (Reference type) : array, objects, functions.

const heros = ['Ironman', 'Thor', 'Black Widow', 'Hulk' ];

const detail = {
    hero: "Ironman",
    name: "Tony Stark",
    age: 48,
    status: "rich"
}

const myFunction = function(){
    console.log('eh Hello World!');
    alert("WARNING!")
}

console.log(myFunction);
console.log(typeof myFunction);


