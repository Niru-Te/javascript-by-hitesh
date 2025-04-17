const promiseOne = new Promise(function(resolve ,reject){
    //Do an async task
    //DB calls , cryptography, Network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise is consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function () {
    console.log('Async task 2 consumed'); 
})


const promiseThree = new Promise(function (resolve,reject) {
     setTimeout(function(){
      resolve({username:"chai" , email:"chai@example.com"})
     },1000)
})

promiseThree.then(function(user){
     console.log(user);
     
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error) {
            resolve({username:"chai" , email:"chai@example.com"})
        }else{
            reject('something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(() => console.log("The promise is either is resolve or reject"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error) {
            resolve({username:"javascript" , password:123})
        }else{
            reject(' ERROR: something went wrong')
        }
    })
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
    console.log('E:',error);
    
  }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)