const asyncHandler = require("express-async-handler");
const User = require("../models/user");


// Get all users
const getUsers = asyncHandler(async (req, res) => {
    try {

        const users = await User.find({});
        res.json(users);

    } catch (error) {

        res.status(400).json({ message: error.message });
    }
});

// Delete user
const deleteUser = asyncHandler(async (req, res) => {

    try {

        const user = await User.findById(req.params.id);
        if (user) {

            if (user.isAdmin) {
                res.status(400);
                throw new Error('You cannot delete admin user');
            }

            await user.deleteOne();
            res.status(200).json({
                message: "User deleted successfully"
            });
        }

    } catch (error) {
        res.status(400);
        throw new Error("User not found");
    }
});

module.exports = {
    getUsers,
    deleteUser
};