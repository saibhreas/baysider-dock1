const path = require('path');
const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');

const connectDB = require('./config/db');

//Load config file-- Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');


const app = express();

// Body parser
app.use(express.json());

//Dev logging middleware
//only want to run in dev mode
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

//must abe down here. middleware handled in order
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.brightBlue.bold)
);

//Handle unhandled promise rejections  putting here makes it global
process.on('unhandledRejection', (err, promise) =>{
  console.log(`Error:{err.message}`.bgWhite.brightRed.bold)
  //close server & exit process
  server.close(() => process.exit(1));
});
