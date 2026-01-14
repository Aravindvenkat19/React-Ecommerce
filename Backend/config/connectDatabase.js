const mongoose = require('mongoose');

const connectDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const con = await mongoose.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 5000, // Fail fast if the IP is wrong
    });
    console.log("MongoDB Connected to Host:", con.connection.host);
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err; // Re-throw so Vercel logs show the actual error
  }
};

module.exports = connectDatabase;