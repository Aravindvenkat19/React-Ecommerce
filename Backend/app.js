const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');   
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config','config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();;

app.use(express.json())

app.use(cors({
    origin: function (origin, callback) {
        // Allow local development or any of your Vercel deployment URLs
        if (!origin || origin.includes("vercel.app") || origin.includes("localhost")) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use('/api/v1', products);
app.use('/api/v1', orders);

// app.listen(process.env.PORT,()=>{
//    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
// });

module.exports = app;