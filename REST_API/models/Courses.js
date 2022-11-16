const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  training:[],
  imageUrl: { type: String, required: true },
  price:{type:Number,require:true},
  desc:{type: String,require:true}

});

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;