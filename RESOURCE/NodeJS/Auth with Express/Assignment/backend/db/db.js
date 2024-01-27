import mongo from "mongoose";
import {config} from "dotenv";
config();

const mongoURL = process.env.mongoURL || "mongodb://localhost:27017/A1"
const dbconnect = async ()=>{
    try{
        const conn = await mongo.connect(mongoURL);
        if (!conn){
            console.log(`Unable to connect to Mongo Server at ${mongoURL}`)
        }
        else{
            console.log(`Connected to ${conn.connection.host}`)
        }
    }catch(err){
        console.log(`Some error occured while connecting to Mongo! PLease check MongoURL`)
    }

}

export default dbconnect;