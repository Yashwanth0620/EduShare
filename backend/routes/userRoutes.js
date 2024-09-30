// Import required modules
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Import controller functions
const { getUserProfile, updateUserProfile, searchUsers, getUserGroups, deleteUserAccount } = require('../controllers/userController');

router.get('/profile/:id', isAuthenticated, getUserProfile);

router.put('/profile/update', isAuthenticated, updateUserProfile);

router.get('/search/:query', isAuthenticated, searchUsers);

router.get('/groups', isAuthenticated, getUserGroups);

router.delete('/delete-account', isAuthenticated, deleteUserAccount);

module.exports = router;
