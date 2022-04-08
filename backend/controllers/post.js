const NotFoundError = require("../errors/notFoundError")
const { Post } = require("../models/Post")
const { findOneAndUpdate } = require("../models/User")

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ createdBy: req.user.userId })
  res.status(200).json({ posts, count: posts.length })
}

const getPost = async (req, res) => {
  const { postId } = req.params
  const post = await Post.findOne({ _id: postId })
  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`)
  }
  res.status(200).json({ post })
}

const createPost = async (req, res) => {
  req.body.createdBy = req.user.userId
  const post = await Post.create(req.body)
  res.status(200).json(post)
}

const updatePost = async (req, res) => {
  const { postId } = req.params
  const post = await Post.findOneAndUpdate({ _id: postId }, req.body)
  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`)
  }
  res.status(200).json({ post })
}

const deletePost = async (req, res) => {
  const { postId } = req.params
  const post = await Post.findByIdAndDelete({
    _id: postId,
  })
  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`)
  }
  res.status(200).json({ post })
}

module.exports = {
  getUserPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
}
