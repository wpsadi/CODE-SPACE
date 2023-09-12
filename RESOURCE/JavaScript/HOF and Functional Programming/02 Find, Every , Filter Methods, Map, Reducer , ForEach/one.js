let arr = [2, 3, 4]

arr.forEach(function(item,index,array){
   console.log(item)
})

arr.forEach( (item,index,array) => console.log(item))

heroes = ["ironman", "spiderman", "batman", "flash"]

heroes.forEach(function(item,index){
   if (index%2 != 0){
      heroes[index] = heroes[index].toUpperCase()
   }
})

console.log(heroes)

heroes.map(function(item,index,arr){
   console.log(item,index,arr)
})

heroes.map(function(item,index,arr){
   if (index%2 == 0){
      heroes[index] = heroes[index].toUpperCase()
   }
})

console.log(heroes)

//filter
console.log(heroes);
const heroesWithRaj = heroes.filter(function(item){
   return item.endsWith("MAN")
})

console.log(heroesWithRaj)

//shopping
const bill = [20, 30, 40]
const sumBill = bill.reduce(function(prev, current){
   return prev+current
},0)

console.log(sumBill)

const gameScore = [200, 300, 210, 115, 199]

// check if all values are number or not

const gameScoreCheck  = gameScore.every(function(item){
   return typeof item === 'number'
   // typeof return the datat type in form of "String"
})

console.log(gameScoreCheck)


const gamers = ["aditya", "anirudh", "harsh", "mayank", "aayush"]

// find game whose score is above 200

gamerFinder = gameScore.find(function(score){
   if (score > 200){
      return score
   }
})

console.log(gamerFinder)

//findIndex , sum , sort