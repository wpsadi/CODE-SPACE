//pure function

function add(x,y){
    console.log(x+y);
}

add(2,3)

// impure function - function that depend on variables declared outside the function

let sum = 3

function sm(num){
    console.log(num)
}

sm(sum)