// singleton 

//object literals
  //Object.create


  const mySym=Symbol("key1")

const jsuser = {
    name: "Sarthak",
    "full name" : "Sarthak Rawat",
    [mySym]:"mykey1",
    age:18,
    location:"delhi",
    email:"abcd@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]

}


// console.log(jsuser.email)
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);


// console.log(jsuser[mySym]);


// jsuser.email="sarthak@chatgpt.com"
// Object.freeze(jsuser)

// jsuser.email="sarthakrawat@microsoft.com"
// console.log(jsuser.email);


jsuser.greeting = function(){
    console.log("Hello jsuser");
    
}

jsuser.greeting2 = function(){
    console.log(`Hello jsuser ${this.name}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

