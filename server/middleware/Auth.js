require('dotenv').config();
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};


const authenticationToken = expressAsyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("No token, no authorization");
    }
});


const admin = (req, res, next) => {

    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("You are not authorized to access like admin");
    }
};

module.exports = { generateToken, authenticationToken, admin };