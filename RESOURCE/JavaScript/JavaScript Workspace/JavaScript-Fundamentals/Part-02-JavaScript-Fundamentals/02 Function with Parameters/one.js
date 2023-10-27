// function with a single parameter
// function greet(name){
//    console.log("hello "+ name)
// }

// greet("aditya");
// greet("aayush");



// function with default parameter
// function greet(name="you"){
//    console.log("hello "+ name)
// }


// greet("aditya");
// greet("aayush");
// greet()


// function calculate_sum(a,b,c,d,e){
//    return a+b+c+d+e;
// }

// console.log(calculate_sum(10,20,1,1,1))


// const nums=[1, 2, 3, 4, 5]

// function print_array_elements(arr){
//    console.log(arr)
//    for (let i=0; i<arr.length; i++){
//       console.log(arr[i])
//    }
// }

// print_array_elements(nums)



// -------IMPORTANT-------
// function greetings({city,name}){
//    console.log(`Hello! ${name} and you live in  ${city}. That\'s nice!`)
// }

// greetings({name:"aditya", city: "delhi"})


// using arguments object
// function sum_with_arguments(){
//    // console.log(arguments)

//    // 1st way (Not preffered because All ARRAY options are not available in this form) ex: arguments.reduce() is not available
//    // for (let i=0; i<arguments.length; i++){
//    //    console.log(arguments[i])
//    // }
//    // arguments.reduce() 

   
//    // 2nd Way (PREFERED WAY)
//    const arr_array=Array.from(arguments)
//    console.log(arr_array)


//    let sum = arr_array.reduce(function(acc, curr){
//          return acc+curr
//       },0)
//       // arguments.reduce() 
//       return sum
// }

// using rest parameters ...
function sum_with_arguments(...numbers){
   // return numbers

   let sum = numbers.reduce(function(acc, curr){
      return acc+curr
   },0)

   return sum
}

console.log(sum_with_arguments(1,2,3,4,5))
console.log(sum_with_arguments(1,2,3,4))
console.log(sum_with_arguments(1,2,3))
console.log(sum_with_arguments(1,2))