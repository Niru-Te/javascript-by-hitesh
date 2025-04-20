// let myName = "Neeraj     "

// console.log(myName.truelength);



let myHeros = ["thor" , "spiderman"]

let heroPower = {
      thor:"hammer",
      spiderman:"sling" ,

      getSpiderPower:function(){
          console.log(`Spidy Power is ${this.spiderman}`);
          
      }
}

Object.prototype.neeraj = function (){
    console.log(`neeraj is present in all objects`);
    
}

Array.prototype.heyNeeraj = function(){
    console.log(`Neeraj says hello`);
    
}

// heroPower.neeraj()
// myHeros.neeraj()
// myHeros.heyNeeraj()
// heroPower.heyNeeraj()


// Inheritance ********

const User = {
    name:"Neeraj"
}

const teacher = {
    makeVideo : true 
}

const teacherSupport = {
    isAvailable:false
}

const TASupport ={
    makeAssignment : "JS aasignment",
    fullTime: true,

    __proto__ : teacherSupport
}

teacher.__proto__ = User

// Modern syntax ****

Object.setPrototypeOf(teacherSupport , teacher)



let anotherUserName = "chaiAurCode     "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUserName.trueLength()


"Neeraj".trueLength()
"iceTea".trueLength()