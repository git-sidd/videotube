import dotenv from "dotenv";
import CONNECT_DB from "./db/index.js";
import express from "express"
const app = express();


dotenv.config({
    path:'./env'
})


CONNECT_DB()

.then(()=>{
   

    app.on("error",(error)=>{
        console.log("Error :",error);
        throw error;
    })
    app.listen(process.env.PORT||3000 ,()=>{
        console.log(`server is running at port: ${process.env.PORT||3000}`);
    })
    
})
.catch((error)=>{
    console.log("MongoDB connection Failed:" ,error);
})

