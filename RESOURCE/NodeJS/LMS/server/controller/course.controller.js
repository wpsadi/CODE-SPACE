import { application } from "express"
import Course from "../models/course.model.js"
import AppError from "../utility/utility.js"
import cloudinary from "cloudinary";
import fs from "fs/promises";
import app from "../app.js";

const getAllCourses = async (req,res,next)=>{
    const course = await Course.find({}).select("-lectures")
    
    res.status(200).json({
        success:true,
        message:"All Course",
        course,
    })
}

const getLecturebyId = async (req,res,next)=>{
    const id = req.params.id
    const course = await Course.findbyId(id).select("-lectures");
    
    res.status(200).json({
        success:true,
        message:"All Course",
        course:course.lectures,
    })
}

const CreateCourse = async(req,res,next)=>{
    // console.log(req.body)
    try{
        const {title,description,category,createdBy} = req.body;

        if (!title || !description || !category || !createdBy){
            return next(new AppError("All fields are required",400))
        }
        

        const course = await Course.create({title,category,description,createdBy});
        

        if (!course){
            return next(new AppError("Course couldn't be created. Please try again",500))
        }
        console.log("hi")

        if (req.file){
            const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:"lms"})

            console.log(result)

            if (result){
                console.log(result)
                course.thumbnail.public_id = result.public_id;
                course.thumbnail.secure_url = result.secure_url;
            }

            fs.rm(`uploads/${req.file.filename}`)
        }
        await course.save();
        res.status(200).json({
            status:true,
            message:"Course Created Successfully",
            course:course
        })
    }
    catch(err){
        return next(new AppError(err.message,400))
    }
}

const updateCourse = async (req,res,next)=>{
    try{
        const {id} = req.params;
        console.log(req.body)

        const course = await Course.findByIdAndUpdate(id,
            {
                $set:req.body
            },
            {
                runValidators:true
            }
            )

        if (!course){
            return next(new AppError("Course with this ID doesn't exist",400))
        }

        res.status(200).json({
            status:true,
            message:"Course Updated Successfully",
            course:course
        })
    }
    catch(e){
        return next(new AppError(e.message,500))
    }
}



const removeCourse = async (req,res,next)=>{
    try{
        const {id} = req.params;
        console.log(req.body)

        const course = await Course.findByIdAndDelete(id)

        console.log(course)

        if (!course){
            return next(new AppError("Course with this ID doesn't exist",400))
        }

        res.status(200).json({
            status:true,
            message:"Course Deleted Successfully",
            course:course
        })
    }
    catch(e){
        return next(new AppError(e.message,500))
    }
}

const addLecture = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const course = await Course.findById(id)

        // console.log(course)

        if (!course){
            return next(new AppError("Course with this ID doesn't exist",400))
        }

        if (!title || !description){
            return next(new AppError("Incomplete details",400))
        }

        let lectureData = {
            title,description,thumbnail:{
            }
        }

        if (req.file){
            const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:"lms"})

            // console.log(result)

            if (result){
                // console.log(result)
                lectureData.thumbnail.public_id = result.public_id;
                lectureData.thumbnail.secure_url = result.secure_url;
            }

            fs.rm(`uploads/${req.file.filename}`)
        }

        // console.log(lectureData)


        course.lectures.push(lectureData);
        course.numbersOfLectures = course.lectures.length

        await course.save();

        res.status(200).json({
            status:true,
            message:"Lecture Successfully added to course",
            // course:course
        })
    }
    catch(e){
        return next(new AppError(e.message,500))
    }
}
export {getAllCourses,getLecturebyId,CreateCourse,updateCourse,removeCourse,addLecture}