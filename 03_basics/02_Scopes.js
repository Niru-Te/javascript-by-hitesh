// Global and Local Scope in js  *********

// var c = 300
let a = 300

if(true){
    let a = 10
    const b =20
    var c = 30

    // console.log("INNER",a);
    

}


// console.log(a);
// console.log(b);
// console.log(c);


//***********Scopes level and mini hoisting in js***********

function one(){
    const username = "Neeraj"

    function two(){
        const website = "youtube"
        console.log(username);      //In nested fuction  child fuctions are acces parents variables but parents fuctions not acces the child variables 
        
    }
    // console.log(website);

    two()
    
}

// one()


if (true) {
      const username = "hitesh"

      if (username === "hitesh") {
         const website = "youtube"
        console.log(username + website);
        
      }
    //   console.log(website);  //show error
      

}
// console.log(username);   // show error


// ++++++++++++++Interesting+++++++++++++++++
// with normal function declaration we can call the function before fuction declaration 

addOne(5)


function addOne(num){
     return num + 1
}

// But in expression or in variable function declaration we can't call the fuction before functoin declaration  

addTwo(5)   

const addTwo =  function(num){
     return num + 2
}

// this is called Hoisting



