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