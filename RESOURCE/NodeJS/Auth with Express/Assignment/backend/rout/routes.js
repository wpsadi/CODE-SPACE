import { Router, application } from "express";
import User from "../model/user.Model.js"
import JWT from "jsonwebtoken"
import { config } from "dotenv";
config();

const route = Router();

const middleWare = async function (req, res, next) {

    const token = req.cookies.token || null;
    if (!token) {
        res.status(400).json({
            status: true,
            res: "No token found"
        });
    }

    try {
        const payload = JWT.verify(token, process.env.JWT_key);
        req.user = { id: payload.id };
        next();


    } catch (e) {
        res.status(400).json({
            status: false,
            res: e.message
        })
    }

}

const autolog = async (req, res) => {
    // console.log(req.user)
    const _id = (req.user)["id"];

    const user = await User.findById(id)

    if (!user) {
        res.status(404).json({
            status: false,
            res: "No account details found! please contact support services"
        })
    }else{
        res.status(200).json({
            status: true,
            res: user
        })
    }

    // res.send("hi")


}

const signup = async (req, res, next) => {
    // res.send("signup");

    let { Name, username, email, password, bio } = req.body;

    console.log(req.body)

    if (!Name || !username || !email || !password || !bio) {
        res.status(400).json({
            status: false,
            res: "Required field at input are invalid"
        })
        return;
    }

    const userCheck = await User.findOne({
        email
    })
    if (userCheck) {
        res.status(400).send({
            status: false,
            res: "Account already Exists"
        })
        return;
    }

    try {
        const user = User({
            Name, username, email, password, bio, userType: "user"
        })

        await user.save();

        const token = user.JWT_gen(email);
        res.cookie("token", token, { secure: true, httpOnly: true, path: "/", sameSite: "none", expiresIn: 24 * 60 * 60 * 1000 })
        res.status(200).send({
            status: true,
            res: "ACCOUNT CREATED SUCCESSFULLY",
            token: token
        })
    }
    catch (err) {
        res.status(400).send({
            status: true,
            res: err.message,
        })
    }



 

}

const login = async (req, res) => {
    let { email, password } = req.body || null;
    try {
        if (!email || !password) {
            res.status(400).json({
                status: false,
                res: "field are not provided for login"
            })
        } else {
            const user = await User.findOne({ email }).select("+password")
            console.log(user)
            if (!user) {
                res.status(400).json({
                    status: false,
                    res: "user doesn't exist"
                })
            }else{
                if (user.passVerify(password)) {
                    const token = user.JWT_gen();


                    res.cookie("token",token,{ secure: true, httpOnly: true, path: "/", sameSite: "none", expiresIn: 24 * 60 * 60 * 1000 })
                    res.status(200).json({
                        status: true,
                        token: token
                    })
                }
                else {
                    res.status(400).json({
                        status: false,
                        res: "incorrect password"
                    })
                }
            }


        }
    }
    catch (e) {
        res.status(400).json({
            status: false,
            res: e.message
        })
    }




}

const adminLogin = async (req,res)=>{
    const id = req.user["id"];
    // console.log(id)
    try{
        console.log(id)
        if (!id){
            res.status(400).json({
                status:false,
                res:"No token available"
            })
        }else{
            const user = await User.findById(id)
    
            if (!user){
                res.status(400).json({
                    status:false,
                    res:"Invalid Token"
                })
            }else{
                const Usertype = user["userType"];
    
                if (!Usertype){
                    res.status(400).json({
                        status:false,
                        res:"It seems that your account was marks for granting access but you are not given the permission. As we have no info about what type of user you are"
                    })
                }
                else{
                    if (Usertype =="admin"){
                        res.status(400).json({
                            status:true,
                            res:`Welcome ${user["Name"]}! You are a authorised Administrator `
                        })
                    }
                    else{
                        res.status(400).json({
                            status:true,
                            res:`Sorry ${user["Name"]}! This page doesn't belong to you, please return to our main website `
                        })
                    }
                }
            }
        }
    }
    catch(e){
        res.status(400).json({
            status:true,
            res:e.message
        })
    }


}
route.post("/autoLogin", middleWare, autolog);
route.post("/signup", signup);
route.post("/login", login);
route.post("/adminRoute",middleWare,adminLogin)






export default route;