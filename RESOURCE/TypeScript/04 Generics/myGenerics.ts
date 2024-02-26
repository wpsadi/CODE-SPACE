const score : Array<number> = [1]

const names:Array<string>  = []

function identityOne(value:boolean | number):boolean|number{
    return value
    
}


function identityTwo(value:any):any{
    return value
}

function identityThree<Type>(val:Type):Type{
    return val

}

identityThree(true)

interface Bottle{
    name:String
}

identityThree<Bottle>({name:"r"})


function getSeachProduct<T>(products : T[]):T{
    // return products[3]
    // do some collection
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearch = <T,>(products : T[]):T=>{
    // above you may notice a comma in <T> it doesn't change the meaning ,
    //  but it simply means to not confuse it with an html tag, like in JSX
    // do some operation
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection:string,
    username:string,
    password:string
}


function anotherFunction<T,U extends Database>(val1:T, val2:U):object{
    return {
        val1,val2
    }
}


// anotherFunction(3,{connection:"",username:"",password:""})


interface Quiz{
    name:string,
    type:string
}

interface course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart : T[] = []

    addToCard(products:T){
        this.cart.push(products)
    }
}
