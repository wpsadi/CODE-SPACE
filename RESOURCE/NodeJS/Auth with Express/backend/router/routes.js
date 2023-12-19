const express = require("express")
const {signup} = require('../conroller/authControls')
authRouter = express.Router();

authRouter.post('/signup',signup);

module.exports = {authRouter};
