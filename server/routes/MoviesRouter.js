const express = require("express");
const { authenticationToken, admin } = require("../middleware/Auth");
const {
    importedMovies,
    getMovies,
} = require("../controllers/MoviesController");
const router = express.Router();

// ******** PUBLIC ROUTES ********
router.post("/import", importedMovies);
router.get("/", getMovies);

// ******** PRIVATE ROUTES ********

// ******** ADMIN ROUTES ********

module.exports = router;
