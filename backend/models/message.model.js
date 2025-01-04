import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom', required: true },
    sentAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);
export default Message;