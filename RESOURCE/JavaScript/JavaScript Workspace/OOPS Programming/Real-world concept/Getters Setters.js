class person{
    // declare every variable in constructor because there is no proper mechanism of classes it only looks like classes but it's not
    constructor(name,age){
        this.name = name;
        this._age = age;
    }

    get age(){
        return (`Age is ${this._age+5}`)
    }

    set age(val){
        this._age = val
        return "done"
    }

}

const john = new person("john",21);

console.log(john.age);
