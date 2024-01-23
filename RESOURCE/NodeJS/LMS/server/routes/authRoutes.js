import express from "express";
import {register,login,logout,signin,userProfile} from "../controller/authController.js"

const routes = express.Router();

routes.post("/register",register);
routes.post("/login",login);
routes.post("/logout",logout);
routes.post("/signin",signin);
routes.post("/me",userProfile);


export default routes;