// Notes:- Primitive datatype =>

// 7 types : String , Number , Boolean , null , undefined, Symbol ,BigInt 

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("343")
const anotherId = Symbol("343") 
 
const bigNumber = 54544465554n

// Refrence type (Nonprimitive) datatype  

// Array  , Objects , Functions

const heros = ["saktiman","Nagraj", "Doga"]

const myObj = {

    name:"Neeraj",
    age :19 ,
}

const myFunction = function(){
    console.log("hello world");
    
}



// console.log(typeof myFunction);

// *********************************************

//Memory in javascript 


// Stack Memory(Primitive)  , Heap Memory(nonprimitive)

let myName = "Neeraj"

let anothermyName = "shiva"

 anothermyName = "Manish"


// console.log(myName);
// console.log(anothermyName);


let userOne = {

    email:"user@google.com",
    upi:"use@ybl"
}

let userTwo = userOne

userTwo.email = "neeraj@google.com"


console.log(userOne.email);
console.log(userTwo.email);


