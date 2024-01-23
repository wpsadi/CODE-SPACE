import express from "express";
import {register,login,logout,signin,userProfile} from "../controller/authController.js"
import isLoggedIn from "../middleware/auth.middleware.js";

const routes = express.Router();

routes.post("/register",register);
routes.post("/login",login);
routes.post("/logout",logout);
routes.post("/signin",signin);
routes.post("/me",isLoggedIn,userProfile);
 

export default routes;