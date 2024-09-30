// Import required modules
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Import controller functions
const {
  getGroupMessages,
  sendMessage,
  editMessage,
  deleteMessage,
  getGroupSession,
} = require('../controllers/chatController');

// Route to get all messages for a group
router.get('/:groupId/messages', isAuthenticated, getGroupMessages);

// Route to send a message to a group
router.post('/:groupId/send', isAuthenticated, sendMessage);

// Route to edit a message in a group
router.put('/:groupId/edit/:messageId', isAuthenticated, editMessage);

// Route to delete a message in a group
router.delete('/:groupId/delete/:messageId', isAuthenticated, deleteMessage);

// Route to get upcoming group sessions/events
router.get('/:groupId/session', isAuthenticated, getGroupSession);

module.exports = router;
