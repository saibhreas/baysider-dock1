const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) =>{
  //Log to console for dev
  console.log(err.stack.red);
  console.log(err.name.rainbow);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error'
  });

};

module.exports = errorHandler;

