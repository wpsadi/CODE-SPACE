import {config }from "dotenv";
config();
import app from "./app.js"
import dbConnect from "./config/dbConnection.js"

import {v2 as cloudinary} from 'cloudinary';
          

// console.log(process.env.cloudinary_name)
// cloudinary.config({ 
//   cloud_name: process.env.cloudinary_name, 
//   api_key: process.env.cloudinary_api_key, 
//   api_secret: process.env.cloudinary_api_secret
// });
          
cloudinary.config({ 
  cloud_name: 'dp4pcqdl6', 
  api_key: '347444962484441', 
  api_secret: 'd-gJM4HOHD2SgaEMoP9KAw-O_AA' 
});
const port = process.env.PORT || 8005;
app.listen(port,async ()=>{
    await dbConnect()
    console.log(`Server is unning at ${port}`)
}) 