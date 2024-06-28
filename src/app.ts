import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import todoRoutes from './routes/todo';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/todos', todoRoutes);

// MongoDB Connection
const mongoUri = 'mongodb+srv://admin:a_AseWwtzqB4v3@cluster0.o96nj4u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

export default app;
