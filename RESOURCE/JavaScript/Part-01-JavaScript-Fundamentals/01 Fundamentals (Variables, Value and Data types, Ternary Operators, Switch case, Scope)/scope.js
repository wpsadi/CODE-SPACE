//  Global
//  Local - function, block
// Module - commonjs, module

let variable_global = "hi";

function say_hi(){
    console.log(variable_global);
    let x = 10
}

say_hi()
// console.log(x)

if(true){
    let y = 20;
}

console.log(y)

{/* <script type="module" src=""></script> */}