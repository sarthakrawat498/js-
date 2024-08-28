const myObject = {
    js : "JavaScript",
    cpp : 'C++',
    rb: "Ruby" ,
    swift : "Swift by Apple"
}
//forin loop best for iterating through the objects 
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')

for (const key in map) {
    console.log(key);  
}