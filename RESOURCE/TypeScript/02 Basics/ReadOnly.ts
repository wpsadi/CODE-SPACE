type User = {
    readonly _id: number[],
    name:string,
    email:string,
    isActive:boolean,
    creditNumber?:number// this question marks makes this as optional parameter
}

function createUser(u:User):User{
    return u
}


let x = createUser({name:"aditya","email":"aditya@g.com","isActive":true,"_id":[1,2]})

x._id.push(2) // TS allows this even after putting readOnly 

console.log(x._id)

type CardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate:string
}
type cardDetails = cardDate & CardNumber &{
    cvv : number
}


let z = (function(u:cardDetails):cardDetails{
    return u
})({cardNumber:"s",cardDate:"as",cvv:1})    

export {}