// Import required modules
const express = require('express');
const router = express.Router();

// Import controller functions
const { register, login, logout, forgotPassword, resetPassword, verifyOTP } = require('../controllers/authController');

// Route for user registration
router.post('/register', register);
router.post('/verify-otp', verifyOTP);

// Route for user login
router.post('/login', login);

// Route for user logout
router.get('/logout', logout);

// Route for requesting password reset
router.post('/forgot-password', forgotPassword);

// Route for resetting password using token
router.post('/reset-password/:token', resetPassword);

module.exports = router;
