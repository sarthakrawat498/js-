const user  = {
    username:"sarthak",
    price : 999,

    welcomeMessg: function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
    }
}

// user.welcomeMessg()
// user.username="sam"
// user.welcomeMessg()

//console.log(this);


// function chai(){
//     let username = "sarthak"
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
//     let username = "sarthak"
//     console.log(this.username);
// }


const chai = () => {
    let username = "sarthak"
    console.log(this);
}
//chai()

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// const addtwo = (num1,num2)=>  num1+num2
//const addtwo = (num1,num2)=> ( num1+num2)  // curly bracket ke saath return is required while ( parenthesis ke saath return keyword zaruri nhi h )

const addtwo = (num1,num2)=> ({username:"sarthak"})

console.log(addtwo(5,6))

