const myNums = [1,2,3 ,4 ,5,6,7,8,9,10]

// const newNumbers = myNums.map( (num) =>{ return num + 10})

// chaining of map 
const newNums = myNums
                .map( (num) => num *10)
                .map( (num) => num +2)            // this map works on new value of recieve from first map callback function
                .filter( (num) => num >= 50 )          

console.log(newNums);
 
 
