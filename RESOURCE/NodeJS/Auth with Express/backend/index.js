require('dotenv').config()

const port = process.env.port || 5502;

const app = require("./app")
 
app.listen(port,function(){
    console.log("Srver is running on localhost:"+port)
})