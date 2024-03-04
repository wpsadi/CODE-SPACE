const {compose} = require("redux")

function removeSpace(string){
    return string.split(" ").join("")
}


function repeatString(string){
    return string + string
}


function toConvertUpper(string){
    return string.toUpperCase()
}

const input = "abc efg ghj"

const composeFunction = compose(removeSpace,repeatString,toConvertUpper)

console.log(composeFunction(input))