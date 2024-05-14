const express = require('express');
const connectDB = require('./mongo');
const router = require('./routes/Route');
require('dotenv').config();

const app = express();
app.use(express.json());
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

app.get('/', (req, res) => {
    res.send("App is working fine");
});
app.use('/route',router)

const PORT = process.env.PORT || 8080;

connectDB()
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
