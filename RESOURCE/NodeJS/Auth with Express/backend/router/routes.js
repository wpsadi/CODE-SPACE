const express = require("express")
const {signup,signin} = require('../conroller/authController')
const {cookieMiddleware,getUser} = require("../Actions/login");
const logout = require("../Actions/logout");

authRouter = express.Router();


authRouter.post('/signup',signup);
authRouter.post("/signin",signin);
authRouter.get("/login",cookieMiddleware,getUser);
authRouter.get("/logout",logout)
 
module.exports = {authRouter};
