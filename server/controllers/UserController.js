const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../middleware/Auth');

// Register Account
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, password, confirmPassword, image } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,
            confirmPassword: hashedPassword,
            image
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
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Login Account
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                image: user.image,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update Account
const updatedUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, image } = req.body;
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.firstName = firstName || user.firstName;
            user.lastName = lastName || user.lastName;
            user.email = email || user.email;
            user.username = username || user.username;
            user.image = image || user.image;

            const updatedUser = await user.save();


            res.json({
                _id: updatedUser._id,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                username: updatedUser.username,
                image: updatedUser.image,
                isAdmin: updatedUser.isAdmin,
                token: generateToken(updatedUser._id)
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete Account
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            if (user.isAdmin) {
                res.status(400);
                throw new Error('You cannot delete this user');
            }

            await user.deleteOne();
            res.status(200).json({
                message: 'User deleted successfully'
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Change Password of Account
const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (user && (await bcrypt.compare(oldPassword, user.password))) {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            user.password = hashedPassword;
            await user.save();
            res.status(200).json({
                message: 'Password changed successfully'
            });
        }

        else {
            res.status(401);
            throw new Error('Invalid old password');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = { registerUser, loginUser, updatedUser, deleteUser, changePassword };