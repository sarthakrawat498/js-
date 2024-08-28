//Immediately Invoked Function Expressions (IFFE)

(function chai(){
    //named iffe
    console.log("DB connected");
})();
// semicolon ; used for using two iffe
//used for execution call within calling it explicity , immediately run hojata hai , global scope remove krne ke liye bhi use hota hai


((name)=>{
    console.log(`DB CONNECTED TWO ${name} `);
    
})('Sarthak')