const asyncHandler = require("express-async-handler");
const Category = require("../models/category");

// ******** PUBLIC CONTROLLERS ********

// Get all categories
const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { getCategories };
