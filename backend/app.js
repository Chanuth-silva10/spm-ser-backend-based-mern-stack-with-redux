const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

// Route 
const tests = require("./routes/TestRouter");

app.use("/api/v1",tests);

module.exports = app