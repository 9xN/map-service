const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: String,
  username: String,
  rating: Number,
  tags: String,
  time: Number,
  filler: String,
  filler: String
});

module.exports = mongoose.model("review", reviewSchema);