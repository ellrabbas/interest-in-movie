const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please, enter your firstname']
        },
        lastName: {
            type: String,
            required: [true, 'Please, enter your lastname']
        },
        email: {
            type: String,
            required: [true, 'Please, enter your email'],
            unique: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Please, enter your password'],
            minlength: [6, 'Password must be at least 6 characters long']
        },
        confirmPassword: {
            type: String,
            validate: {
                validator: function (value) {
                    return value === this.password;
                },
                message: 'Passwords do not match'
            }
        },
        image: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        likedMovies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            },
        ]
    },
    {
        timestamps: true,
        collection: 'Users'
    });

module.exports = mongoose.model('User', userSchema);