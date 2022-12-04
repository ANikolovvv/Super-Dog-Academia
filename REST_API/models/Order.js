const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: [true, "All fields are required"] },
  breed: { type: String, required: true },
  email: { type: String, required: true },
  phone:{type:String,required:true},
  gender:{type:String,required:true},
  training: [],
  title: { type: String, default: true },
  desc: { type: String, default: true },
  imageUrl: { type: String, default: true },
  age: { type: Number, default: true },
  price:{type:Number,default:true},
  _ownerId: { type: mongoose.Types.ObjectId, ref: "User" },
});
///    const ctx = { title, author, email, address,courier,payment };
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
