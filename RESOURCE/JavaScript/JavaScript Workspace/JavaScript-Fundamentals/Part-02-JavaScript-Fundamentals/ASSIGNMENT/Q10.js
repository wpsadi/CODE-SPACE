let str = "hi my name is aditya my name is aditya name is aditya is aditya aditya"

str = str.split(" ")
// console.log(str)
let map = new Map()

let count
for (let i of str){
   count = 0
   for (j of str){
      if (j == i){
         count++
      }
   }
   map.set(i,count)
}

console.log(map)