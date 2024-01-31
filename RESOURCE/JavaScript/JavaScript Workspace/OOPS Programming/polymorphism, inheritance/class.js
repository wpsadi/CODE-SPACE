class person{
    // declare every variable in constructor because there is no proper mechanism of classes it only looks like classes but it's not
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    organisation = "tata";
    //you can use "static" to make the organisation not available to print outside the class

    // LET CONST CAN NOT BE USED HERE because they are not defined in EcmaScript
    greet(){
        console.log("name is "+this.name)
    }
}


const rahul = new person("rahul",21);
rahul.greet()
console.log(rahul.organisation)


function NewPerson(name,age){
    this.name = name;
    this.age = age
}

NewPerson.prototype.greet = function(){
    console.log("name is "+this.name)
}

let rah = new NewPerson("rahul",12)

rah.greet()



class animal{
    constructor(name){
        this.name = name
    }

}

class dog extends animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}