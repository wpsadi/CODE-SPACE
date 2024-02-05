import { Model,Schema, model } from "mongoose";

const paySchema = new Schema({
    razorpay_payment_id:{
        typr:String,
        required:[true,"Payment id not found"]
    },
    razorpay_subscription_id:{
        typr:String,
        required:[true,"Payment subscription not found"]
    },
    razorpay_signature:{
        typr:String,
        required:[true,"Payment signature not found"]
    }
})

const payment = model("Payments",paySchema);
export default payment;