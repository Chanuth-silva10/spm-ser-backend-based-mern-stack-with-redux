const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  ID: {
    type: String,
  },
  Rating: {
    type: String,
  },
  Review: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
