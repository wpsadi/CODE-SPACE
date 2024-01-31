function hi(name,age){
    this.name= name;
    this.age = age;


}

hi.prototype.greet =function(){
    console.log(`HI ${this.name}`)
}

let x =new hi("aditya",21);
x.greet()