let c=300           //global

if(true){
let c=10;           //local scope
const b=20;

}
console.log(c);
//console.log(b);

function one(){
    const username="rupali"

    function two(){
        const website="youtube"
        console.log(username);
}
//console.log(website);
two()
}
one()

if(true){
    const username="rupali"
    if(username== "rupali"){
        const website=" youtube"
        console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//+++ interesting//

addone()                            //hosting-before using
function addone(num){
    return num + 1

}
console.log(addone(5))
const addtwo=function(num){
    return num + 2
}
addtwo(5)