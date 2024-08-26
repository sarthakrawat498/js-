//const tinderuser = new Object()   //-> makes a singleton object

//const tinderuser = {} //-> makes a non singleton object
const tinderuser = {}

 tinderuser.id="123abc"
 tinderuser.name="sammy"
 tinderuser.isLoggedIn = false
//console.log(tinderuser);          


const regularuser = {
    email : "some@gmail.com"
    , fullname :{
        userfullname: {
            firstname : "Sarthak",
            lastname  : "Rawat"
        }
    }
}

//console.log(regularuser.fullname?.userfullname.firstname);

const obj1  = {
    1:"a", 2:"b" 
}
const obj2 = { 3:"A" , 4:"B"}
const obj4 = { 5:"A" , 6:"B"}

//const obj3  = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2 , ...obj4}

console.log(obj3);


const users = [                      //database se usually array of objects aate hai 
    
    {id:1,
    email:"h@gmail.com"
    },
    {id:2,
        email:"h@gmail.com"
    },
    {id:3,
        email:"h@gmail.com"
    },
    {id:4,
        email:"h@gmail.com"
    }
]


console.log(users[1].email)

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('isLogged'));   //checks if the object has a certain key value pair or not 

