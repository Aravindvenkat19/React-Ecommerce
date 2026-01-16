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
    origin: "https://react-frontend-ecommerce-phi.vercel.app",
    credentials: true
}));

app.use('/api/v1', products);
app.use('/api/v1/orders', orders);

// app.listen(process.env.PORT,()=>{
//    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
// });

app.use('*', (req, res) => {
    res.status(200).json({
        message: "Backend is reachable!",
        receivedPath: req.originalUrl,
        hint: "If you see this, your vercel.json is working, but your product routes need adjustment."
    });
});

module.exports = app;