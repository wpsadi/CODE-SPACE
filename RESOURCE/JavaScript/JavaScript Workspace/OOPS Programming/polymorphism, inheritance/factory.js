function person(name,age){
    this.name = name;
    this.age = 12;
    this.greet = function(){
        console.log("hello "+this.name)
    }
}

let john = new person("john",21);

let rahul = new person("john",12);

console.log(rahul.name)

// new - {}, sets up prototype in this object, then bind the value given, then the object is returned

function createPerson(name,age){
    return {
        name:name,
        age:age,
        greet:function(){
            console.log("hello "+name)
        }
    }
}

let jane = createPerson("jane",15);

jane.greet()