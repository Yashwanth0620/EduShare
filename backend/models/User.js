const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Keep this unique if you want unique emails
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "defaultProfilePic.png", // Set a default profile picture
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  otp: String,
  otpExpiresAt: Date,
});

module.exports = mongoose.model("User", userSchema);
