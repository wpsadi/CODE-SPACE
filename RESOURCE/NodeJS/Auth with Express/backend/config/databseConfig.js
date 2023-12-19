const mongoose = require("mongoose")

const mongoDB_url = process.env.mongoDB_url || "mongodb://localhost:27017"

const dbConnect =  ()=>{
    mongoose
        .connect(mongoDB_url)
        .then((conn) => console.log("connected :"+ conn.connection.host))
        .catch((err) => console.log("Error :"+err.message))

}

module.exports = dbConnect;