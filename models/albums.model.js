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
    artists: {
        type: mongoose.Types.ObjectId,
        ref: "artists",
        required: true
    },
    songs: {
        type: [mongoose.Types.ObjectId],
        ref: "songs",
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Albums = mongoose.model("albums", albumsSchema);

module.exports = Albums;