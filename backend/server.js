import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/database.js';

import chatRoomRoutes from './routes/chatroom.route.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/chatRooms', chatRoomRoutes);

// for testing purposes only
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
