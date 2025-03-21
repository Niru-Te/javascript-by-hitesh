// for each loop

const coding =  ["js","rb" , "swift" , "java"]

coding.forEach(function (item){
    // console.log(item);                 // basic functio method 
    
})

coding.forEach( (item) => {
    // console.log(item);            //  arrow function method 
    
})


// function printMe(item){
//     console.log(item);
    
// }                                  // another method
                       
// coding.forEach(printMe)


coding.forEach((item,index,arr) =>{
    // console.log(item,index,arr);    
    
})


const myCoding = [
    {
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"python",
    languageFileName:"py"

},
{
    languageName:"java",
    languageFileName:"java"

}
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})


