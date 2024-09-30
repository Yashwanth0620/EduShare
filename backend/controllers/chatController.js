const asyncHandler = require("express-async-handler");
const Group = require("../models/Group"); // Adjust the path as necessary
const Message = require("../models/Message"); // Adjust the path as necessary

// @desc    Get messages for a specific group
// @route   GET /api/groups/:id/messages
// @access  Private
const getGroupMessages = asyncHandler(async (req, res) => {
    const groupId = req.params.id;

    // Fetch messages related to the group
    const messages = await Message.find({ groupId }).populate("sender", "name");

    if (!messages) {
        res.status(404);
        throw new Error("No messages found for this group");
    }

    res.status(200).json(messages);
});

// @desc    Send a message to a group
// @route   POST /api/groups/:id/messages
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const groupId = req.params.id;

    // Create a new message
    const message = await Message.create({
        content,
        groupId,
        sender: req.user.id, // Assuming you have the user's ID in req.user
    });

    res.status(201).json(message);
});

// @desc    Edit a message
// @route   PUT /api/groups/:id/messages/:messageId
// @access  Private
const editMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params;
    const { content } = req.body;

    // Find the message
    const message = await Message.findById(messageId);

    if (!message) {
        res.status(404);
        throw new Error("Message not found");
    }

    // Check if the user is the sender of the message
    if (message.sender.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User is not authorized to edit this message");
    }

    message.content = content; // Update message content
    const updatedMessage = await message.save();

    res.status(200).json(updatedMessage);
});

// @desc    Delete a message
// @route   DELETE /api/groups/:id/messages/:messageId
// @access  Private
const deleteMessage = asyncHandler(async (req, res) => {
    const { messageId } = req.params;

    // Find the message
    const message = await Message.findById(messageId);

    if (!message) {
        res.status(404);
        throw new Error("Message not found");
    }

    // Check if the user is the sender of the message
    if (message.sender.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User is not authorized to delete this message");
    }

    await message.remove(); // Delete the message

    res.status(200).json({ message: "Message deleted successfully" });
});

// @desc    Get session details for a group
// @route   GET /api/groups/:id/session
// @access  Private
const getGroupSession = asyncHandler(async (req, res) => {
    const groupId = req.params.id;

    // Fetch session details, assuming you have a session model
    const session = await Session.findOne({ groupId });

    if (!session) {
        res.status(404);
        throw new Error("No session found for this group");
    }

    res.status(200).json(session);
});

// Export the controller functions
module.exports = {
    getGroupMessages,
    sendMessage,
    editMessage,
    deleteMessage,
    getGroupSession,
};
