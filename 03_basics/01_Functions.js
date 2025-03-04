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

// console.log(loginUserMessage());


//function objects and arrays ************************************


function calculateCartPeice(val1,val2,...num1){
   return num1
}


 console.log(calculateCartPeice(562,8400,3498,28,));



 const user = {
        username:"Neeraj",
        price:398

 }

 function handleObject(anyobject){
     console.log(`The usename is ${anyobject.username} and the price is ${anyobject.price} .`);
 }

//  handleObject(user)
 handleObject({
     username:"hitesh",           //other way
     price:300
 })


 const myNewArray = [299,399,599,500,200]

 function returnSecondValue(getArray){
      return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([299,399,599,500,200]))          //other way


 