const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: {
    type: [mongoose.Types.ObjectId],
    ref: "songs",
  },
  albums: {
    type: [mongoose.Types.ObjectId],
    ref: "albums",
  },
  country: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "default-album.jpg",
  },
});

const Artists = mongoose.model("artists", artistsSchema);

module.exports = Artists;
