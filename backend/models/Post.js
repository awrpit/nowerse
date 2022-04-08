const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide the title"],
    },
    content: {
      type: String,
      required: [true, "Please provide the content"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", PostSchema)
module.exports = { Post, PostSchema }
