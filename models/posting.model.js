const mongoose = require("mongoose");

const postingSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comments",
  },
  love: {
    type: Number,
  },
});

const Posting = mongoose.model("posting", postingSchema);

module.exports = Posting;
