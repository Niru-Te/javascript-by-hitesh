const user = {
    username:"Neeraj",
    price :999,
    message:function(){
        console.log(`${this.username},welcome t0 website `);
        // console.log(this);         // this  use for current context(value)
        
        
    }
}

// user.message()
// user.username = "sam"
// user.message()
// console.log(this);        // returns {} (empty object)


// function chai(){
//       let username = "hitesh"
//     console.log(this.username);     // returns undefined
    
// }
// chai()

// Arrow function   () => {}


    // const addTwo = (num1,num2) => {           
    //     return num1 + num2                              // Explisit Arrow function
    // }  


    // const addTwo = (num1,num2) =>  num1 + num2        or                               // Implisit Arrow function
    // const addTwo = (num1,num2) => ( num1 + num2 )                                      // Implisit Arrow function
    const addTwo = (num1,num2) => ( {username:"hitesh"})                           // Implisit Arrow function
    

    console.log(addTwo(3,5))