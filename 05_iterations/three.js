// Array specific loops

// for of  loop

["","",""]

[{}, {} , {}]

const arr = [1,4,5,3,]
for (const num  of arr) {
// console.log(num);

}

const greetings = "hello hi"

for (const greet of greetings) {
    // console.log(greet);
    
}


// maps

const map = new Map()

map.set("IN","India")
map.set("UK","United Kingdom")
map.set("Fr","france")

for(const [key,value] of map){
    // console.log(key ,':-' , value)
}


const myObj = {
    name:'neeraj',
    age:39,
}


// for(const [key , value] of myObj){
//     console.log(key,":-" , value);         // for of doesn't apply on the objects 
    
// }

