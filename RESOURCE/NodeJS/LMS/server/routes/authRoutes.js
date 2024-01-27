import express from "express";
import {register,login,logout,signin,userProfile,forgot,reset} from "../controller/authController.js"
import isLoggedIn from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js"

const routes = express.Router();

routes.post("/register",upload.single("avatar"),register);
routes.post("/login",login);
routes.post("/logout",logout);
routes.post("/signin",signin);
routes.post("/me",isLoggedIn,userProfile);
routes.post("/reset",forgot);
routes.post("/reset/:resetToken",reset);
 

export default routes;