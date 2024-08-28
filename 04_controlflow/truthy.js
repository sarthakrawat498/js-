const userEmail = []

if (userEmail){
    console.log("got user email");
}
else {
    console.log("Dont have User Email");
}



// falsy values 
// false , 0 , -0 , BigInt 0n , null , undefined , NaN , ""

// truthy value 

//"0",'false'," ",[],{} , function(){} 

// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}


// Nullish Coalescing Operator (??) : null , undefined 

let val1 ;
//val1=5??10
//val1 = null ?? 10 //gives out smaller value incase of null or undefined , atlast if no small value then null and undefined are given
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


//ternary operator 
// condition ? true : false 

const iceteaprice = 100
iceteaprice <=90 ? console.log("less than 90") : console.log("more than 90 ");
