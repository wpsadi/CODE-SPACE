// Array.prototype.-
// Function.prototype.-


// Array Methods

// Add remove items
let numbers = [10, 20, 30, 40]
   // add at end of array
   numbers.push(50)
   // console.log(numbers)

   // remove from end of array
   let popped_number = numbers.pop()
   // console.log(popped_number)
   // console.log(numbers)

   // add from beginning

      // unshift
      numbers.unshift(50)
      console.log(numbers)

   // remove from beginning

      // shift
      numbers.shift()
      console.log(numbers)


let arr = ["I", "Love", "JS"]

// slice
   // syntax arr.slice(startIndex, endIndex) not influencing endIndex
   // console.log(arr.slice(1,3))
   console.log(arr.slice(-3))

let nums = [10,20,30,40]
let copynums = nums.slice()

nums[0] = 100
console.log(copynums)

// splice

   // swiss knife
   // add, delete, replace

   // syntax 
   // arr.splice(startIndex, deleteCount, arg1, arg2, arg3, ...arr.concat, argN)

   // let arr_new = ["I", "study", "Programming"]
   // console.log(arr_new.splice(1,2))

   let arr_new = ["I", "study", "Programming", "right" ,"now"]
   // arr_new.splice(0,3, "listen", "music")
   arr_new.splice(2,0, "listen", "music")
   console.log(arr_new)


   let arr_pro = [1,2,3,4]
   arr_pro.splice(arr_pro.length,0,5,6,7)
   console.log(arr_pro)


// concat
let arr_ay = [10,20]
console.log(arr_ay.concat([30,40]))
console.log(arr_ay.concat([50,60]))
console.log(arr_ay.concat([30,40], [50,60]))


// iterate
array = [10,20,30,40]
array.forEach(function(item, index, array){
   console.log(`${item} is at index ${index} in ${array}`)
})


// searching in an array

let arra = [0, 1, true, "hi"]
console.log(arra.indexOf(0))
console.log(arra.indexOf(100)) // answer will be -1 for every element that is not present

console.log(arra.includes(100))


let users = [
   {id:1 , name:"aditya"},
   {id:2 , name:"wpsadi"},
   {id:3 , name:"harsh"}
]

// let user = users.find(function(item, index, array){
//    // console.log(item)
//    // console.log(item, index, array)
//    return (item.id == 1)

// })


// let user = users.findIndex(function(item, index, array){
//    // console.log(item)
//    // console.log(item, index, array)
//    return item.name == "wpsadi"

// })

// console.log(user)



// reverse
   // let numbs = [10,20,30,40]
   // numbs.reverse()
   // console.log(numbs)


// split and join
let names = "john, sam, eneu"
console.log(names.split(","))
      // try names.split("") and see the result

for (let name of names.split(", ")){
   console.log(`Send message to [${name}]`)
}

let names_Array = names.split(", ")
let str = names_Array.join(",")
console.log(str)
