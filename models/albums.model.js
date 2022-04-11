const mongoose = require("mongoose");

const albumsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publiser: {
        type: String,
        required: true
    },
    artist: {
        // type: mongoose.Types.ObjectId,
        // ref: "artists",
        type: String,
        required: true
    },
    song: {
        // type: mongoose.Types.ObjectId,
        // ref: "songs",
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Albums = mongoose.model("albums", albumsSchema);

module.exports = Albums;