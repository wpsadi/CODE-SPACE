function addNums(num1:number,num2:number):number{
    return num1+num2
}

let x = addNums(3,3)

let loginUser = (username:string,password:string, paid:boolean = false):string=>{
    return "hi"
}

let user = loginUser("aditya","adityaislegend@outlook.com")


const heroes = ["thor","split"]
// const heroes = [1,2]

heroes.map((hero):string=>{
    return "here is "+hero
})

const consoleErr = (hero:string):void=>{
    console.log(hero)
    // return "here is "+hero
}

const handleErr = (hero:string):never=>{
    throw new Error(hero)
    // return "here is "+hero
}


export {}