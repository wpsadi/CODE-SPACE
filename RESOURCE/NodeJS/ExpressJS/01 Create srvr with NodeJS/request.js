const http = require("node:http")

const options = {
    hostname : "fakestoreapi.com",
    path : "/products/1",
    method : "GET"
}


const APIreq = http.request(options, (apiRes) => {
    apiRes.on("data",(data) => {
        console.log(data.toString())
    })
});

APIreq.on("error",() => {
    console.log("error")
})

APIreq.end()