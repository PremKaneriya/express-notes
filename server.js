const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
      origin: "https://express-notes-3eyad5fve-premkaneriyas-projects.vercel.app", // Replace with your frontend URL
      credentials: true, // Allow cookies and other credentials
    })
);

// Set EJS as view engine
app.set("view engine", "ejs");

// Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

// Start server
connectDB();
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }).catch(err => {
    console.error("Failed to connect to DB", err);
  });