import { config } from "dotenv"
import userModel from "../models/user.models.js";
import AppError from "../utility/utility.js";
import { razorpay } from "../server.js";
import crypto from "crypto"
import payment from "../models/pay.model.js";
config();

export const RazorpayAPIKey = async(req,res,next)=>{
    res.staus(200).json({
        status:true,
        message:"Razorpay API key",
        key:process.env.rzp_key
    })
}

export const buySubscription = async(req,res,next)=>{
    try{

        const {email} = req.user;
    
        const user = await userModel.findOne({email});
    
        if (!user){
            return next(new AppError("User not logged in",400))
        }
    
        if (user &&user.role == "ADMIN"){
            return next(new AppError("Admin can't purchase a course with this account",400))
        }
    
        const subscription = await razorpay.subscriptions.create({
            plan_id:process.env.plan_id,
            customer_notify:1
        })
    
        user.subscription.id = subscription.id;
        user.subscription.status = subscription.status;
    
        await user.save();
    
        res.status(200).json({
            status:true,
            messsage:"Subscribed",
            subscription_id:subscription.id
        })
    }catch(e){
        return next(new AppError(e.message))
    }
}

export const verfySubs = async(req,res,next)=>{
    try{

        const {id} = req.user;
        const {pay_id,pay_sig,pay_sub_id} = req.body
    
        const user = await userModel.findById(id);
    
        if (!user){
            return next(new AppError("User not logged in",400))
        }
    
        const subID = user.subscription.id;
    
        const genSignRazr = crypto.createHmac('sha256',process.env.rzp_secret)
        .update(`${pay_id}|${pay_sub_id}`)
        .digest('hex')
    
        if (genSignRazr != pay_sig){
            return next(new AppError("Invalid Payment",500))
        }
    
        await payment.create({
            pay_id,pay_sig,pay_sub_id
        })
    
        user.subscription.status = 'active';
    
        await user.save();
    
        res.status(200).json({
            status:true,
            message:"Payment successfull"
        })
    }catch(e){
        return next(new AppError(e.message))
    }
}

export const cancelSubscription = async(req,res,next)=>{
    try{

        const {id} = req.user;
    
        const user = await userModel.findById(id);
    
        if (!user){
            return next(new AppError("Invalid user"))
        }
    
        if (user &&user.role == "ADMIN"){
            return next(new AppError("Admin can't purchase a course with this account",400))
        }
    
        const subID = user.subscription.id;
    
        const subscription = await razorpay.subscriptions.cancel(subID);
    
        user.subscription.status=subscription.status;
    
        await user.save()
    }catch(e){
        return next(new AppError(e.message))
    }

}

export const allPayments = async(req,res,next)=>{
    try{

        const {count} =req.query;
    
        const subs = await razorpay.subscriptions.all({
            count:count||10
        })
    
        createSecretKey.status(200).json({
            success:true,
            message:'all payments',
            subs
        })
    }catch(e){
        return next(new AppError(e.message))
    }
    


}


