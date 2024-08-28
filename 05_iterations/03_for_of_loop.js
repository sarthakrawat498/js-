//for of 

const arr=[1,2,3,4,5]

for (const element of arr) {
    console.log(element);
    
}

const greetings="Hello World!"
for (const element of greetings) {
    console.log(`each char is ${element}`);
    
}

 
//Maps   ( they have unique values and print in only the order entered )
const map = new Map()
map.set('IN', "INDIA")
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')

console.log(map);

for (const [key,value] of map) {
    console.log(key);
    console.log(value);    
}


const myObject = {
    'Game1' : 'nfs'
    ,'game2' : 'gta'
}

// for (const [key,value] of myObject) {
//     console.log(key , value);
    
// }

