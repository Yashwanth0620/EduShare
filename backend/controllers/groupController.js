const asyncHandler = require("express-async-handler");
const Group = require("../models/Group"); // Adjust the path as necessary
const User = require("../models/User"); // Adjust the path as necessary

// @desc    Create a new group
// @route   POST /api/groups
// @access  Private
const createGroup = asyncHandler(async (req, res) => {
    const { name, description } = req.body;

    const group = await Group.create({
        name,
        description,
        createdBy: req.user.id, // Assuming you have the user's ID in req.user
    });

    res.status(201).json(group);
});

// @desc    Get all groups
// @route   GET /api/groups
// @access  Public
const getGroups = asyncHandler(async (req, res) => {
    const groups = await Group.find();
    res.status(200).json(groups);
});

// @desc    Get group by ID
// @route   GET /api/groups/:id
// @access  Public
const getGroupById = asyncHandler(async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) {
        res.status(404);
        throw new Error("Group not found");
    }

    res.status(200).json(group);
});

// @desc    Join a group
// @route   POST /api/groups/:id/join
// @access  Private
const joinGroup = asyncHandler(async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) {
        res.status(404);
        throw new Error("Group not found");
    }

    // Check if the user is already a member
    if (group.members.includes(req.user.id)) {
        res.status(400);
        throw new Error("User is already a member of this group");
    }

    group.members.push(req.user.id); // Add the user to the group members
    await group.save();

    res.status(200).json({ message: "Joined group successfully" });
});

// @desc    Leave a group
// @route   POST /api/groups/:id/leave
// @access  Private
const leaveGroup = asyncHandler(async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) {
        res.status(404);
        throw new Error("Group not found");
    }

    // Check if the user is a member
    if (!group.members.includes(req.user.id)) {
        res.status(400);
        throw new Error("User is not a member of this group");
    }

    group.members = group.members.filter((member) => member.toString() !== req.user.id);
    await group.save();

    res.status(200).json({ message: "Left group successfully" });
});

// @desc    Update group details
// @route   PUT /api/groups/:id
// @access  Private
const updateGroup = asyncHandler(async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) {
        res.status(404);
        throw new Error("Group not found");
    }

    // Check if the user is the group creator
    if (group.createdBy.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User is not authorized to update this group");
    }

    const { name, description } = req.body;

    group.name = name || group.name;
    group.description = description || group.description;

    const updatedGroup = await group.save();

    res.status(200).json(updatedGroup);
});

// @desc    Delete a group
// @route   DELETE /api/groups/:id
// @access  Private
const deleteGroup = asyncHandler(async (req, res) => {
    const group = await Group.findById(req.params.id);

    if (!group) {
        res.status(404);
        throw new Error("Group not found");
    }

    // Check if the user is the group creator
    if (group.createdBy.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User is not authorized to delete this group");
    }

    await group.remove(); // Delete the group

    res.status(200).json({ message: "Group deleted successfully" });
});

// Export the controller functions
module.exports = {
    createGroup,
    getGroups,
    getGroupById,
    joinGroup,
    leaveGroup,
    updateGroup,
    deleteGroup,
};
