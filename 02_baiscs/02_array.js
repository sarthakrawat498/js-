const marvel_heroes= ["thor","deadpool","spiderman"]
const dc_heroes=["batman","superman","flash"]

//marvel_heroes.push(dc_heroes) //push takes the other entries as a whole and makes it array in a array 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dc_heroes)   //concat returns a new array with the combined elements 
// console.log(allheroes);

const all_new_heroes  = [...marvel_heroes,...dc_heroes] //does the same task as concat , but in concat we can only add one array at a time but in this spread operator way , we can add multiple arrays 
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)   //sbko saath mein combine krdeta hai 

console.log(real_another_array);


console.log(Array.isArray("sarthak"))

console.log(Array.from("sarthak")) //converts to array 


console.log(Array.from({name:"sarthak"})) // interesting case , gives out empty array when keys are given 

let score1 = 100
let score2 = 200
let score3  = 300

console.log(Array.of(score1,score2,score3));  //Returns a new array from a set of elements.
