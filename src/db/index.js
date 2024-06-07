import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const CONNECT_DB=async()=>{
    try {
       const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected!! DB_HOST:${connectionInstance.connection.host}`)//gives you the info about database host and checks if it is properly connected
    } catch (error) {
        console.log("MongoDB connection error",error);
        process.exit(1);
    }
}
export default CONNECT_DB;