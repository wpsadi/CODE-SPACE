function manipulateString(str, func){
    return func(str)
}

function logString(str){
    console.log("updated string is :", str.toUpperCase())
}

manipulateString("hi therre", logString)