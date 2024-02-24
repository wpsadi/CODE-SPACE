// const User = {
//     name: "aditya",
//     age:10,
//     isActive:true
// }

// function createuser({name:string,isPaid:boolean}){
// }
// let newUser = {name:"aditya",isPaid:false, email:"aditya@h.com"}
// createuser({name:"aditya",isPaid:false})
// createuser(newUser)


// function createCourse():{name:string, price:number}{
//     return {name:"aditya",price:20}
// }


type User = {
    name:string,
    email:string,
    isActive:boolean
}

type myString = string

function createUser(user:User){}

createUser({"name":"aditya","email":"aditya@gmail.com","isActive":true})


export {}