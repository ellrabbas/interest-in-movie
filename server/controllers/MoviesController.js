const asyncHandler = require("express-async-handler");
const Movie = require("../models/movie");
const MoviesData = require("../Data/MovieData");

// ******** PUBLIC CONTROLLERS ********


// insert all movies to the database
const importedMovies = asyncHandler(async (req, res) => {
    await Movie.deleteMany({});
    const movies = await Movie.insertMany(MoviesData);
    res.status(200).json(movies);
});

// get all movies from the database
const getMovies = asyncHandler(async (req, res) => {
    try {
        const { category, time, language, rate, year, search } = req.query;

        let query = {
            ...(category && { category }),
            ...(time && { time }),
            ...(language && { language }),
            ...(rate && { rate }),
            ...(year && { year }),
            ...(search && { name: { $regex: search, $options: "i" } }),
        };

        const page = Number(req.query.pageNumber) || 1;
        const limit = 2;
        const skip = (page - 1) * limit;

        const movies = await Movie.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const count = await Movie.countDocuments(query);

        res.json({
            movies,
            page,
            pages: Math.ceil(count / limit),
            totalMovies: count,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get a single movie from the database
const getMovieById = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// get top rated movies from the database
const getTopRatedMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({ rate: -1 });

        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get random movies from the database
const getRandomMovies = asyncHandler(async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 8 } }]);

        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



// ******** PRIVATE CONTROLLERS ********


// create movie review
const createMovieReview = asyncHandler(async (req, res) => {

    const { rating, comment } = req.body;

    try {
        const movie = await Movie.findById(req.params.id);

        if (movie) {

            const alreadyReviewed = movie.reviews.find(
                review => review.userId.toString() === req.user._id.toString()
            );

            if (alreadyReviewed) {
                res.status(400);
                throw new Error("You have already reviewed this movie");
            }

            const review = {
                userName: req.user.username,
                userId: req.user._id,
                userImage: req.user.image,
                rating: Number(rating),
                comment,
            }

            movie.reviews.push(review);
            movie.numberOfReviews = movie.reviews.length;
            let rate = movie.rate;
            rate = movie.reviews.reduce((acc, item) => item.rating + acc, 0) / movie.reviews.length;
            Number(rate).toFixed();
            await movie.save();

            res.status(201).json({
                message: "Movie review created successfully",
            });

        } else {
            res.status(404);
            throw new Error("Movie not found");
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = {
    importedMovies,
    getMovies,
    getMovieById,
    getTopRatedMovies,
    getRandomMovies,
    createMovieReview
};