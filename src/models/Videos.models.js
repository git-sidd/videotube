import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new mongoose.Schema({
    videofile:{
        type:String,
        required:true,
        index:true,
        
    },
    thumbnail:{
        type:String,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    title:{
        type:String,
        required:true,
        index:true,
        
    },
    description:{
        type:String,
        required:true,
        
    },
    duration:{
        type:Number,
        required:true,
       
    },
    views:{
        type:Number,
        required:true,
        default:0
    },
    isPublish:{
        type:Boolean,
        required:true
    }
},{timestamps:true});
videoSchema.plugin(mongooseAggregatePaginate);

export const Video =mongoose.model("Video",videoSchema);