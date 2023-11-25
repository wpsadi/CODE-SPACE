//closure - inner functionction remembers the data and variables of its lexical function

function f1(num){
    return function f2(){
        console.log(num)
    }
}
f1(1)()

//global execution context
    // memory part and code part
        // memory part is also called lexical environment, so how does this work?
            // when 1 lexical function of f2 that is f1 is run it is memory part is stoed and rest of the function is deleted after execution
            // so when we call the f2 function it still has its lexical environent. this is lnown as closure