// if (condition) {
    
// }

let dividend=10;
let divisor= 2;

if (divisor!=0) {
    let result = dividend/divisor;
    console.log(result)
}
else{
    console.log("nooooo")
}

let isAdmin = false;

if (isAdmin == true){
    console.log("welcome coder")
}
else{
    console.log("getting account details")
}


let a=5 ;
let b=12 ;
let c=20 ;

if (a>b){
    console.log(a+" is greater than "+b)
    if (a>c){
        console.log("a is max")
    }
    else{
        console.log("c is max")
    }

}
else {
    console.log(b+" is greater than "+a)
    if (b>c){
        console.log("b is max")
    }
    else{
        console.log("c is max")
    }
}