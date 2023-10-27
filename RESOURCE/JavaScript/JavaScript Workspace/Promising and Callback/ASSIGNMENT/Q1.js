function f(array,t){
    return t(array)
}

function t(array){{}
    for (let i in array){
        array[i] *= 2
    }

    return array
}

x = f([1,2,3,4,5,6,7,8,9,0],t)

console.log(x)