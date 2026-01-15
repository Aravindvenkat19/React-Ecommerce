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
    origin: (origin, callback) => {
        // This allows any origin that makes a request to connect
        callback(null, true);
    },
    credentials: true
}));

app.use('/api/v1',products);
app.use('/api/v1',orders);

// app.listen(process.env.PORT,()=>{
//    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
// });

app.get('/', (req, res) => res.send('Server is live and connected.'));

module.exports = app;