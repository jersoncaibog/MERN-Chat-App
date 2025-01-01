import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config()
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

console.log(process.env.MONGO_URI)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
})
