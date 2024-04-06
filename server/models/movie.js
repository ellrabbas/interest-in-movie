const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        titleImage: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        video: {
            type: String,
            // required: true
        },
        rate: {
            type: Number,
            required: true,
            default: 0
        },
        numberOfReviews: {
            type: Number,
            required: true,
            default: 0
        },
        reviews: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        },
        casts: [
            {
                name: { type: String, required: true },
                image: { type: String, required: true }
            }
        ]
    },
    {
        timestamps: true,
        collection: 'Movies'
    });

module.exports = mongoose.model('Movie', movieSchema);