import {config }from "dotenv";
config();
import app from "./app.js"
import dbConnect from "./config/dbConnection.js"


const port = process.env.PORT || 8005;
app.listen(port,()=>{
    dbConnect()
    console.log(`Server is unning at ${port}`)
}) 