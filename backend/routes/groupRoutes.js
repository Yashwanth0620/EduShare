// Import required modules
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Import controller functions
const {
  createGroup,
  getGroups,
  getGroupById,
  joinGroup,
  leaveGroup,
  updateGroup,
  deleteGroup,
} = require('../controllers/groupController');

// Route to create a new group
router.post('/create', isAuthenticated, createGroup);

// Route to get all groups or user-specific groups
router.get('/', isAuthenticated, getGroups);

// Route to get a specific group by ID
router.get('/:id', isAuthenticated, getGroupById);

// Route to join a group
router.put('/join/:groupId', isAuthenticated, joinGroup);

// Route to leave a group
router.put('/leave/:groupId', isAuthenticated, leaveGroup);

// Route to update group details
router.put('/update/:groupId', isAuthenticated, updateGroup);

// Route to delete a group
router.delete('/:groupId', isAuthenticated, deleteGroup);

module.exports = router;
