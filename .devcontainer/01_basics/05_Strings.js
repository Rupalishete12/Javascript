const name="rupali"
const repocount=5
console.log(name + repocount + " value");

console.log('Hello my name is ${name} and my repo count is ${repocount}');

const gamename=new String('rupali');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(gamename.toUpperCase());

const newString=gamename.substring(0,4)
console.log(newString)

const anotherstring=gamename.slice(-8,4)
console.log(anotherstring);

const newString1="   rupali   "
console.log(newString1);
console.log(newString1.trim());


const url="https://rupali.com/rupali%20shete"
console.log(url.replace('%20','-'));

console.log(gamename,split('-'));