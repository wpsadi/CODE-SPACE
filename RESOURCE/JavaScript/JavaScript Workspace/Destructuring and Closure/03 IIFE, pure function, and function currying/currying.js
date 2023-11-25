function f1(x){
    return function f2(y){
        return function f3(z){
            return x+y+z;
        }
    }
}


let x = f1(1)(2)(3)
console.log(x)