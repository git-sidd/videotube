import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/User.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"
export const verifyjwt= asyncHandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accesstoken || req.header("Authorization"?.replace("Bearer",""))

        if(!token){
            throw new ApiError(401,"Unauthorized Access")
        }

        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        const user= await User.findById(decodedToken?._id).select("-password -refreshtoken")

        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user=user
        next();
    } catch (error) {
        throw new ApiError(401,error?.message ||"Invalid Access Token")
    }
})