const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).send({ status: 'success' });
};
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({
      ...req.body,
    });
    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (err) {
    console.log(err);
    res.send({success: false, message: err.message})
  }
};
exports.getAllTours = async (req, res) => {
  try {
    const id = req.id;
    const tour = await Tour.find({});
    res.status(200).send({ status: 'success', data: tour });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Some Error occurred' });
  }
};
exports.getTour = async (req,res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    res.status(200).json({message: 'tour',data: tour})
  } catch (err) {
    console.log(err);
    res.status(400).json({message: 'wrong id'})
  }
}
exports.updateTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
exports.deleteTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};

exports.checkBody = (req, res, next) => {
  if (req.body.name === undefined || req.body.price === undefined) {
    return res.status(500).json({ status: 'error', message: 'Please defined the name and price' });
  }
  next();
};
