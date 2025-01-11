import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/database.js';

import chatRoomRoutes from './routes/chatroom.route.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse cookies and json bodies
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/chatRooms', chatRoomRoutes);
app.use('/api/auth', userRoutes);

// for testing purposes only
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

connectDB()
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    });
