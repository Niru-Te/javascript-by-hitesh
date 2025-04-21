// Object literals 

const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    this.greeting = function(){
        console.log(`Welcome:${this.username}`);
        
    }

    return this
}

// constructor fuction gives  everytime a new instance

 
const userOne = new User("Hitesh",12,true)
const userTwo = new User("ChaiAurCode" , 11 , false)

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);


//  step 1 :- if use  new keyword first of all a empty object created  which called Instances
//step 2 :- constructor fuction calls due to new keyword
// step 3 :- all arguments are inject in this keyword
// step 4 :- finally you all in function


