const emailVal = require("email-validator");
const userModel = require("../Connections/schema");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const cookieMiddleware = (req, res, next)=>{
    const token = req.cookies && req.cookies.token || null;

    if (!token) {
        res.status(400).json({
            status: false,
            response: "Unauthorised! Denied"
        })
    }

    try{
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email };
    }
    catch(err){
        res.status(400).json({
            status:false,
            response : err.message
        })
    }
    next();
}


const getUser = async (req, res) => {
    let userID = req.user.id;

    let userDetails = await userModel.findOne(userID);

    try {
        if (!userID) {
            res.status(400).json({
                status: false,
                response: "Session Expired. SignIn Login"
            })
        }

        res.status(200).json({
            status: true,
            response: userDetails
        })
    }
    catch (err) {
        res.status(400).json({
            status: false,
            response: err.message
        })
    }
}

module.exports = {cookieMiddleware,getUser};