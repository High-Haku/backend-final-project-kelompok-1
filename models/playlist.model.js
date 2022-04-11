const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "public\\images\\playlists\\default.png",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  songs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "songs",
  },
});

const PlaylistModel = mongoose.model("playlists", PlaylistSchema);
module.exports = PlaylistModel;
