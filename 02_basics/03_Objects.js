 // Singleton  
 //Object.create


 //Object literals

 const mySym = Symbol("key1")

 const jsUser = {
    name:"Neeraj",
    age: 20,
   "full name":"Neeraj Nishad",
    [mySym]:"mykey1",
    location:"Gorakhpur",
    email:"neeraj@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

//  console.log(jsUser.name);//not a good practice
//  console.log(jsUser["name"]);
 
//  console.log(jsUser["full name"]);

//  console.log(jsUser[mySym]);



 jsUser.email = "neeraj@chatgpt.com"
//  Object.freeze(jsUser)    // for No further change in object
  jsUser.email = "neeraj@microsoft.com"
//   console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js users");
    
}

jsUser.greeting2= function(){
    console.log(`Hello js users, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





  


 
 
 