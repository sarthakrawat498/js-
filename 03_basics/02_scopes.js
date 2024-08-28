//var c = 300
let a =300
if (true){
    let a = 10
    const b  =  20
    //console.log(`inner one is : ${a}`);
    
}


 //console.log(a);
// console.log(b);


function one (){
    const username = "Sarthak"

    function two(){
        const website = "youtube"
        //console.log(username);
        
    }
    //console.log(website);

       // two();
}
one()

if (true){
    const username= "sarthak"
    if (username=== "sarthak"){
        const website = " youtube"
        //console.log(username+website);
        
    }
   // console.log(website);
    
}
//console.log(username);


// +++++++++++Interesting++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num+1
}


//console.log(addtwo(5));    -> will give error when declared using variable known as hoisting 


const addtwo = function(num){
    return num + 2
}
 
