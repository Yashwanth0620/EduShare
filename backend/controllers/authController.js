const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path as necessary
const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const crypto = require('crypto'); // For generating OTP securely

// Function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please provide all required fields");
    }
    
    const userExists = await User.findOne({ email });
    
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        const otp = await sendOTP(user); // Assume sendOTP returns the generated OTP
        
        // Save OTP and expiry to user object
        user.otp = otp;
        user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // Valid for 5 minutes
        await user.save();

        res.status(201).json({
            message: "OTP sent",
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});



const sendOTP = async (user) => {

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999);

    // Email configuration
    const config = {
        service: "gmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS,
        },
    };
    
    const transporter = nodemailer.createTransport(config);

    const mailGenerator = new mailgen({
        theme: "default",
        product: {
            name: "EduShare",
            link: "https://localhost:5000/",
        },
    });

    // Generate email content
    let response = {
        body: {
            name: user.name || "User",
            intro: "Your OTP for verification is here!",
            table: {
                data: [
                    {
                        item: "One-Time Password (OTP)",
                        description: `Your OTP is: ${otp}`,
                    },
                ],
            },
            outro: "Please use this OTP within 5 minutes to complete your verification.",
        },
    };

    // Generate the email body using mailgen
    const emailBody = mailGenerator.generate(response);

    // Define the message details
    let message = {
        from: process.env.MAIL,
        to: user.email,
        subject: "Your OTP for Verification",
        html: emailBody, // Attach the generated HTML content
    };

    try {
        await transporter.sendMail(message);
        return otp;
    } catch (error) {
        console.error("Error sending OTP email:", error);
        throw error; // Handle this error appropriately in your calling function
    }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // Check if user exists and password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
const logout = asyncHandler(async (req, res) => {
  // You can implement any logout logic if required
  res.json({ message: "Logged out successfully" });
});

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Logic for sending password reset link goes here
  // This could involve generating a token and sending an email

  res.status(200).json({ message: "Password reset link sent" });
});

// @desc    Reset password
// @route   PUT /api/auth/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;

  // Logic for verifying token and resetting password goes here

  res.status(200).json({ message: "Password has been reset" });
});

// @desc verify otp
// @route POST /api/auth/verify-otp
// @access  Public
const verifyOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpiresAt < Date.now()) {
        res.status(400);
        throw new Error("Invalid or expired OTP");
    }

    // Clear OTP fields
    user.otp = undefined;
    user.otpExpiresAt = undefined;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully", token: generateToken(user._id) });
});


// Export the controller functions
module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  verifyOTP
};
