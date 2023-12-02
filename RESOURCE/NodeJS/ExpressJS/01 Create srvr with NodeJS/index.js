const http = require("http")

let srvr = http.createServer((req, res) => {
    // Home Page
    if (req.url == "/") {
        res.statusCode = 200;
        let obj = {
            page: "home",
            name: "aditya",
            extra: "100%"
        }
        res.setHeader('content-type', "application/json")
        res.end(JSON.stringify(obj))
    }
    // About Page
    else if (req.url == "/about") {
        res.statusCode = 200;
        let obj = {
            page: "about",
            name: "aditya",
            extra: "100%"
        }
        res.setHeader('content-type', "application/json")
        res.end(JSON.stringify(obj))
    }
    // Contact
    else if (req.url == "/contact") {

        res.statusCode = 200;
        res.setHeader('content-type', "application/json")
        

        const options = {
            hostname: "fakestoreapi.com",
            path: "/products/1",
            method: "GET"
        }


        const APIreq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                console.log(res.end(data.toString()))
            })
        });

        APIreq.on("error", () => {
            console.log("error")
        })

        APIreq.end()


    }
    // rest
    else{
        res.statusCode = 200;
        let obj =  {
            page : 'not found',
            name : "aditya",
            extra : "100%"
        }
        res.setHeader('content-type',"application/json")
        res.end(JSON.stringify(obj))
    }




})



let port = 8000;
srvr.listen(port, () => {
    console.log("srvr is up")
})
