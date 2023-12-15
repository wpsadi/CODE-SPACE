const express = require("express");
const {signup} = require("./../controller/authController");
const authRouter = express.Router();

console.log(signup())

authRouter.post("/signup",signup);

module.exports = authRouter;