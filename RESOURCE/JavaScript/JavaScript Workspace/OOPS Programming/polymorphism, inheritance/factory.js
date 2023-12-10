function person(name,age){
    this.name = name;
    this.age = 12;
    this.greet = function(){
        console.log("hello "+this.name)
    }
}