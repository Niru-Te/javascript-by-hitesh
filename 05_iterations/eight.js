// reduce method

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function ( acc , currval ) {
//     console.log(`acc:${acc} and currval ${currval}` );
    
//     return acc + currval 
// },0)

    const myTotal = myNums.reduce( (acc , currval) => { return acc + currval},0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"python",
        price:1000
    },
    {
        itemName:"data science",
        price:12000
    }
    
]

const priceTotal = shoppingCart.reduce( ( acc ,item) => {return acc + item.price },0)

console.log(priceTotal);

