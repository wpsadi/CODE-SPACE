import express from "express";
import {register,login,logout,signin,userProfile,forgot,reset,changePass,UpdateUser} from "../controller/authController.js"
import {isLoggedIn} from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js"

const routes = express.Router();

routes.post("/register",upload.single("avatar"),register);
routes.post("/login",login);
routes.post("/logout",logout);
routes.post("/signin",signin); 
routes.post("/me",isLoggedIn,userProfile);
routes.post("/reset/:resetToken",reset);
routes.post("/reset",forgot);
routes.post("/change-password",isLoggedIn,changePass)
routes.put("/update",isLoggedIn,upload.single("avatar"),UpdateUser)

 

export default routes; 