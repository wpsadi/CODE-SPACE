function person(name){
    this.name = name//instance member
}

person.prototype.greet =function(){//prototype member
    console.log(`HI ${this.name}`)
}


function Employee(name,id){
    this.name = name
    this.id = id
}

Employee.prototype = Object.create(person.prototype)
Employee.prototype.constructor = Employee;

Employee.prototype.showEmp =function(){
    console.log(`Hell ${this.id}`)
}

let pw = new Employee("hc","hc123")

pw.greet()
pw.showEmp()