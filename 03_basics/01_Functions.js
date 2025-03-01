function sayMyName (){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName() 

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
        // let result = number1+number2
        // return result                           // another way 

        return number1+number2
        
 }


   const result = addTwoNumbers(3,5)
//    console.log("Result:", result);

 function loginUserMessage(username){
    return `${username} just logged in `
 }
   
//  const message = loginUserMessage("Neeraj")
//  console.log(message);

// In shortway

// console.log(loginUserMessage("Neeraj"));


// if statement in function 


function loginUserMessage(username){
     if(/*username === undefined or */ !username){
      console.log("Please Enter the Username");

      return
    }
   return `${username} just logged in`
}

console.log(loginUserMessage());


 