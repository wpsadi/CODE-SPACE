const path = require("path")

//path.sep - checck what is the seperator in the file patjh (\ in window, / in linux)
// console.log(path.sep)

// process.env.PATH - tells about the process used in running a node file
// console.log(process.env.PATH)

//path.delimitter - how the process are seperated (;)
// console.log(path.delimiter)
 
let x,y;
let p = `/public/home/index.js`;
let p2 = __filename // gives current filepath
let dir1 = __dirname // give director name
//path.basename(path, [,ext])
x = path.basename(p2) //name of file with extension
y = path.basename(p2,".js");

console.log(x);

//path.dirname - give dir of the path given
x =  path.dirname(p2)
// console.log(x)

// path.extname - gives extenison name
x = path.extname(p2)
// console.log(x)
// console.log(path.extname("hello.hi.js"))

//path.format - give a object containing dir and basename and it will give you file address 
x = path.format({
    dir : path.dirname(p2),
    base : path.basename(p2)
})
// console.log(x)

//path.isAbsolute - tells if path is absolute or not
// console.log(path.isAbsolute(x))
// console.log(path.isAbsolute("./index.js"))

// path.join  - combines the path 
x = path.join("public","js","dist")
console.log(x)

// path.parse - breaks an address into differenct parts - ext,base,dir,root,name
x = path.parse(__filename)
// console.log(x)

//path.relative - gives a relative path with repect to the 1st parameter
x = path.relative(__filename,__dirname+"/x.html")
// console.log(x)

//path.resolve - it gives directory
x = path.resolve()
console.log(x)

//path.normalise - 
x = path.normalize("//home/user//js")
// console.log(x)


