import AppError from "../utility/utility.js";
import JWT from "jsonwebtoken";
import {config} from "dotenv";
config();

const isLoggedIn = async (req,res,next)=>{
    const {token} = req.cookies;

    if (!token){
        return next( new AppError("No token found! Login to generate One"));
    }
    const userDetails = await JWT.verify(token,process.env.JWT_secret)

    req.user = userDetails;

    next()
}

export default isLoggedIn;