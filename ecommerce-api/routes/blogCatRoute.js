const express = require("express");
const {
  createBlogCat,
  updateBlogCat,
  deleteBlogCat,
  getBlogCat,
  getAllBlogCat,
} = require("../controllers/blogCatCtrl");

const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, isAdmin, createBlogCat);
router.put("/:id", authMiddleware, isAdmin, updateBlogCat);
router.delete("/:id", authMiddleware, isAdmin, deleteBlogCat);
router.get("/:id", authMiddleware, isAdmin, getBlogCat);
router.get("/", authMiddleware, isAdmin, getAllBlogCat);

module.exports = router;
