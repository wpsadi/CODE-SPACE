//Passs by value vs Pass by reference

let name = "john"

let new_name = name;

name= "peter"


console.log(name)
console.log(new_name)
//   //   Pass by value
// since we passed name as value for new_name but
//  after changing the value of name , new_name will still retain the previous value

let num1 = 10
let num2 = num1

num1 = 400

console.log(num1);
console.log(num2)


const user = {
   name:"john",
   age:20
}
let new_user = user

user.name = "peter"

console.log(user)
console.log(new_user)

//   //   Pass by reference
// since we passed user as value for new_user but
//  after changing the value of name , new_name also change

new_user = Object.assign({},user) // this will create a new copy of the object
console.log(new_user)


num1 = [10,20]

// num2 = num1
// num1[0] = 50

console.log(num1)
console.log(num2) // pass by reference

num2 = num1.slice()
num1[0] = 50
console.log(num1)
console.log(num2)