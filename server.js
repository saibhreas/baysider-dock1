const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//link to route files
const bootcamps = require('./routes/bootcamps');

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);



const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_env} mode on port ${PORT}`)
);
