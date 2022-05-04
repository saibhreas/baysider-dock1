

// @desc  Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public 
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all Boot Camps'});
}

// @desc  Get One bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public 
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show Boot Camp ${req.params.id}'});
}

// @desc  Create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private  Authenticate  T
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new Boot Camp'});
}

// @desc  Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private  Authenticate  T 
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update Boot Camp ${req.params.id}'});
}

// @desc  Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private  Authenticate  T 
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete Boot Camp ${req.params.id}'});
}
