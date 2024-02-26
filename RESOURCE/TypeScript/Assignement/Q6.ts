type Admin = Person & {
    isAdmin:boolean
}

interface Person{
    name:string,
    age:number,
    email?:string|undefined // question ark makes it optionsla
}


let x:Admin = {
    isAdmin:true,
    name:"aditya",
    age:1
}


export{}