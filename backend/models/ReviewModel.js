const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  ID: {
    type: String,
    default: "asNone",
  },
  Rating: {
    type: String,
  },
  Review: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
