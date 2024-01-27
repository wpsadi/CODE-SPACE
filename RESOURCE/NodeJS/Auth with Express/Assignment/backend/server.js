import express from "express";
import {config} from "dotenv";
config();
import route from "./rout/routes.js";
import cors from "cors";
import dbconnect from "./db/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:"*",credentials:true}));
 
app.use("/auth",route)

app.use("*",(req,res)=>{
    res.status(200).send(`You have entered an invalid URL ${req.url}`)
})

const port = process.env.PORT;
app.listen(port,async ()=>{
    await dbconnect(); //---------PLease enable this connect to Database
    console.log(`The server is running at ${port}`)
})