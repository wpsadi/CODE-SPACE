const fs = require("fs")

// async way to read a file
// x = fs.readFile(__dirname+"/dummy.txt", (err,data) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     // by default, data is in buffer ; use toString to convert
//     console.log(data.toString());
// })

//sync way to reada file
// x = fs.readFileSync(__dirname+"/dummy.txt");
// console.log(x.toString())

//Read  > open +read 


// old way to read file
const buf = new Buffer(1024)

fs.open(__dirname+"/dummy.txt","r", (err,data) => {
    if (err){
        console.log(err)
        return;
    }
    fs.read(data,buf, 0,buf.length, 0, function (er,byte  ){
        if (er){
            console.log("error in reading file");
            return;
        }
        console.log(byte)
        console.log(buf.slice(0,byte).toString())
        

        fs.close(data, function(err){
            if (err){
                console.log("error in closing")
                return;
            }
            console.log("file is closed now")
        })
    })

})
 
// writing data
// fs.writeFile(__dirname+"/dummy.txt", "this is written using node", (err,data) => {
//     if (err){
//         console.log("err in writing file")
//         return;
//     }
//     console.log("succes in reading file")
// })

// appending data
// f =fs.appendFileSync(__dirname+"/dummy.txt"," aditya is legend")


//delete file
fs.unlinkSync(__dirname+"/dummy.txt")