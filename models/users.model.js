const mongoose = require("mongoose");

const UserShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["free", "member", "admin"],
    required: true,
    default: "free",
  },
  image: {
    type: String,
    default: "public\\images\\users\\default.png",
  },
  verifiedUser: {
    type: Boolean,
    default: false,
  },
  favoriteSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "songs",
  },
  playlists: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "playlists",
  },
  messeges: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "messeges",
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "postings",
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "comments",
  },
});

const UserModel = mongoose.model("users", UserShcema);
module.exports = UserModel;
