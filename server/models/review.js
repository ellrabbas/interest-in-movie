const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema(
    {
        username: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        userImage: { type: String },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true,
        collection: 'Reviews'
    });

module.exports = mongoose.model('Review', reviewsSchema);