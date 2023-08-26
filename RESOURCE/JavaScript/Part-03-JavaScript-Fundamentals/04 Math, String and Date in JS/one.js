//Math

// Math .abs()
console.log( Math.abs(-25) ) // 25

// Math.exp()
console.log( Math.exp(2) ) // 7.38905609893065

// Math.trunc()
console.log( Math.trunc(5.7) ) // 5

// Math.sqrt()
console.log( Math.sqrt(4) ) // 2

// Math.round()
console.log( Math.round(4.5) ) // 5

// Math.cbrt()
console.log( Math.cbrt(27) ) // 3

// Math.ceil()
console.log( Math.ceil(3.4) ) // 4

// Math.floor()
console.log( Math.floor(3.1) ) // 3

// accessing value of pie
console.log(Math.PI) // 3.141592653589793

// power - Math.pow()
console.log( Math.pow(2,4) ) // 16

// Math.min()
console.log( Math.min(2,4,5,3,2,3) ) //2

// Math.max()
console.log( Math.max(2,4,5,3,2,3) ) // 5


// STRING

console.log( 'hello world' )
console.log( "hello world" )
console.log( `hello world` )

console.log( '${10+20}' )
console.log( "${10+20}" )
console.log( `${10+20}` )

console.log( 'hello world'.length ) // 11

console.log( 'hello world'.charAt(1) )

console.log( "hello"+" "+"world" )
let a,b
a="hello"
b="world"
console.log(`${a}} ${b}` )

console.log( 'hello world'.endsWith("world") )


console.log( 'hello world'.includes("t") ) // false
console.log( 'hello world'.includes("0") ) // true

console.log( 'hello world'.indexOf("w") )


console.log( 'hello world'.padEnd(20, "?") )

console.log( 'hello world'.padStart(20, "$") )

console.log( 'hell'.repeat(5) ) 

console.log( 'hello world world'.replace("world" , "everyone") )

console.log( 'hello world world'.replaceAll("world", "everyone") )

console.log( 'hello world'.slice(6) )

console.log( 'hello world'.slice(6, 11) )

console.log( 'hello world'.substring(2) )
console.log( 'hello world'.slice(2) )

console.log( 'hello world'.startsWith("hello") )

console.log( 'hello world'.split(" ") )

console.log( 'Hello World'.toLowerCase(" ") )

// 'string'.toUpperCase()
console.log( 'HEllo World'.toUpperCase(" ") ) // HELLO WORLD

// 'string'.trim()
console.log( ' HEllo World '.trim() ) // HEllo World

// 'string'.trimEnd()
console.log( ' HEllo World '.trimEnd() ) // HEllo World

// only ending spaces are removed

// 'string'.trimStart()
console.log( ' HEllo World '.trimStart() ) // HEllo World

// only starting spaces are removed




// Date

let DateTime = new Date()
console.log(DateTime)

console.log(Date.now()) // in miliseconds

console.log( DateTime.getDate() )
console.log( DateTime.getDay() )

console.log( DateTime.getFullYear() )
console.log( DateTime.getHours() )
console.log( DateTime.getMinutes() )
console.log( DateTime.getMonth() )

console.log( DateTime.getTime() )
console.log( DateTime.setDate(29) )
console.log( DateTime.setFullYear(2050) )


console.log( DateTime.toDateString(2050) )
console.log( DateTime.toUTCString() )