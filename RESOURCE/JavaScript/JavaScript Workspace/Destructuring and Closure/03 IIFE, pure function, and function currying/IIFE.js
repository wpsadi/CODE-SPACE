// IIFE - Immediately Invoked Function Expression
(async function(){
    console.log("hi this is IIFE")
})()

//uses
    //privacy
    // avoid pollution of global namespace
    //module

//pollution'
let a = "this is pollutant";
(function(){
    console.log(a)
})();

(function(){
    const greet = "IIFE var";
    const greeting = () =>{
        return " hell IIFE"
    };

    console.log(greet);
    console.log(greeting());
})();

// data privacy
(function(){
    let pass = "niander"

    let showPass = () =>{
        console.log("passsword -",pass)
    }
    showPass();
})();

// showPass()



// module
const pt = (() => {
    let count = 0;
    return{
        increment : () => {
            count++;
        },
        reset: () =>{
            count = 0;
        },
        balance : () => {
            console.log(count)
        }
    }
})()
pt.increment()
pt.increment()
pt.balance()