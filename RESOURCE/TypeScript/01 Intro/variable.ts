let greet : string = "hello aditya"
// string

console.log(greet)
console.log(greet.toLowerCase())

// number [not numbers]
let userID = 321 // don't use much type inference unnecessarily because typescript is smart to automatically identify the data type

userID.toFixed()

// boolean
let isLoggedin : boolean = true


//any
let hero : string;

function getHero(){
    return "thor"
}

hero = getHero()



export {}