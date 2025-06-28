const express = require("express");
const router = express.Router();
const {addMenuItem, getMenuByRestaurant} = require("../controller/menu.controller");

router.post('/', addMenuItem); // Optional: Admin only
router.get('/restaurant/:restaurantId', getMenuByRestaurant);

module.exports = router;