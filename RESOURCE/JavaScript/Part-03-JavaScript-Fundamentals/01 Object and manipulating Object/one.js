// objects

// object literal

// let employee = {
//    id:10,
//    name:"john",
//    salary: 50000
// }

// console.log(employee)



// object constructor
// new instance Object constructor

// const employee = new Object()
// employee.id = 20;
// employee.name = "peter";
// employee.salary = 10000;
// console.log(employee)



// using custom function

// function Employee(id,name,salary){
//    this.id = id;
//    this.name = name;
//    this.salary = salary;
// }

// const employee1 = new Employee(1, "adi", 3200000)

// console.log(employee1)




// access

let emp = { id: 1, name: 'adi', salary: 3200000 }

// // methods to access object
//       // #dot notation
//       console.log(emp.id)
//       // #square bracket notation
//       console.log(emp['name'])

//    emp.city = "delhi"
//    emp['country'] = "India"

//    console.log("old emp => ",emp)


   // emp.name = "peter"
   // emp['city'] = "mumbai"

   // console.log("updated emp => ",emp)


// deleting object
// delete emp.name
// delete emp['country']
// console.log(emp)


// delete emp // it won't work
// console.log(emp)


               // iterating in objects

for (const key in emp){
   console.log(emp[key])
}