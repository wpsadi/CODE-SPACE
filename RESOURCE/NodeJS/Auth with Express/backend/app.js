const express = require("express");
const app = express(); 
// app.use(express.json());

// const authRouter = require("./route/authRoute");

app.use('/', (req,res) => {
    res.status(200).json({
        data: "JWTAuth server"
    });
})

// app.use('/', (req,res) => {
//     res.status(200).json({
//         data: "JWTAuth"
//     })
// })

app.use("/api/auth", function(){
    res.json({
        x:"y"
    })
});


module.exports = app;