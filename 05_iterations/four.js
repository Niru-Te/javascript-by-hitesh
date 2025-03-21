// for in loop

const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"Ruby",
}

for(const key in myObj){
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const arr = ["js","rb" , "swift" , "java"]

for(const key in arr){
    // console.log(arr[key]);
    
}

const map = new Map()

map.set("IN","India")
map.set("UK","United Kingdom")
map.set("Fr","france")

for (const key in map) {
    // console.log(map[key]);       // for in loop doesn't works on map object 
    
}