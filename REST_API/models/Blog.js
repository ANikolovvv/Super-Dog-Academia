const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  imageUrl: { type: String, required: true },
  author:{ type: String, required: true },
  date:{ type: String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;