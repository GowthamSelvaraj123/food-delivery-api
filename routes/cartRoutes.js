const express = require("express");
const router = express.Router();
const {clearCart, addToCart, getCart} = require("../controller/cart.controller")

router.post('/add', protect, addToCart);
router.get('/', protect, getCart);
router.delete('/clear', protect, clearCart);

module.exports = router;