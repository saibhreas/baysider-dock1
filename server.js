const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get('/', (req, res)=> {

  res.status(200).json({ success: true, data:{}})
  res.status(400).json({ success: false});

});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_env} mode on port ${PORT}`)
);
