// let a = 10;
// let b = 20;

// function add(a=10,b=20){
//    console.log(a+b)
// }

// add() //function calling / function invokation
// add(5,4)
// add(20,5)
// arguments

// let sum = function add(a=10, b=20){
//    console.log(a+b)
// }

// console.log(sum)

// // first class citizen

// function x(callback){
//    console.log("hello ")
//    callback()
// }

// function y(){
//    console.log("bye")
// }

// x(y)



// function add(a,b) {
//    return function sum(){

//    }
// }

function add(a,b){
   return(a+b)
}


let  s= add(10,20)
console.log(s)