const name="aranya"
const repo=50

console.log(`Hello my name is ${name} and my repo count is ${repo}`);


const gameName=new String('aranya-d')

console.log(gameName[0]);
console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const newStringOne= "    forest    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://forest.com/forest%20bro"

console.log(url.replace('%20', '-'))

console.log(url.includes('forest'))

console.log(gameName.split('-'));
