const express = require("express");
const { authenticationToken, admin } = require("../middleware/Auth");
const {
    importedMovies,
    getMovies,
    getMovieById,
    getTopRatedMovies,
    getRandomMovies,
    createMovieReview,
} = require("../controllers/MoviesController");
const router = express.Router();

// ******** PUBLIC ROUTES ********
router.post("/import", importedMovies);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/rated/top", getTopRatedMovies);
router.get("/random/all", getRandomMovies);

// ******** PRIVATE ROUTES ********
router.post("/:id/reviews", authenticationToken, createMovieReview);

// ******** ADMIN ROUTES ********

module.exports = router;
