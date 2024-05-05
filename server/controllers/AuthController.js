const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateToken } = require("../middleware/Auth");

// Register account
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, username, password, image } = req.body;
  try {
    const userNameExists = await User.findOne({ username });
    const emailNameExists = await User.findOne({ email });

    if (userNameExists) {
      res.status(400);
      throw new Error("Username already exists");
    }

    if (emailNameExists) {
      res.status(400);
      throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      image,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login account
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { registerUser, loginUser };
