// let arr = [10,20,30,40]

// let num = arr;

// let [a] = num;

// console.log(a)



//another Example

// let user = "ajay kohli"


// let [first,last] = user.split(" ")

// console.log(first,last)





// let arr = [10,20,30,40,50]

// let num = arr;

// let [a,,,b] = num;

// console.log(a,b)


// let arr = "aditysl"

// let num = arr;

// let [a,,,b] = num;

// console.log(a,b)




// let [a,b,c]= new Set([1,2,4])
// // setData.add(3)

// console.log(a,b,c)


// let obj = new Object();
// obj.name = "adi"
// obj.age = 17

// let [nm,ag] = Object.values(obj);

// console.log(nm,ag)



// const user = {
//     username : "adotya",
//     email:"goel@mail.com",
//     age:17
// }


// let {username,email} = user

// console.log(username,email)





// const emp = {
//     empid:1100,
//     empname : "adotya",
//     email:"goel@mail.com",
//     age:17
// }


// let {empid:id,empname:name, depart= "NA"} = emp

// console.log(id,name,depart)



const user = {
    name : "john",
    city: "delhi",
    age:24,
    occ:"engineering",
    hobbies : "chess hockey".split(" "),
    tweet : {
        com0:"oh yeah",
        com1: "full coding "
    }
}


// let {name,city,age} = user;

// console.log(name,city,age)





//smart function parameter

function specialFunc({occ,city,name}){
    console.log(occ,name,city);
}


specialFunc(user)




// how to destructure an nested obbject


let {tweet:{com0,com1}} = user
console.log(com0,com1)