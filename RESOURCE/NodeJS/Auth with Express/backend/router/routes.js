const express = require("express")
const {signup,signin} = require('../conroller/authController')
const {cookieMiddleware,getUser} = require("../conroller/login");
const logout = require("../conroller/logout");

authRouter = express.Router();


authRouter.post('/signup',signup);
authRouter.post("/signin",signin);
// authRouter.get("/login",cookieMiddleware,getUser);
// authRouter.get("/logout",logout)
  
module.exports = {authRouter};
