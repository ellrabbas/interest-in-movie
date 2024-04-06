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
            totalMovies: count
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = { importedMovies, getMovies };