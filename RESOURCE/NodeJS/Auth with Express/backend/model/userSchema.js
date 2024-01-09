const  mongoose = require("mongoose");
require("dotenv").config();
const JWT = require("jsonwebtoken")

const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type : String,
        required : [true , "User name is required"],
        // you can also use minLength, maxLength 
        trim: true
    },
    email:{
        type : String,
        lowercase : true,
        unique : [true, "already exist"]
    },
    password:{
        type : String,
        select :false // it tells to never return the password value
    },
    forgotPasswordToken:{
        type:String
    },
    forgitPassowrdExpiryDate : {
        type : String
    }
},{
    timestamps:true
});

userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id: this._id,email:this.email},
            process.env.SECRET,
            {expiresIn : '24h'}
        )
    }
}

const userModel = mongoose.model("user",userSchema);

// if userschema method are declared after usermodel, then  the wont be accessible in the export

module.exports = userModel;