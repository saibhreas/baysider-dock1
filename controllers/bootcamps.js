// @desc      Get All
// @route     GET /api/v1/bootcamps
// @ access   Public
exports.getBootcamps = (req, res, next)=> {
  res
    .status(200)
    .json({ success: true, msg:'Show all Bootcamps'});
}

// @desc      Get one by ID
// @route     POST /api/v1/bootcamps
// @ access   Private
exports.getBootcamp = (req, res, next)=> {
  res
    .status(200)
    .json({ success: true, msg:` ${req.params.id}`});
}

// @desc      Create new Bootcamp
// @route     GET /api/v1/bootcamps
// @ access   Private
exports.createBootcamp = (req, res, next)=> {
  res
    .status(200)
    .json({ success: true, msg:`Create new Bootcamp ${req.params.id}`});
}

// @desc      Update one by ID
// @route     PUT/api/v1/bootcamps/:id
// @ access   Private
exports.updateBootcamp = (req, res, next)=> {
  res
    .status(200)
    .json({ success: true, msg:`Display Bootcamp ${req.params.id}`});
}

// @desc      Delete one by ID
// @route     DELETE/api/v1/bootcamps/:id
// @ access   Private
exports.deleteBootcamp = (req, res, next)=> {
  res
    .status(200)
    .json({ success: true, msg:`Delete Bootcamp ${req.params.id}`});
}