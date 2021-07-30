const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');


const app = express();

//Dev logging middleware
//only want to run in dev mode
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);



const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.Node_env} mode on port ${PORT}`.brightBlue.bold)
);

process.on('unhandledRejection', (err, promise) =>{
  console.log(`Error:{err.message}`.bgWhite.brightRed.bold)
})
