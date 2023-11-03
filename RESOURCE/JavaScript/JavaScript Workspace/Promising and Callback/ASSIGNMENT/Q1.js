function array1(arr, arrayDoub){
    return arrayDoub(arr);
}

function arrayDoub(arr){
    for (let i in arr){
        arr[i] *= 2;
    }

    console.log(arr)
}


x = array1([1,2,3,4,5,6,7,8,9,0],arrayDoub)