// Sets and Maps
// Sets
// unordered collection
// unique values

const setExample = new Set();
console.log(setExample)

setExample.add(10)
setExample.add(20)

setExample.add(10)
setExample.add(20)

console.log(setExample.size)
console.log(setExample.clear)

setExample.add(10)
setExample.add(20)
setExample.add(30)
setExample.add(40)

setExample.delete(30)
console.log(setExample)

const data = new Set()
// data.add("john")

// data.add({
//    likes: "Js",
// })

// console.log(data.entries())

data.add(10)
data.add(20)
data.add(30)
data.add(40)

// data.forEach(function(item1, item2){
//    console.log(`data[${item1}] : data[${item2 * 2}]`)
// })

// console.log(data.has(10))

// console.log(setExample.keys() )

// console.log(setExample.values() )

let arr = [10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]

const set = new Set(arr)


console.log(set)


console.log(Array.from(set))

let map = new Map()
map.set("1", "aditya")
map.set(true, "bool")
console.log(map.get(true))

let user = {
   name: 1,
   age:17
}

map.set(user, "hi")

console.log(map.get(user))

//Map  to  Object

let user1 = {
   name : "john",
   age:17
}

let map1 = new Map(Object.entries(user1))
console.log(map1)
// Map(2) { 'name' => 'john', 'age' => 17 }