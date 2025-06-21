let mydate=new Date()
console.log(mydate.toString);
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);    //datatype date

let mycreatedate=new Date("2023-01-14");
console.log(mycreatedate.toDateString());

let mytimestamp=Date.now();
console.log(mytimestamp);

let newDate=new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
