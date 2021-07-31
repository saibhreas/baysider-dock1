const ErrorResponse = require ('../utils/errorResponse');
const path = require('path');
const Bootcamp = require('../models/Bootcamp');

// @desc      Get All
// @route     GET /api/v1/bootcamps
// @ access   Public
exports.getBootcamps = async (req, res, next)=> {
  try {
    const bootcamps = await Bootcamp.find();
    res
    .status(200)
    .json({ success: true, count: bootcamps.length,  data: bootcamps });
  }catch (err){
    next (err);
  }

}

// @desc      Get one by ID
// @route     POST /api/v1/bootcamps
// @ access   Private
exports.getBootcamp = async (req, res, next)=> {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res
    .status(200)
    .json({ success: true, data: bootcamp});
  }catch (err){
    next (err);
  }
};

// @desc      Create new Bootcamp
// @route     GET /api/v1/bootcamps
// @ access   Private
exports.createBootcamp = async  (req, res, next) =>{ 
  try{
    const bootcamp = await Bootcamp.create(req.body);
       
    if(!bootcamp){
      return  res.status(400).json({ success: false});
    }
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  }catch (err){
    next (err);
  }
};

// @desc      Update one by ID
// @route     PUT/api/v1/bootcamps/:id
// @ access   Private
exports.updateBootcamp = async (req, res, next)=> {
  try{
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    if(!bootcamp){
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    
    res
      .status(200)
      .json({ success: true, data:bootcamp});
    }catch (err){
      next (err);
    }
 
}

// @desc      Delete one by ID
// @route     DELETE/api/v1/bootcamps/:id
// @ access   Private
exports.deleteBootcamp = async (req, res, next)=> {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    console.log(req.params.id.blue);

    if(!bootcamp){
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    
    res.status(200).json({ success: true, data:{} });
  }catch (err){
    next (err);
  }
}