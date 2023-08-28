
function CreateObj(name, age, grade){
      this.name = name,
      this.age = age,
      this.grade = grade
}

let stuObj = new CreateObj("Aditya", 17, "A++")

console.log(stuObj)

stuObj = new CreateObj("Aditya", 6, "A++")

console.log(stuObj)