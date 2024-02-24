let score:number | string | boolean = true

type User = {
    name:string,
    id:number
}

type Admin = {
    username: string,
    id:number
}

let me :User | Admin = {name:"aditya",id:1}

me = {username:"aditya Admin",id:2}

function getDbID(id:number | string):void{
    console.log(`This is my DbID : ${id}`)
    return
}
getDbID(3)
getDbID("3")

function GETDbID(id:number | string):void{
    if (typeof id === "string"){
        id.toLowerCase()
    }
    return
}

//array
const data:number[] = [1,2,3,3,4]
const data2: (number|string|boolean)[] = [1,2,"hi",true]

let pi:3.14 = 3.14

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "middle"

export {}