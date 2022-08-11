const express = require('express');
const router = express.Router();

const getAllTours = (req, res) => {
  res.status(200).send({ status: 'success' });
};
const createTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
const getTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
const updateTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
const deleteTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).post(updateTour).delete(deleteTour);

module.exports = router;
