// Final Vercel Fix

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
        callback(null, true);
    },
    credentials: true,
    optionsSuccessStatus: 200 // Some legacy browsers need this for 200 OK
}));

app.use('/api/v1/products', products);
app.use('/api/v1/orders', orders);

// app.listen(process.env.PORT,()=>{
//    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
// });

app.get('/', (req, res) => res.send('Server is live and connected.'));

module.exports = app;