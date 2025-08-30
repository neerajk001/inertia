import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    senderId:{
        type:String,
        required:true
    },
    receiverId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

},{timestamps:true});

const Message = mongoose.model('Message', messageSchema);
export default Message
