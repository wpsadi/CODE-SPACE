const express = require("express")
const {signup} = require('../conroller/authController')
authRouter = express.Router();

authRouter.post('/signup',signup);
 
module.exports = {authRouter};
