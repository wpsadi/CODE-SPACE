const http = require("http");

const srvr = http.createServer((req,res)=>{
    if (req.url == "/"){
        res.end("I am Happy To learn Full Stack Web Develoment from PW Skills");
    }
})

srvr.listen(8000);