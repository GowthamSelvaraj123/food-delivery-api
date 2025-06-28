const express = require("express");
const router = express.Router();
const {updateUserProfile, getUserProfile} = require("../controller/user.controller");

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;