const express = require("express")


const app = express()

app.get("/", (req,res) => {
    res.send("hello world")
})

app.get("/hello", (req,res) => {
    res.sendFile(__dirname + "/first.html")
})

app.listen(8000, () => {
    console.log("server is running at localhost:8000")
})