const Trainer = require("../models/Trainer");

exports.getAllTrainers = async () => {
  return await Trainer.find({}).lean();
};
exports.createData = async (order) => {
  let newOrder = await Trainer.create(order);

  return newOrder;
};
exports.getById = async (id) => {
  const trainer = await Trainer.findById(id);

  if (!trainer) {
    throw new Error("Sory someting when wrong!");
  }
  return trainer;
};
exports.deleteData = async (id) => {
  return await Trainer.findByIdAndDelete(id);
};


