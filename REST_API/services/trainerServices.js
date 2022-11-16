const Trainer = require("../models/Trainer");
const Courses=require("../models/Courses")

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


