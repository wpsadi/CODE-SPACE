// function add(a,b){
//    return a+b
// }

// let result= add(10,20)
// console.log(result)

// let add= (a,b) => {
//    return a+b
// }

// let add= (a,b) => a+b
// let result= add(10,20)
// console.log(result)

// let printString = a => console.log(a)
// printString("hi")


// arguments
// function add(){
//    console.log(arguments)
// }

// let add1 = () => console.log(arguments)
// NOTE : arguments does exist for arrow functions

// add(10,20,20,40,50)
// add1(10,20,20,40,50)


// binding of this
// const person= {
//    name: "john",
//    greet:function(){
//       console.log("greet", this)
//       console.log(`Hello my name is ${this.name}`)
//    },
//    greet2: () =>{
//       console.log("greet2", this)
//       console.log(`Hello my name is ${this.name}`)
//    }
// }

// person.greet()
// person.greet2()

// use for new keyword

function RegularFunction(name){
   this.name = name;
}
const regularObj = new RegularFunction("john")
console.log(regularObj)


const ArrowFunction = (name) => {
   this.name = name;
}

const arrowObj = new ArrowFunction("Peter")
console.log(arrowObj)