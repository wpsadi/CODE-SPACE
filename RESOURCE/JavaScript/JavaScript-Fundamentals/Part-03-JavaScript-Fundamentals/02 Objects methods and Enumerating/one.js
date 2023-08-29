// emp = {
//    name: "john",
//    salary: 1200000,
//    age:30,
// }

// // method chaining

// let keys = Object.keys(emp).forEach(function (key){
//    console.log(key)
// })

// let values = Object.values(emp)

// let KeyValuePairs = Object.entries(emp)

// console.log(KeyValuePairs)

// // manipulation

// let ConvertToObject = Object.fromEntries(KeyValuePairs)
// console.log(ConvertToObject)


// const  newObj = Object.assign({}, emp)
// console.log(newObj == emp)


// // Object.freeze()

// emp = {
//    name: "john",
//    salary: 1200000,
//    age:30,
// }


// Object.freeze(emp)

// emp.name = "Peter"

// console.log(emp)

// console.log(Object.isFrozen(emp))



// emp = {
//    name: "john",
//    salary: 1200000,
//    age:30,
// }

// emp.dept = "IT"
// Object.seal(emp)
// emp.name = "Peter"
// emp.id=2

// console.log(emp)
// console.log(Object.isSealed(emp))



// Object.create()
let user1 = {name : "Alex"}
// let object = Object.create()
let user2 = Object.create(user1)
user2.age=10
console.log(user1)
console.log(user2)
console.log(user2.name)



// Object.hasOwn()
// emp = {
//    name: "john",
//    salary: 1200000,
//    age:30,
// }

// console.log(Object.hasOwn(emp, "name"))

// console.log(Object.getOwnPropertyNames(emp))

// let descriptor = Object.getOwnPropertyDescriptors(emp, "name")
// console.log(descriptor)

// Object.defineProperty(emp, "name", {
//    value: "john",
//    writable: false
// })

// console.log(emp)


// const data = {}
// Object.defineProperties(data, {
//    username:{
//       value:"wpsadi",
//       writable : false
//    },

//    age:{
//       value: 10000,
//       writable: true
//    }
// })



data = {}
Object.defineProperties(data, {
   username:{
      value:"wpsadi",
      enumerable : true

   },

   age:{
      value: 10000,
      enumerable : true
   },
   email:{
      value:"xyz@gmail.com",
      enumerable: false
   }
})

for (const key in data){
   console.log(`${key} has a vlaur ${data[key]}`)
}