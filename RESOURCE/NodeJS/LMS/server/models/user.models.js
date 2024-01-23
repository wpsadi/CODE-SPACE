import { Schema,model } from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import {config} from "dotenv";
config();

const UserSchema = new Schema({
    fullName:{
        type:String,
        lowercase:true,
        trim:true,
        minLength:[5,"Name must be more than 5 letters"],
        maxLength:[60,"Name should be less than 60 characters"],
        required:[true,"Name is Empty"]
    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
        required:[true,"Email is empty"],
        lowercase:true,
        trim:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Invalid Email address"]
    },
    password:{
        type:String,
        required:[true,"Password is empty"],
        trim:true,
        minLength:[8,"Password length is too short"],
        select:false
    },
    avatar:{
        public_id:{
            type:String
        },
        secure_url:{
            type:String
        }
    },
    role:{
        type:String,
        enum:['USER',"ADMIN"],
        default:"USER"
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:String
},{
    timestamps:true
})

UserSchema.pre('save',async (next)=>{
    if (!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

UserSchema.methods ={
    JWT_gen: function(){
        return JWT.sign({
            email:this.email,fullName:this.fullName
        },process.env.JWT_secret,{
            expiresIn:"7d"
        })
    }
}

const userModel = model("Accounts",UserSchema);

export default userModel;