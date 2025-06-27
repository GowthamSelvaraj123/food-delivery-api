const express = require("express");
const router = express.Router();
const {registerController, loginController, resetPasswordController, forgotPasswordController, logoutController} = require("../controller/auth.controller");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/reset-password", resetPasswordController);
router.post("/forgot-password", forgotPasswordController);
router.post("/logout", logoutController);

module.exports = router;