const score  = 400

// const balance = new Number(100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);

// console.log(balance.toFixed(1));

// const othernumber  = 1123.8966

// console.log(othernumber.toPrecision(3));
// const hundreds  = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++


console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.110));
// console.log(Math.floor(4.999));

// console.log(Math.max(3,4,7,3,2,9));
// console.log(Math.min(3,4,7,3,2,9));
console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));


const min = 10
const max =  20


console.log(Math.floor(Math.random() * (max-min +1) )+min)  //this formula is important 
//to avoid the random function in multiple digits we use floor function and then to avoid occurence of 0 we use +1 , then add min to the combined function so that it gives value between min and max value 