const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Get All
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Show all Bootcamps'});
});
//Get One
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg:` ${req.params.id}`});
});
//Create One
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg:'Create new Bootcamp'});
});
//Update one
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg:`Display Bootcamp ${req.params.id}`});
});
//Delte One
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg:`Delete Bootcamp ${req.params.id}`});
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_env} mode on port ${PORT}`)
);
