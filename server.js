const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./mongo'); // Assuming connectDB is a function to connect to MongoDB defined in mongo.js
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('Pong!');
});

app.get('/', (req, res) => {
    res.send("App is working fine");
});

const PORT = process.env.PORT || 3000;

connectDB(process.env.DATABASE_URI) // Passing MongoDB URI from the environment variables
    .then(() => {
        console.log("Connected to MongoDB Database");
        app.listen(PORT, (error) => {
            if (error) {
                console.error('Error starting the server:', error);
            } else {
                console.log(`The server is running on PORT ${PORT}`);
            }
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
