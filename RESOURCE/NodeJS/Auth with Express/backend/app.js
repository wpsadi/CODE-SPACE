const express = require("express");
const {authRouter} = require("./router/routes");
const dbConnect = require("./config/databseConfig");

let app = express();

dbConnect();

app.use(express.json())

app.use("/api/auth",authRouter);

app.use("/google",function(req,res){
    res.status(200).json({
        data : "google knows"
    })  
})

app.use("/",function(req,res){
    res.status(200).json({
        data : "JWTauth error"
    })
})  

module.exports = app;
