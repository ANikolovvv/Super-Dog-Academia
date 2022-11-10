const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
