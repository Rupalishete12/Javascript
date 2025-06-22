//object literals

const mysym=Symbol("key1")

const juser={
    name:"rupali",
    age:18,
    [mysym]:"mykey1",
    location:"jaipur",
    email:"rupali@gmail.com",
 //   lastlogindays:["monday","saturday"]
}

//access object
console.log(juser.email)
console.log(juser["email"])

juser.email="rupalishete@gmail.com"
Object.freeze(juser)
juser.email="shete@gmail.com"
console.log(juser);

juser.greeting=function(){
console.log("hello user");
}
console.log(juser.greeting());