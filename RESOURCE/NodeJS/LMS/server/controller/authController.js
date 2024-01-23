import AppError from "../utility/utility.js";
import userModel from "../models/user.models.js";
import cloudinary from "cloudinary";
import fs from "fs";

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
}

const register = async (req, res, next) => {
    // res.send("hi");
    const { fullName, email, password } = req.body;

    if (!fullName || !password || !email) {
        return next(new AppError("All fields are required", 400))
    }
    const userExist = await userModel.findOne({
        email
    })

    if (userExist) {
        return next(new AppError("User already Exists", 400))
    }

    const user = await userModel.create({
        fullName,
        email,
        password,
        avatar: {
            public_id: email,
            secure_url: "https://wpsadi.github.io/IEEE/images/ant-man_2015.jpg"

        }
    });

    if (!user) {
        return next(new AppError("User Registeration failed! try again", 400))
    }

    //ToDO file upload
    if (req.file) {
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'lms',
                width:250, //in px
                height:250,
                gravity:'faces',
                crop:'fill'

            });

            if (result) {
                user.avatar.public_id = result.public_id;
                user.avatar.secure_url = result.secure_url;

                //removing file from local storage
                console.log(result.public_id, result.secure_url)
                // fs.rm(`uploads/${req.file.filename}`)

            }

        } catch (e) {
            return next(new AppError("Error No Avatar or upload fail", 500))
        }
    }

    const token = user.JWT_gen();

    await user.save();
    user.password = undefined;

    res.cookie("token", token, cookieOptions)

    res.status(201).json({
        status: true,
        response: "User Registered SUCCESSFULLY"
    })

}

const login = async (req, res, next) => {
    // res.send("hi");
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("All fields are required", 400))
        }

        const userExist = await userModel.findOne({
            email
        }).select("+password");

        if (!userExist || !userExist.comparePassword(password)) {
            return next(new AppError("Password Match Error", 400))
        }

        userExist.password = undefined;

        const token = await userExist.JWT_gen();

        res.cookie("token", token, cookieOptions)

        res.status(201).json({
            status: true,
            response: "Logged In SUCCESSFULLY"
        })
    } catch (err) {
        return next(new AppError(err.message, 500))
    }
}

const logout = async (req, res, next) => {
    // res.send("hi");
    try {
        res.cookie("token", null, {
            maxAge: 0,
            httpOnly: true,
            secure: true
        })

        res.status(200).json({
            status: true,
            response: "User Logout Successfully"
        })
    }
    catch (err) {
        return next(new AppError("Logout Operation FAILED", 400))
    }

}

const signin = async (req, res) => {
    res.send("hi");
}

const userProfile = async (req, res, next) => {
    // res.send("hi");
    try {
        const userID = req.user.id;

        const user = await userModel.findById(userID);

        res.staus(200).json({
            status: true,
            message: "Got it",
            user: user
        })
    } catch (err) {
        return next(new AppError("Cannot get User Profile", 500))
    }
}


export { register, login, logout, signin, userProfile }