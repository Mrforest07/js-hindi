// Primittive data types in JS

// 7 types : string,number,boolean,null,undefined,Symbol,BigInt


// Reference(Non-Primitive) data types : Arrays, Objects,
//                                       Functions

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId); // false
console.log(id);// Symbol123


const bigNumber=637383837282829n
//console.log(bigNumber);
console.log(typeof bigNumber);//bigInt


const heros =["Ironman","Spiderman","Thor"];
let myObj = {
    name:"Aranya",
    age:22,
    isLoggedIn:true

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof null);//object
console.log(typeof myFunction);//function
console.log(typeof heros);
console.table(myObj);
