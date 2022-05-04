const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all Boot Camps'});
});
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show Boot Camp'});
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new Boot Camp'});
});
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: 'Update Boot Camp ${req.params.id}'});
});
router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: 'Delete Boot Camp ${req.params.id}'});
});

module.exports = router;

