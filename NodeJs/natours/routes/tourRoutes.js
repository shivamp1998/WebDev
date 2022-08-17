const express = require('express');
const fs = require('fs');
const router = express.Router();
const tourController = require('../controllers/tourController')


router.route('/').get(tourController.getAllTours).post(tourController.checkBody,tourController.createTour);
router.route('/:id').get(tourController.getTour).post(tourController.checkBody,tourController.updateTour).delete(tourController.deleteTour);

module.exports = router;