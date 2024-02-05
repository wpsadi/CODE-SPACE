import { Router } from "express";
import { RazorpayAPIKey,buySubscription,verfySubs,cancelSubscription,allPayments } from "../controller/payment.controller.js";
import { authorizeAdmin, isLoggedIn } from "../middleware/auth.middleware.js";

const route = Router();


route.route("/razorpay_key").get(isLoggedIn,RazorpayAPIKey)
route.route("/subscribe").post(isLoggedIn,buySubscription)
route.route("/verify").post(isLoggedIn,verfySubs)
route.route("/unsubscribe").post(isLoggedIn,cancelSubscription)
route.route("/").get(isLoggedIn,authorizeAdmin("ADMIN"),allPayments)

export default route;