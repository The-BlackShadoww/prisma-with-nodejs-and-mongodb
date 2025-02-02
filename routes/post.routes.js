const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.route("/posts").get(getAllPosts).post(isLoggedin, createPost);
router
  .route("/posts/:id")
  //   .get(getPost)
  .put(isLoggedin, updatePost)
  .delete(isLoggedin, deletePost);

module.exports = router;
