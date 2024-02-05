import { Router } from "express";
import { getAllCourses, getLecturebyId, CreateCourse, updateCourse, removeCourse,addLecture } from "../controller/course.controller.js";
import {authorizeAdmin, isLoggedIn,authorizeSubscriber} from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";

const routes = Router();

routes.route("/:id")
    .get(isLoggedIn,authorizeSubscriber,getLecturebyId)
    .post(isLoggedIn,authorizeAdmin("ADMIN"),upload.single("thumbnail"),addLecture)
    .put(isLoggedIn,authorizeAdmin("ADMIN"),updateCourse)
    .delete(isLoggedIn,authorizeAdmin("ADMIN"),removeCourse);


routes.route("/")
    .get(isLoggedIn,getAllCourses)
    .post(isLoggedIn,authorizeAdmin("ADMIN"),upload.single("thumbnail"),CreateCourse)



export default routes