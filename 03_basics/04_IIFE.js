// Immediately Invoked function Expressions(IIFE)

//***** */ IIFE  use for remove the global scope polution *************

(function chai(){
    console.log(`DB CONNECTED`);     // this is iife fuction 
    
})();


((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('Neeraj')


// Note => if we define two iife functions then we first break the first iife function by using semicollan(;)
// then we write another iife function 