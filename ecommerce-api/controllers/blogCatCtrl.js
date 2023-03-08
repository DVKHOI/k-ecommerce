const BlogCat = require("../models/blogCatModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBlogCat = asyncHandler(async (req, res) => {
  try {
    const newBlogCat = await BlogCat.create(req.body);
    res.json(newBlogCat);
  } catch (error) {
    throw new Error(error.message);
  }
});
const updateBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlogCat = await BlogCat.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlogCat);
  } catch (error) {
    throw new Error(error.message);
  }
});
const deleteBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteBlogCat = await BlogCat.findByIdAndDelete(id);
    res.json(deleteBlogCat);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlogCat = await BlogCat.findById(id);
    res.json(getBlogCat);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getAllBlogCat = asyncHandler(async (req, res) => {
  try {
    const getAllBlogCat = await BlogCat.find();
    res.json(getAllBlogCat);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createBlogCat,
  updateBlogCat,
  deleteBlogCat,
  getAllBlogCat,
  getBlogCat,
};
