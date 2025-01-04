import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/database.js';
import ChatRoom from './models/chatRoom.js';

dotenv.config()

const app = express();

app.use(express.json());

// for testing purposes only
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// POST request handler for /chatroom
app.post('/api/chatrooms', async (req, res) => {
    const { members } = req.body;

    if (!members) {
        return res.status(400).json({ success: false, message: 'Chatroom members are required' });
    }

    const newChatRoom = new ChatRoom({ members })
    
    try {
        await newChatRoom.save();
        res.status(201).json({ success: true, data: newChatRoom });
    } catch (err) {
        console.error('Error creating chatroom', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
})

app.delete('/api/chatrooms/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const chatroom = await ChatRoom.findByIdAndDelete(id);
        
        if (!chatroom) {
            return res.status(404).json({ success: false, message: 'Chatroom not found' });  // If chatroom not found
        }
        
        res.status(200).json({ success: true, message: 'Chatroom deleted successfully' });  // Success response
    } catch (err) {
        console.error('Error deleting chatroom:', err);
        res.status(500).json({ success: false, message: 'Server error' });  // Error response
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
