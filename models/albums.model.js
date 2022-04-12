const mongoose = require("mongoose");

const albumsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "artists",
    required: true,
  },
  songs: {
    type: [mongoose.Types.ObjectId],
    ref: "songs",
    required: true,
  },
  image: {
    type: String,
    default: "default-album.jpg",
  },
});

const Albums = mongoose.model("albums", albumsSchema);

module.exports = Albums;
