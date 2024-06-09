import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    watchHistory:[
       { type : mongoose.Schema.Types.ObjectId,
        ref:"Video",
        required:true,
        trim:true}

    ],
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    fullname:{
        type:String,
        
    },
    avatar:{
        type:String , //coloudinary url
        required:true,
    },
    coverimage:{
        type:String,  //coloudinary url
       
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshtokens:{
        type:String,
        
    }
},{timestamps:true})
//encrypting and decrypting password logic
userSchema.pre("save",async function(next){
    if(this.isModified("password"))
    {
        this.password= bcrypt.hash(this.password,10)
        next();
    }
})//password check logic
userSchema.methods.isPasswordCorrect=
    async function(password){
        return await bcrypt.compare(password,this.password)
    }
export const User=mongoose.model("User",userSchema);