const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectDB = require('./mongo'); 
const router = require('./routes/Route'); 

dotenv.config();

const app = express();



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.get('/', (req, res) => {
    res.send("App is working fine");
});

app.use('/route', router);

const PORT = process.env.PORT || 8080;


connectDB().then(() => {
    console.log("Connected to MongoDB Database");
    app.listen(PORT, (error) => {
        if (error) {
            console.error('Error starting the server:', error);
        } else {
            console.log(`The server is running on PORT ${PORT}`);
        }
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
