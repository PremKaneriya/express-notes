const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

// Database Connection
connectDB();

// Export app for Vercel
module.exports = app;
