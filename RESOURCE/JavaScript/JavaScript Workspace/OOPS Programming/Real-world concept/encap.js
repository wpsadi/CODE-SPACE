function person(name,age){
    this.name = name;
    let _age = age; // private;
    this.greet=function(){
        console.log("hello "+_age)
    }
    this.getAge = function(){
        return _age
    }

    this.setAge = function(age){
        if (age>0){
            _age = age
        }
        else{
            console.log("age less than zero")
        }
    }
}

let x =new person("rohan",25);

x.greet()