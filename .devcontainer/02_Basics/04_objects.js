//const tinderuser=new Object()           singleton object
const tinderuser={}                       //non singleton object
tinderuser.id="123"
tinderuser.name="sammy"
tinderuser.isloggedin=false

console.log(tinderuser);

const regularuser={
    email:"sammy@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rupali",
            lastname:"shete"

        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={7:"x",8:"z"}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
const obj3={...obj1, ...obj2}
console.log(obj3);