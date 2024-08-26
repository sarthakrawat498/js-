//  array
const myArray = [0,1,2,3,4,5]
const myheroes=["shaktiman", "naagraj"]

const myarr2 = new Array(1,2,3,4,5)
console.log(myArray[1])


// Array Methods 

myArray.push(6)
myArray.push(7)
myArray.pop()
// myArray.unshift(9) //inserts item at start of the array  not recommended because gets difficult for memory , unoptimised 


myArray.shift() //removes the first element 

console.log(myArray.includes(9));

console.log(myArray.indexOf(4));   // -1 output if does not exist 

const newArr = myArray.join()

console.log(myArray);
console.log(newArr);
console.log(typeof newArr);



//slice , splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

const myn2= myArray.splice(1,3)
console.log("C", myArray);

console.log(myn2);



//basic difference is splice includes the range element (last one ) and slice does not 
//slice does not remove the elements whereas splice manipulates the original array and remove the elements 




