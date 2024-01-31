class animal {
    constructor(name){
        this.name = name
    }

    makeSound(){
        console.log("Sound Sound")
    }
}

class Dog extends animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }

    makeSound(){
        console.log("Bark")
    }
}


class Cat extends animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }

    makeSound(){
        console.log("Meow meow")
    }
}

const generic = new animal("Gen");
const ted = new Dog("ted","Gr");
const tom = new Cat("Tom","white");


ted.makeSound()
tom.makeSound()