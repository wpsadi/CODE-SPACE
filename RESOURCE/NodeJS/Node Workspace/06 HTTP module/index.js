const http = require("http");

let srvr = http.createServer((req,res) =>{
    if (req.url == "/"){
        let obj = {
            name: "aditya",
            extra : "100%"
        }
        res.write(JSON.stringify(obj))
    }
    res.end()
})

srvr.listen(8000)