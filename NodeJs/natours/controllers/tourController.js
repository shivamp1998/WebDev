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
    res.send({ success: false, message: err.message });
  }
};
exports.getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeData = ['page','sort','limit','fields'];
    excludeData.map((el) => delete queryObj[el]);
    let queryString = JSON.stringify(queryObj);
    queryString.replace(/\b(gte | gt | lte | lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryString))
    queryString = JSON.parse(queryString);
    let query = Tour.find(queryObj);
    if(req.query.sort) {
      const sortString = req.query.sort.split(',').join(' ');
      query = query.sort(sortString);
    }
    const tour = await query;
    res.status(200).send({ status: 'success', data: tour });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Some Error occurred' });
  }
};
exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    res.status(200).json({ message: 'tour', data: tour });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'wrong id' });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTour = await Tour.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.status(200).send({ status: 'success', data: updatedTour });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    await Tour.findByIdAndDelete(id)
    res.status(200).send({ status: 'success' });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

exports.checkBody = (req, res, next) => {
  if (req.body.name === undefined || req.body.price === undefined) {
    return res.status(500).json({ status: 'error', message: 'Please defined the name and price' });
  }
  next();
};
