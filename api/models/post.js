import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
},{
    timestamps:true,
})

export const Post = mongoose.model('Post',PostSchema);