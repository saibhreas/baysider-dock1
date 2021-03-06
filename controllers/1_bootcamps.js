const ErrorResponse = require ('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const path = require('path');
const Bootcamp = require('../models/Bootcamp');
const geocoder = require('../utils/geocoder');

// @desc      Get All
// @route     GET /api/v1/bootcamps
// @ access   Public
exports.getBootcamps = asyncHandler(async (req, res, next)=> {
  let query;

  // Make copy of req.query   use spread
  const reqQuery = { ...req.query};

  // Fields to Exclude using the word 'select'
  const removeFields = ['select', 'sort'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);
  

  // Create query String
  let queryStr = JSON.stringify(reqQuery);

  // Create operator like gt > gte >= lt < lte <=
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}` );
  
  // Finding resource
  query = Bootcamp.find(JSON.parse(queryStr));

  // Select Fields
  if(req.query.select){
    const fields = req.query.select.split(',').join(' ');
    query =query.select(fields);
  }

  // Sort
  if(req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  }else{
    query = quer.sort('-createdAt'); //default sort
  }

  // Executing Query
  const bootcamps = await query;
    res
    .status(200)
    .json({ success: true, count: bootcamps.length,  data: bootcamps });
  

})

// @desc      Get one by ID
// @route     POST /api/v1/bootcamps
// @ access   Private
exports.getBootcamp = asyncHandler (async (req, res, next)=> {
 
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res
    .status(200)
    .json({ success: true, data: bootcamp});

});

// @desc      Create new Bootcamp
// @route     GET /api/v1/bootcamps
// @ access   Private
exports.createBootcamp = asyncHandler (async  (req, res, next) =>{ 
  
    const bootcamp = await Bootcamp.create(req.body);
       
    if(!bootcamp){
      return  res.status(400).json({ success: false});
    }
    res.status(201).json({
      success: true,
      data: bootcamp
    });
});

// @desc      Update one by ID
// @route     PUT/api/v1/bootcamps/:id
// @ access   Private
exports.updateBootcamp = asyncHandler (async (req, res, next)=> {
  
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
  
 
});

// @desc      Delete one by ID
// @route     DELETE/api/v1/bootcamps/:id
// @ access   Private
exports.deleteBootcamp = asyncHandler (async (req, res, next)=> {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    console.log(req.params.id.blue);

    if(!bootcamp){
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    
    res.status(200).json({ success: true, data:{} });
  
});

// @desc      Get bootcamps wiathin a radius
// @route     GET/api/v1/bootcamps/radius/:zipcode/:distance
// @ access   Private
exports.getBootcampsInRadius = asyncHandler (async (req, res, next)=> {
  const { zipcode, distance }= req.params;
  consoloe.log(req.querry);
  
  // Get lat/lon from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calculate the radians
  // Divide distance by radius of the earth (3,963 mi /6,378km)
  const radius = distance / 3963;

  const bootcamps = await Bootcamp.find({
    location: { $geoWithin: { $centerSphere: [ [lng, lat], radius] } }
  });

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps
  });
});