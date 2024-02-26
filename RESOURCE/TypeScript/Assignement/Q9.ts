type T = {
    readonly name:string,
    readonly age: number
}



type Redaonli<T> = {
    readonly [k in keyof T]:T[k]
}

let x:Redaonli<T> = {name:"Aditya",age:2}

export {}