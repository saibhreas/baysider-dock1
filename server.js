const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Show all Bootcamps'});
});
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Create new Bootcamp'});
});
app.put('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Update single Bootcamp'});
});
app.delete('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Delete single Bootcamp'});
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_env} mode on port ${PORT}`)
);
