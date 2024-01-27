import AppError from "../utility/utility.js";
import userModel from "../models/user.models.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import sendEmail from "../utility/sendEmail.js"

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

        },
    });

    if (!user) {
        return next(new AppError("User Registeration failed! try again", 400))
    }

    //ToDO file upload
    if (req.file) {
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms',
                width: 250, //in px
                height: 250,
                gravity: 'faces',
                crop: 'fill'

            });

            if (result) {
                user.avatar.public_id = result.public_id;
                user.avatar.secure_url = result.secure_url;

                //removing file from local storage
                // console.log(result.public_id, result.secure_url)
                fs.rm(`uploads/${req.file.filename}`)

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



console.log();



const reset =async (req,res,next)=>{
  const { resetToken } = req.params;//get request ki tarah parameter aaeaga token ka

  const { password } = req.body;

  const forgotPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  if (!password) {
    return next(new AppError('Password is required', 400));
  }

  console.log(forgotPasswordToken);

  // Checking if token matches in DB and if it is still valid(Not expired)
  const user = await userModel.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() }, // $gt will help us check for greater than value, with this we can check if token is valid or expired
  });

  if (!user) {
    return next(
      new AppError('Token is invalid or expired, please try again', 400)
    );
  }

  user.password = password;

  user.forgotPasswordExpiry = undefined;
  user.forgotPasswordToken = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password changed successfully',
  });
}

const forgot = async (req,res,next)=>{
    const {email} = req.body;

    if (!email){
        return next(new AppError("Email is required in forgot password",400))
    }

    const user = await userModel.findOne({email})

    if (!user){
        return next(new AppError("Email doesn't exist in database",400));
    }

    const resetToken = await user.generatePasswordResetToken();
    await user.save();

    const resetPasswordURL = `${process.env.frontend_url}/reset-password/${resetToken}`;
    const message = `You can reset your your password by clicking <a href="${resetPasswordURL}" target="_blank">Click Here</a>"`
    const subject = "Reset Password";
    try{
        await sendEmail(email,subject,message)
        res.status(200).json({
            success:true,
            message:"Rest password link has been sent to your email"
        })
    }catch(err){
        user.forgotPasswordExpiry = undefined;
        user.forgotPasswordToken = undefined;
        return next(new AppError(e.message,500))
    }
}


export { register, login, logout, signin, userProfile, forgot, reset}