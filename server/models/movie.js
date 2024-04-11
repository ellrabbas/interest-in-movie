const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema(
    {
        userName: {
            type: mongoose.Schema.Types.String,
            ref: 'User',
            required: true
        },
        userImage: { type: String },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true,
    }
);

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
        reviews: [reviewSchema],
        directors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Artist'
            }
        ],
        casts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Artist'
            }
        ]
    },
    {
        timestamps: true,
        collection: 'Movies'
    });

module.exports = mongoose.model('Movie', movieSchema);