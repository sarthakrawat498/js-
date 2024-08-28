


function sayHello(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}

//sayHello()

// function addtwonum(number1 , number2){
//     console.log(number1+number2);
    
// }


function addtwonum(number1 , number2){
    // let result = number1+number2
    
    // return result
    
    return number1+number2
    
    
}
const result = addtwonum(10,4)
console.log("REsult : " , result);

function loginusermessg(username = "sam"){             //defualt value passed as sam
    if(username  === undefined ){           //or (!username)
        console.log("please enter a username ");
        return    
    }
    
    return `${username} just logged in `
}
// console.log(loginusermessg("sarthak"))

// console.log(loginusermessg())


//shopping cart style

function calculateCartPrice(...num1){          //(...num1) is rest operator , which can input any numeber of values acc to us
    return num1
}

console.log(calculateCartPrice(200,400,600));


const user = {
    username : "Sarthak",
    prices: 199
}
function handleObject(AnyObject){
    console.log(`Username is ${AnyObject.username} and price is ${AnyObject.price}`);
    
}

handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const mynewArray = [200,400,600,100]

function returnsecondvalue(newArray){
    return newArray[1]
}
console.log(returnsecondvalue(mynewArray));


console.log(returnsecondvalue([200,300,400]));


