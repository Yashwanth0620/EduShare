const asyncHandler = require("express-async-handler");
const User = require("../models/User"); // Adjust the path as necessary
const Group = require("../models/Group"); // Assuming you have a Group model

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json(user);
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    const { username, email } = req.body;

    // Update user fields
    user.username = username || user.username;
    user.email = email || user.email;

    const updatedUser = await user.save();

    res.status(200).json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
    });
});

// @desc    Search for users
// @route   GET /api/users/search
// @access  Private
const searchUsers = asyncHandler(async (req, res) => {
    const { query } = req.query; // Assuming query param for search

    if (!query) {
        res.status(400);
        throw new Error("Search query is required");
    }

    const users = await User.find({
        username: { $regex: query, $options: "i" },
    }).select("-password");

    res.status(200).json(users);
});

// @desc    Get user groups
// @route   GET /api/users/groups
// @access  Private
const getUserGroups = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).populate("groups");

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json(user.groups);
});

// @desc    Delete user account
// @route   DELETE /api/users/delete
// @access  Private
const deleteUserAccount = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    await user.remove(); // Delete the user account

    res.status(200).json({ message: "User account deleted successfully" });
});

// Export the controller functions
module.exports = {
    getUserProfile,
    updateUserProfile,
    searchUsers,
    getUserGroups,
    deleteUserAccount,
};
