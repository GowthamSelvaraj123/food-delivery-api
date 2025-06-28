const express = require("express");
const router = express.Router();
const {getUserOrders, placeOrder} = require("../controller/order.controller")

router.post('/', protect, placeOrder);
router.get('/', protect, getUserOrders);

module.exports = router;