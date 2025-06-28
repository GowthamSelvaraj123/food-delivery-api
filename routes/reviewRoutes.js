const express = require('express');
const router = express.Router();
const { addReview, getReviewsForFood } = require('../controller/review.controller');

router.post('/', addReview); //user protect
router.get('/food/:foodId', getReviewsForFood);

module.exports = router;