const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController')

router.route('/topTours').get(tourController.topTours,tourController.getAllTours)
router.route('/').get(tourController.getAllTours).post(tourController.createTour);
router.route('/stats').get(tourController.getTourStats);
router.route('/:id').get(tourController.getTour).post(tourController.updateTour).delete(tourController.deleteTour);
module.exports = router;
