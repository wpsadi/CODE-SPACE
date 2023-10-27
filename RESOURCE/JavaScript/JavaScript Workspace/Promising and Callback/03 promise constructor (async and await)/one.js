function createPromise(){
    return new Promise( function(resolve,reject){

        // resolve("done")
        reject("no")
        console.log("a priomise is made here to print this statement")
    })
}

// console.log("stariing of the code")
// x = createPromise()
// console.log("in the above line promise is called")

// x.then(function(){
//     null
// })

//aync  functions

// async function consummeMe(){
//      console.log("I am vegetarian")
//      response = await createPromise()
//      console.log("response is ",response)
// }

// console.log("start")
// console.log(consummeMe())
// console.log("end")



    // in case a promise fails , the the value that we provide in the reject is return as the error
async function consummeMe() {
    try {
        console.log("I am vegetarian");
        const response = await  createPromise();
        console.log("response is", response);

    } catch (err) {
        // const response = "hi"
        console.error("Error:",err);
        // null
    }
}
    
    console.log("start");
    consummeMe()
    console.log("end");
