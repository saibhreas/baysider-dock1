const express = require ('express');
const router = express.Router();

//Get All
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg:'Show all Bootcamps'});
});
//Get One
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg:` ${req.params.id}`});
});
//Create One
router.post('/s', (req, res) => {
  res.status(200).json({ success: true, msg:'Create new Bootcamp'});
});
//Update one
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg:`Display Bootcamp ${req.params.id}`});
});
//Delte One
router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg:`Delete Bootcamp ${req.params.id}`});
});

module.exports = router;
