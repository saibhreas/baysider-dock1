// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public 
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all Boot Camps'});
}

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public 
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show Boot Camp'});
}

// @desc  Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Public 
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new Boot Camp'});
}



// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public 

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all Boot Camps'});
}
