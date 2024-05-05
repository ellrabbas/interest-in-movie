const asyncHandler = require("express-async-handler");
const Artist = require("../models/artist");
const Movie = require("../models/movie");

// ******** PUBLIC CONTROLLERS ********

// get artist by id from the database
const getArtistById = asyncHandler(async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      res.status(404);
      throw new Error("Artist not found");
    }

    // Find the movies where the artist is part of the casts or directors
    const movies = await Movie.find({
      $or: [{ casts: artist._id }, { directors: artist._id }],
    });

    // Extract ObjectId of each movie and add it to the artist's movies array
    const movieIdsToAdd = movies
      .map((movie) => movie._id)
      .filter((movieId) => !artist.movies.includes(movieId.toString()));
    artist.movies.push(...movieIdsToAdd);

    // Save the updated artist document
    await artist.save();

    res.status(200).json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all movies from the database
const getAllArtists = asyncHandler(async (req, res) => {
  try {
    const { gender, nationality, zodiacSign, search } = req.query;

    let query = {
      ...(gender && {
        gender: { $regex: new RegExp("^" + gender + "$", "i") },
      }),
      ...(nationality && {
        nationality: {
          $regex: new RegExp(
            nationality.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
            "i"
          ),
        },
      }),
      ...(zodiacSign && {
        zodiacSign: { $regex: new RegExp("^" + zodiacSign + "$", "i") },
      }),
      ...(search && { fullname: { $regex: search, $options: "i" } }),
    };

    const page = Number(req.query.pageNumber) || 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const artists = await Artist.find(query)
      .sort({ fullName: 1 })
      .skip(skip)
      .limit(limit);

    const count = await Artist.countDocuments(query);

    res.json({
      artists,
      page,
      pages: Math.ceil(count / limit),
      totalArtists: count,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { getArtistById, getAllArtists };
