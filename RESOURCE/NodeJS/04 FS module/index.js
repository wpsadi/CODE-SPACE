const fs = require("fs")

// async way to read a file
x = fs.readFile("./dummy.txt", (err,data) => {
    if (err){
        console.log(err);
    }
    console.log(data);
})

