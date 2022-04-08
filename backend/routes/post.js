const express = require("express")
const router = express.Router()

const {
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post")

router.route("/").get(getUserPosts).post(createPost)
router.route("/:postId").get(getPost).patch(updatePost).delete(deletePost)

module.exports = router
