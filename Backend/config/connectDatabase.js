const mongoose = require('mongoose');

let isConnected = false;

const connectDatabase = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
};

app.get('/', (req, res) => {
  res.send('Backend Server is running and connected to Database!');
});

module.exports = connectDatabase;
