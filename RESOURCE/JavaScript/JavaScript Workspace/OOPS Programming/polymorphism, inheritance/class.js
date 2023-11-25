class person{
    // declare every variable in constructor because there is no proper mechanism of classes it only looks like classes but it's not
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // LET CONST CAN NOT BE USED HERE because they are not defined in EcmaScript
    greet(){
        console.log("name is "+this.name)
    }
}


const rahul = new person("rahul",21);
rahul.greet()