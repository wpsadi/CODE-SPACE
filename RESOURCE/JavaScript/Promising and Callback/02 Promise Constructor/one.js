function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function(){
            reject("no") // thhen u can use .then().catch()
            resolve("done")// if you did resolve then u can use ,.then()
            console.log("hi")
        },1000)
    })
}

console.log("strt")

let x = createPromise()
console.log("new promise sppotted")


x.then(function(value){ // value conatins the status of the promise
    console.log("hi",value)
}).then(function(){
    null
}).catch(function(value){
    console.log("catch :)",value)
}).finally(function(value){
    console.log("good luck")
})

// for (let i =0; i<100000000000; i++){

// }