//control flow or logic flow 

// if statement
// < , > ,<= , >= , == , != , === , !==

// const tempreture = 40

// if(tempreture==40){
//     console.log("tempretue less than 50");
    
// }else{
//     console.log("tempretue greater than 50 ")
// }


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power:${power}`);
    
// }
// console.log(`User power:${power}`);

//shorthand
const balance = 1000

// if(balance >500  ) console.log("test");          // implisit statement 

// if(balance < 500){
//          console.log("less than 500"); 

// }else if (balance <750){
//     console.log("less than 750"); 

// }else if (balance < 900){
//     console.log("less than 900"); 
          
// }else {
//      console.log("less than 1200");
     
// }

const userLoggedIn = true
const debitCard = true 
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
}

if(isLoggedInFromEmail || isLoggedInFromGoogle){
    console.log("user  logged in "); 
}


