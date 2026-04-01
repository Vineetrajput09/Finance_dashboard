
//for testing perpose

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const recordRoutes = require("./routes/recordRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes); 

module.exports = app;