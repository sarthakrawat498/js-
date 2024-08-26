//destructuring of objects

const course =  {
    coursename : "js in hindi ",
    price : "999" ,
    courseinstructor : "hitesh"
}

//console.log(course.courseinstructor);

const {courseinstructor: instructor} = course

//console.log(courseinstructor);
console.log(instructor);


// {
//     "name":"Sarhtak",
//     "coursename" : "js in hindi ",
//     "price" : "free"
// }