function person(name){
    this.name = name
}

person.createPerson = function(name){
    return new person(name)
}
let rahul = person.createPerson("rahul");

console.log(rahul)