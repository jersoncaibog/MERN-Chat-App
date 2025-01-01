import mongoose from "mongoose";

const userStatusSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline',
        required: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const UserStatus = mongoose.model('UserStatus', userStatusSchema);
export default UserStatus