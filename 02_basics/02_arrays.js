const marvelHeroes = ["thor","ironman","spiderman"]

const dcHeroes = ["superman","flash","batman",]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);  // this not a good practice

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

//Another method to merg to arrays

const allNewHeroes = [...marvelHeroes,...dcHeroes]

// console.log(allNewHeroes);


// All subarrays convert into a array


const anotherArray = [1,3,5,[3,4,5,6],4,[6,5,2,[4,3,2,]]]

const all_real_array = anotherArray.flat(Infinity)
console.log(all_real_array);


console.log(Array.isArray("Neeraj"));
console.log(Array.from("Neeraj"));
console.log(Array.from({name:"Neeraj"}));   //Most important concept

let score1 = 100
let score2 =300
let score3 = 400

console.log(Array.of(score1,score2,score3));



