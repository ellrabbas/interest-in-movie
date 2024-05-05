const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Movie = require("../models/movie");
const Category = require("../models/category");
const Artist = require("../models/artist");

// ******** USERS ********

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
        throw new Error("You cannot delete admin user");
      }

      await user.deleteOne();
      res.status(200).json({
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error("User not found");
  }
});

// ******** MOVIES ********

// Create a new movie
const createMovie = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      time,
      language,
      year,
      video,
      directors,
      casts,
    } = req.body;

    let movie;

    const getArtistIds = async (artists) => {
      let artistIds = [];
      for (let artistData of artists) {
        let artist = await Artist.findOne({ fullName: artistData.fullName });
        if (!artist) {
          artist = await Artist.create({
            fullName: artistData.fullName,
            occupation: artistData.occupation,
            image: artistData.image,
            gender: artistData.gender,
            nationality: artistData.nationality,
            age: artistData.age,
            zodiacSign: artistData.zodiacSign,
            bio: artistData.bio,
          });
        }
        artistIds.push(artist._id);

        if (directors.includes(artistData.fullName)) {
          movie.directors.push(artist._id);
        }
        if (casts.includes(artistData.fullName)) {
          movie.casts.push(artist._id);
        }

        artist.movies.push(movie._id);
        await artist.save();
      }
      return artistIds;
    };

    movie = new Movie({
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      time,
      language,
      year,
      video,
      directors: [],
      casts: [],
      userId: req.user._id,
    });

    const castIds = await getArtistIds(casts);
    const directorIds = await getArtistIds(directors);

    movie.casts = castIds;
    movie.directors = directorIds;

    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update movie
const updateMovie = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      desc,
      image,
      titleImage,
      rate,
      numberOfReviews,
      category,
      time,
      language,
      year,
      video,
    } = req.body;

    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.name = name || movie.name;
      movie.desc = desc || movie.desc;
      movie.image = image || movie.image;
      movie.titleImage = titleImage || movie.titleImage;
      movie.rate = rate || movie.rate;
      movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
      movie.category = category || movie.category;
      movie.time = time || movie.time;
      movie.language = language || movie.language;
      movie.year = year || movie.year;
      movie.video = video || movie.video;

      const updatedMovie = await movie.save();

      res.status(200).json({
        updatedMovie,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remove movie
const deleteMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      const artists = await Artist.find({ movies: req.params.id });

      await Promise.all(
        artists.map(async (artist) => {
          artist.movies = artist.movies.filter(
            (movieId) => movieId.toString() !== req.params.id
          );
          await artist.save();

          if (artist.movies.length === 0) {
            await artist.deleteOne();
          }
        })
      );

      await movie.deleteOne();
      res.status(200).json({
        message: "Movie deleted successfully",
      });
    } else {
      res.status(404);
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(400);
    throw new Error("Movie not found");
  }
});

// Remove all movies
const deleteAllMovies = asyncHandler(async (req, res) => {
  try {
    const deletedMovies = await Movie.find({});
    await Movie.deleteMany({});

    const artists = await Artist.find({
      movies: { $in: deletedMovies.map((movie) => movie._id) },
    });

    await Promise.all(
      artists.map(async (artist) => {
        artist.movies = artist.movies.filter(
          (movieId) =>
            !deletedMovies.find((deletedMovie) =>
              deletedMovie._id.equals(movieId)
            )
        );
        await artist.save();

        if (artist.movies.length === 0) {
          await artist.deleteOne();
        }
      })
    );

    res.status(200).json({
      message: "All movies and associated references deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ******** CATEGORIES ********

// create a new category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { title } = req.body;

    const existingCategory = await Category.findOne({
      title: { $regex: new RegExp(`^${title}$`, "i") },
    });
    if (existingCategory) {
      return res
        .status(400)
        .json({ message: "Category with the same title already exists" });
    }

    const category = new Category({
      title,
    });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update category
const updateCategory = asyncHandler(async (req, res) => {
  try {
    const { title } = req.body;

    const category = await Category.findById(req.params.id);
    if (category) {
      category.title = title || category.title;

      const updatedCategory = await category.save();

      res.status(200).json({
        updatedCategory,
      });
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (category) {
      await category.deleteOne();
      res.status(200).json({
        message: "Category deleted successfully",
      });
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ******** ARTISTS ********

// create a new artist
const createArtist = asyncHandler(async (req, res) => {
  try {
    const {
      fullName,
      occupation,
      image,
      gender,
      nationality,
      age,
      zodiacSign,
      bio,
      movies,
    } = req.body;

    const findOrCreateArtist = async (artistData) => {
      const {
        fullName,
        occupation,
        image,
        gender,
        nationality,
        age,
        zodiacSign,
      } = artistData;

      let existingArtist = await Artist.findOne({
        fullName,
        occupation,
        image,
        gender,
        nationality,
        age,
        zodiacSign,
        bio,
        movies,
      });

      if (existingArtist) {
        return existingArtist;
      }

      const newArtist = new Artist({
        fullName,
        occupation,
        image,
        gender,
        nationality,
        age,
        zodiacSign,
        bio,
      });
      return await newArtist.save();
    };

    const artist = await findOrCreateArtist({
      fullName,
      occupation,
      image,
      gender,
      nationality,
      age,
      zodiacSign,
      bio,
      movies,
    });

    res.status(201).json(artist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete artist
const deleteArtist = asyncHandler(async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (artist) {
      await artist.deleteOne();

      const moviesToUpdate = await Movie.find({
        $or: [{ casts: artist._id }, { directors: artist._id }],
      });

      await Promise.all(
        moviesToUpdate.map(async (movie) => {
          movie.casts = movie.casts.filter(
            (cast) => cast.toString() !== req.params.id
          );
          movie.directors = movie.directors.filter(
            (director) => director.toString() !== req.params.id
          );
          await movie.save();
        })
      );

      res.status(200).json({
        message: "Artist deleted successfully",
      });
    } else {
      res.status(404);
      throw new Error("Artist not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update artist
const updateArtist = asyncHandler(async (req, res) => {
  try {
    const {
      fullName,
      occupation,
      image,
      gender,
      nationality,
      age,
      zodiacSign,
      bio,
      movies,
    } = req.body;

    const artist = await Artist.findById(req.params.id);
    if (artist) {
      artist.fullName = fullName || artist.fullName;
      artist.occupation = occupation || artist.occupation;
      artist.image = image || artist.image;
      artist.gender = gender || artist.gender;
      artist.nationality = nationality || artist.nationality;
      artist.age = age || artist.age;
      artist.zodiacSign = zodiacSign || artist.zodiacSign;
      artist.bio = bio || artist.bio;
      artist.movies = movies || artist.movies;
      const updatedArtist = await artist.save();
      res.status(200).json({
        updatedArtist,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  getUsers,
  deleteUser,
  createMovie,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
  createCategory,
  updateCategory,
  deleteCategory,
  createArtist,
  deleteArtist,
  updateArtist,
};
