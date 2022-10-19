const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController')
const authController = require('../controllers/authController');

router.route('/topTours').get(authController.protect,tourController.topTours,tourController.getAllTours)
router.route('/').get(authController.protect,tourController.getAllTours).post(tourController.createTour);
router.route('/stats').get(authController.protect,tourController.getTourStats);
router.route('/tourByMonth/:year').get(authController.protect,tourController.getToursByMonth);
router.route('/:id').get(authController.protect,tourController.getTour).post(authController.protect,tourController.updateTour).delete(tourController.deleteTour);
module.exports = router;
