const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateToken } = require("../middleware/Auth");

// Update account
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
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete account
const deleteAccount = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            if (user.isAdmin) {
                res.status(400);
                throw new Error("You cannot delete this user");
            }

            await user.deleteOne();
            res.status(200).json({
                message: "User deleted successfully",
            });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Change password of the account
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
                message: "Password changed successfully",
            });
        } else {
            res.status(401);
            throw new Error("Invalid old password");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all liked movies
const getAllLikedMovies = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("likedMovies");
        if (user) {
            res.status(200).json(user.likedMovies);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Add movie to liked movies
const addLikedMovie = asyncHandler(async (req, res) => {

    const { movieId } = req.body;
    try {

        const user = await User.findById(req.user._id);

        if (user) {

            if (user.likedMovies.includes(movieId)) {
                res.status(400);
                throw new Error("Movie already liked");
            }

            user.likedMovies.push(movieId);
            await user.save();
            res.json({ message: "Movie added to liked movies successfully" });
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete all liked movies

const deleteAllLikedMovies = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.likedMovies = [];
            await user.save();
            res.json({ message: "All liked movies deleted successfully" });
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = {
    updatedUser,
    deleteAccount,
    changePassword,
    getAllLikedMovies,
    addLikedMovie,
    deleteAllLikedMovies
};
