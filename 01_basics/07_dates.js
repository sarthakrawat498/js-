let mydate = new Date()
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);


//let mycreateddate = new Date(2023,0,23)
//let mycreateddate = new Date(2023,0,23,15,3)
let mycreateddate = new Date("2023-01-14")
console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(mycreateddate.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);

console.log(newdate.getDay());

console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long",
    month: "long",
    
})