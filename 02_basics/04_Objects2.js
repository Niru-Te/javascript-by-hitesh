// const tinderUser = new Object()  //singaltan object 

const tinderUser = {}    // non singaltan object;

tinderUser.id = "321abc"

tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email:"neeraj@google.com",
    fullname:{
        username:{
            firstname:"Neeraj",
            lastname:"Nishad"
        }
    }
}

// console.log(regularUser.fullname.username.lastname);   // Nested Objects



const obj1 = {1: "a" ,2:"b"}
const obj2 = {3: "a" ,4:"b"}
const obj3 = {5: "a" ,6:"b"}



// const  obj4 = Object.assign({},obj1,obj2,obj3) //firt method to merg obj

const obj4 = {...obj1,...obj2,...obj3}//  second method to merg obj
// console.log(obj4);



const users = [
     {
        id:1,
        email:"user1@google.com"
     },
     {
        id:1,
        email:"user1@google.com"
     },
    
     {
        id:1,
        email:"user1@google.com"
     }
    
]



// console.log(users[1].email);


// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



// ****************Object De-structure and JSON API INTRO ******************



const course = {
    name:"js in Hindi",
    price: "999",
    courseInstructor:"hitesh"
}


//course.courseinstructor

const {courseInstructor : instructor} = course  // de-structuring here  the  object key

console.log(instructor)


// *******JSON*******-

// json are in arrays also

// {
//     "name":"Neeraj",
//     "coursename":"js in hindi",                // objects are contain in variables but json are not .
//     "price":"free"
// }


[
    {},
    {},
    {}
]





