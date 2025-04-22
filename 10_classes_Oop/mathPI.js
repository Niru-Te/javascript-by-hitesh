const discriptor = Object.getOwnPropertyDescriptor(Math ,"PI")

// console.log(discriptor);


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    username: "ginger chai" , 
    price:250  ,
    isAvailable : true ,

    orderChai : function(){
        console.log(`chai nhi bani`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "username"));


 Object.defineProperty(chai , "username" ,{
    // writable : false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai , "username"));

for (let [key , value]  of Object.entries(chai)) {
  
 if(typeof value !== "function") {
    console.log(`${key} : ${value}`)
 }

    
    
}