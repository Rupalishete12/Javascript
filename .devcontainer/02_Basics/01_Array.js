//collection multiple item on same array
//js array retype
//0 base indexing
//it can be create shallow copy // if changes in file it can be change in original file
//deep copy does not share the same reference
//methods

//declare array      
const array1=[0,1,2,3,4]

const array2=new Array(0,1,2,3)      //declare array
console.log(array1[0]);

//Array methods
array1.push(6)  //insert
console.log(array1);
  
array1.pop()     //delete
console.log(array1)

console.log(array1.includes(9));
console.log(array1);

const newarr=array1.join()        //bind the array
console.log(newarr)