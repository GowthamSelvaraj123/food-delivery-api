const express = require("express");
const router = express.Router();
const {getAllRestaurant, getRestaurantById, createRestaurant} = require("../controller/restaurantcontroller");

router.post('/', createRestaurant); // Optional: Add isAdmin middleware
router.get('/', getAllRestaurant);
router.get('/:id', getRestaurantById);

module.exports = router;