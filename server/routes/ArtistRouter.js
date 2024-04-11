const express = require("express");
const { authenticationToken, admin } = require("../middleware/Auth");
const { getArtistById, getAllArtists } = require("../controllers/ArtistController");
const { createArtist, deleteArtist, updateArtist } = require("../controllers/AdminController");
const router = express.Router();

// ******** PUBLIC CONTROLLERS ********
router.get("/:id", getArtistById);
router.get("/", getAllArtists);

// ******** ADMIN ROUTES ********
router.post("/", authenticationToken, admin, createArtist);
router.delete("/:id", authenticationToken, admin, deleteArtist);
router.put("/:id", authenticationToken, admin, updateArtist);


module.exports = router;

