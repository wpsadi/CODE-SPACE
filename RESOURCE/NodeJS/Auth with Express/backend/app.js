const express = require("express");
const {authRouter} = require("./router/routes")

let app = express();

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
