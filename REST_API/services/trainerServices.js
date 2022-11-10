const Trainer = require("../models/Trainer");

exports.getAllTrainers = async () => {
  return await Comics.find({}).lean();
};
exports.createData = async (order) => {
  let newOrder = await Trainer.create(order);

  return newOrder;
};
exports.getById = async (id) => {
  const comic = await Trainer.findById(id);

  if (!comic) {
    throw new Error("Sory someting when wrong!");
  }
  return comic;
};
exports.deleteData = async (id) => {
  return await Trainer.findByIdAndDelete(id);
};

exports.comicsAddLike = async (user, id) => {
  const comic = await Trainer.findById(id).populate("userLiked");
  if (!comic) {
    throw new Error("Sory someting when wrong!");
  }
  comic.userLiked.push(user);
  comic.save();
  return comic;
};
