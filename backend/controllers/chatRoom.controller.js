import ChatRoom from "../models/chatRoom.model.js";
import mongoose from "mongoose";

export const fetchChatRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const chatRoom = await ChatRoom.findById(id);
        if (!chatRoom) {
            return res.status(404).json({ success: false, message: 'Chatroom not found' });  // If chatRoom not found
        }
        
        res.status(200).json({ success: true, data: chatRoom });  // Success response
    } catch (err) {
        console.error('Error getting chatRoom:', err);
        res.status(500).json({ success: false, message: 'Server error' });  // Error response
    }
}

export const updateChatRoom = async (req, res) => {
    const { id } = req.params;
    const chatRoom = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error('Invalid chatRoom Id');
        return res.status(404).json({ success: false, message: 'Invalid chatRoom Id' });
    }

    try {
        const updatedChatroom = await ChatRoom.findByIdAndUpdate(id, chatRoom, { new: true });

        if (!updatedChatroom) {
            console.error('Chatroom not found: ', err);
            return res.status(404).json({ success: false, message: 'Chatroom not found' });  // If chatRoom not found
        }
        
        res.status(200).json({ success: true, data: updatedChatroom });  // Success response
    } catch (error) {
        console.error('Error while updating chatRoom', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

export const createChatRoom = async (req, res) => {
    const { members } = req.body;

    if (!members) {
        return res.status(400).json({ success: false, message: 'Chatroom members are required' });
    }

    const newChatRoom = new ChatRoom({ members })
    
    try {
        await newChatRoom.save();
        console.log('New chatroom created')
        res.status(201).json({ success: true, data: newChatRoom });
    } catch (err) {
        console.error('Error creating chatRoom', err);
        res.status(500).json({ success: false, message: 'Server error while creating chatroom' });
    }
}

export const deleteChatRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error('Invalid chatRoom Id');
        return res.status(404).json({ success: false, message: 'Invalid chatRoom Id' });
    }

    try {
        const chatRoom = await ChatRoom.findByIdAndDelete(id);
        
        if (!chatRoom) {
            console.error('Chatroom not found: ', err);
            return res.status(404).json({ success: false, message: 'Chatroom not found' });  // If chatRoom not found
        }
        
        res.status(200).json({ success: true, message: 'Chatroom deleted successfully' });  // Success response
    } catch (err) {
        console.error('Error deleting chatRoom:', err);
        res.status(500).json({ success: false, message: 'Server error' });  // Error response
    }
}