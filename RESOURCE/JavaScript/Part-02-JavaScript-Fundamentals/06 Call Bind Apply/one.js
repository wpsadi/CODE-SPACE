// function printName(name){
//    console.log(`Hi! ${name}`)
// }

// printName.city = "Delhi"

// printName("John")

// console.log(printName.city)


// methods of function's object version

// they are used tocontrol the context of this

// call method
const user1 = {
   name:"john",
   // greetings: function(){
   //    console.log(`hello, ${this.name}`)
   // }
}

function greetings( city, age){
   console.log(`hello, ${this.name} and my age is ${age} and i live in ${city}`)
}

// user1.greetings()

const user2 = {
   name:"peter"

}

// call
// user1.greetings.call(user2)
greetings.call(user1, "pune", 20)


// apply
greetings.apply(user1, ["pune", 20])
greetings.apply(user2, ["pune", 20])

const person = {
   name : "aditya",
   sayHi: function(city, age){
      console.log(`hello, ${this.name} and my age is ${age} and i live in ${city}`)
   }
}

const an_person = {
   name : "wpsadi"
}

const boundFunction = person.sayHi.bind(an_person, "Delhi", 10)

// 100 lines of code
boundFunction()