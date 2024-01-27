import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import morgan from "morgan";
import routes from "./routes/authRoutes.js"
import errMiddleWare from "./middleware/error.middleware.js";
config();


const app =  express();
app.use(express.json());
app.use(cors({
    origin: process.env.frontend_url,
    Credential: true
}));
app.use(cookieParser());
app.use(morgan('common'))
app.use(express.urlencoded({extended:true}))


app.use("/ping",(req,res)=>{
    res.status(200).send("pong")
})

// routes of 3 modules
app.use("/api/v1/user",routes)

app.all("*",(req,res)=>{
    res.status(404).send("Err 404 : URL doesn't exist on this server")
})

app.use(errMiddleWare)

export default app