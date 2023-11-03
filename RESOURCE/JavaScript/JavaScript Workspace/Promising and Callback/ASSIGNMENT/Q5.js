// greeting promise


function prompt(name){
    return new Promise( (resolve,reject) => {
        resolve("Greetings! " + name);
    })
}



let user = "mithun"

function f1(name,prompt){
    return prompt(name)
}

x = f1(user,prompt)


x.then((response) =>{
    console.log(response)
})

// console.log(x)