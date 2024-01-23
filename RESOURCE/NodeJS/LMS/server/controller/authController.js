import AppError from "../utility/utility.js";

const register = async (req,res,next)=>{
    // res.send("hi");
    const {fullname,email,password} = req.body;

    if (!fullname || !password|| !email){
        return next(new AppError("All fields are required",400))
    }


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