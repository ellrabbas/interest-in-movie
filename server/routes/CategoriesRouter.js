const express = require("express");
const { authenticationToken, admin } = require("../middleware/Auth");
const { getCategories } = require("../controllers/CategoriesController");
const { createCategory, updateCategory, deleteCategory } = require("../controllers/AdminController");
const router = express.Router();

// ******** PUBLIC ROUTES ********
router.get("/", getCategories);

// ******** ADMIN ROUTES ********
router.post("/", authenticationToken, admin, createCategory);
router.put("/:id", authenticationToken, admin, updateCategory);
router.delete("/:id", authenticationToken, admin, deleteCategory);

module.exports = router;