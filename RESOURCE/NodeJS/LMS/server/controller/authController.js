import AppError from "../utility/utility.js";
import userModel from "../models/user.models.js";

const register = async (req,res,next)=>{
    // res.send("hi");
    const {fullname,email,password} = req.body;

    if (!fullname || !password|| !email){
        return next(new AppError("All fields are required",400))
    }
    const userExist = await userModel.findOne({
        email
    })

    if (userExist){
        return next(new AppError("User already Exists",400))
    }

    const user = await userModel.create({
        fullName,
        email,
        passsword,
        avatar:{
            public_id:email,
            secure_url:"https://wpsadi.github.io/IEEE/images/ant-man_2015.jpg"

        }
    });

    if (!user){
        return next(new AppError("User Registeration failed! try again",400))
    }

    //ToDO file upload

    await user.save();
    user.password = undefined

    res.status(201).json({
        status:true,
        response:"User Registered SUCCESSFULLY"
    })

}

const login = async (req,res)=>{
    res.send("hi");
}

const logout = async (req,res)=>{
    res.send("hi");
}

const signin = async (req,res)=>{
    res.send("hi");
}

const userProfile = async (req,res)=>{
    res.send("hi");
}


export {register,login,logout,signin,userProfile}