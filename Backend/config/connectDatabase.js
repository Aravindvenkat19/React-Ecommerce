const mongoose = require('mongoose');

const connectDatabase = () => {
  if (mongoose.connection.readyState >= 1) {
    return; // Exit if already connected
  }

  mongoose.connect(process.env.DB_URL).then((con) => {
    console.log("MongoDB Connected to Host:", con.connection.host);
  }).catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });
};

module.exports = connectDatabase;

