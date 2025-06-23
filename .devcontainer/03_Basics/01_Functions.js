
function saymyname(){
    console.log("Rupali");
    console.log("shete");

}
saymyname()

function addtwono(num1,num2){
    let result=num1+num2
    return result
    console.log("rup");
  //console.log(num1+num2);

}
addtwono(3,"4")

function loginuser(username){
    return '${username} just logged in'
}
console.log(loginuser("rupali"))


function calculatecartprice(...num1) {                 //raise operator-warp the value
    return num1
}              
//console.log(calculatecartprice(200,400,500))
const user={
    username:"rupali",
    price:199
}
function handleobject(anyobject){
    console.log('usename is ${anyobject.username} and price is ${anyobject.price}');
}
//handleobject(user);
handleobject({
    username:"rupali",
    price:800
})

const myarr=[200,400,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue([200,400,500,1000]));