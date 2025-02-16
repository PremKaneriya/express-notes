const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Not needed for Mongoose 6+
      useUnifiedTopology: true, // Not needed for Mongoose 6+
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
