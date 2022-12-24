const Trainer = require("../models/Trainer");
const Courses = require("../models/Courses");
const Blog = require("../models/Blog");

exports.getBlogs = async () => {
  return await Blog.find({}).lean();
};
exports.getBlogId = async (id) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new Error("Sory someting when wrong!");
  }
  return blog;
};
exports.createBlog = async (blog) => {
  let newBlog = await Blog.create(blog);

  return newBlog;
};

exports.getAllTrainers = async () => {
  return await Trainer.find({}).lean();
};
exports.getAllCourses = async () => {
  return await Courses.find({}).lean();
};
exports.createData = async (order) => {
  let newOrder = await Trainer.create(order);

  return newOrder;
};
exports.createCours = async (order) => {
  let newOrder = await Courses.create(order);

  return newOrder;
};
exports.getById = async (id) => {
  const trainer = await Trainer.findById(id);

  if (!trainer) {
    throw new Error("Sory someting when wrong!");
  }
  return trainer;
};
exports.getByIdCourses = async (id) => {
  const cours = await Courses.findById(id);

  if (!cours) {
    throw new Error("Sory someting when wrong!");
  }
  return cours;
};
exports.deleteData = async (id) => {
  return await Trainer.findByIdAndDelete(id);
};
