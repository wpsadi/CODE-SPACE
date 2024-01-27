import { Schema } from "mongoose";
import mongo from "mongoose";
import {config} from "dotenv";
config();
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt"

const UserSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: [8, "Minimum required length is 8 characters for Name"],
        maxLength: [64, "Name Exceeds maximum limit of 64"]
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: [6, "Minimum required length is 6 characters for Username"],
        maxLength: [64, "Username Exceeds maximum limit of 64"],
        // match: [/^@\w+(_|.)+\w+$/gi, "Please include @ in your Username"],
        unique: [true, "Username already Taken"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        // minLength:[6,"Minimum required length is 6 characters for Username"],
        // maxLength:[64,"Username Exceeds maximum limit of 64"],
        // match: [/^\w+(_|.)+\w+@\w+\.\w+$/gi, "Invalid email"],
        unique: [true, "Email already registered with an account"]
    },
    password: {
        type: String,
        trim: true,
        minLength:[8,"Min Length of Password is 8 characters"],
        maxLength:[64,"Password Exceeds maximum limit of 64"],
        // match:[/^\w+$/gi,"Password contains ' '- space character"],
        select:false
    },
    bio:{
        type:String,
        trim:true,
        maxLength:[1000,"Bio Exceeds maximum limit of 1000 characters"],
        default:"Hey There! I am now on this platform too"
    },
    userType:{
        type:String,
        trim:true,
        enum : ["admin","user"],
        default:"user"
    }
 
},{
    timestamps:true
});

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }

    this.password = await bcrypt.hash(this.password,10)
})
 

// HERE COMPLETE THIS METHOD 
UserSchema.methods = {
    JWT_gen(){
        return JWT.sign({id:this._id},process.env.JWT_key,{expiresIn:"24h"})
    },
    passVerify: async function(password){
        return await bcrypt.compare(this.password,password)
    }
    // JWTValue : (token)=>{//this requires token to work
    //     return JWT.verify(token,process.env.JWT_key)
    // }
}

const User = mongo.model("userbase",UserSchema);

export default User; 