const express = require("express");
const {
    updatedUser,
    deleteAccount,
    changePassword,
    getAllLikedMovies,
    addLikedMovie,
    deleteAllLikedMovies
} = require("../controllers/UserController");
const { authenticationToken, admin } = require("../middleware/Auth");
const { registerUser, loginUser } = require("../controllers/AuthController");
const { getUsers, deleteUser } = require("../controllers/AdminController");
const router = express.Router();


// ******** PUBLIC ROUTES ********
router.post("/", registerUser);
router.post("/login", loginUser);


// ******** PRIVATE ROUTES ********
router.put("/", authenticationToken, updatedUser);
router.delete("/", authenticationToken, deleteAccount);
router.put("/password", authenticationToken, changePassword);

router.get("/favorites", authenticationToken, getAllLikedMovies);
router.post("/favorites", authenticationToken, addLikedMovie);
router.delete("/favorites", authenticationToken, deleteAllLikedMovies);


// ******** ADMIN ROUTES ********
router.get("/", authenticationToken, admin, getUsers);
router.delete("/:id", authenticationToken, admin, deleteUser);


module.exports = router;

