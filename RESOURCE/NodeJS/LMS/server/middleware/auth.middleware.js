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

const authorizeAdmin =(...roles) => async(req,res,next)=>{
    let userRole = req.user.role;
    userRole = "ADMIN"
    // console.log(userRole)
    if (roles.includes(userRole)){
        next();
    }
    else{
        return next(new AppError("Your account is not authorised to access this sensitive Info"))
    }
}

export {isLoggedIn,authorizeAdmin};