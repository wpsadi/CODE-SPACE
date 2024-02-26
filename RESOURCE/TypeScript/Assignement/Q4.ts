function padLeft(input:string|number,padding:string):string{
    if (typeof input === "number"){
        return `${" ".repeat(input)}padding`
    }
    return input+padding
}

console.log(padLeft(10,"adiyya"))