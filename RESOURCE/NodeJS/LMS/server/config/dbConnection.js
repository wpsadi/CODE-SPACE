import mongoose from "mongoose";
import {config} from "dotenv";
config();
mongoose.set("strictQuery",false);


const dbConnect = async () =>{
    try{
        const url  = process.env.mongoURL || "mongodb://localhost:27017"
        // console.log(url)
        const {connection} = await mongoose.connect(url)
    
        if (connection){
            console.log(`Connected to ${connection.host}`)
        }
        else{
            console.log(`Error while connecting DB at ${url}`)
        } 
    }
    catch(err){
        console.log(`${err.message}`);
        process.exit(1);
    }
 
}


export default dbConnect