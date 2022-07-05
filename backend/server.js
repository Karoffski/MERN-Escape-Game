// Imports
import express from 'express';
import cors from 'cors';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';
import reservationRoute from './routes/reservations.js';

// Initializing express
const app = express();

// Mongo database
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Port & URI
const PORT = process.env.PORT || 4000;
const database = process.env.MONGO_URI;

// Parse & Cors
app.use((express.json({extended: true})))
app.use((express.urlencoded({ extended: true})))
app.use((cors()));

// Routes
app.use('/rooms', roomRoute);
app.use('/users', userRoute);
app.use('/reservations', reservationRoute);

// Connecting to MongoDB followed by server
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to MongoDB has been established'))
    .then(() => app.listen(PORT, () => console.log("Server has started at port " + PORT)))    
    .catch((error) => console.log(error.message) & process.exit(1))    