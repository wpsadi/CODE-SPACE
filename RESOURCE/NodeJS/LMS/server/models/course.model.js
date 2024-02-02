import { model, Schema } from "mongoose";

const courseSchema = new Schema({
    title:{
        type:String,
        required:[true,"Course Name is required"],
        minLength:[8,"Minimum length is 8 for title"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Description is required"],
        minLength:[8,"Minimum length is 8 for Description"],
        trim:true
    },
    category:{
        type:String,
        required:[true,"Please specify the category"]
    },
    thumbnail:{
        public_id:{type:String},
        secure_url:{
            type:String
        }
    },
    lectures:[
        {
            title:String,
            description:String,
            thumbnail:{
                public_id:{
                    type:String,
                    required:true},
                secure_url:{
                    type:String,
                    required:true
                }
            }
        }
    ],
    numbersOfLectures:{
        type:Number,
        default:0
    },
    createdBy:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Course = model('Course',courseSchema)

export default Course;