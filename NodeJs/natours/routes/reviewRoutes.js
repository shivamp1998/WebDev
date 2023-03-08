const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/get', reviewController.getAllReview).post('/create', reviewController.addReview).delete('/delete', reviewController.removeReview)
