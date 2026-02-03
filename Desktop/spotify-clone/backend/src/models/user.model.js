
import mongoose, { Schema } from "mongoose";


const userSchema  = new Schema({
    fullName:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    clerkId:{
        type:String,
        required:true
    },

},{
    timestamps:true}) // timestamps will add createdAt and updatedAt fields

    const User = mongoose.model("User",userSchema)
    export default User;