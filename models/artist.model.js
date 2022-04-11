const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    song: {
        // type: mongoose.Types.ObjectId,
        // ref: "songs",
        type: String,
        required: true
    },
    albums: {
        // type: mongoose.Types.ObjectId,
        // ref: "albums",
        type: String,
        required: true
    }
});

const Artists = mongoose.model("artists", artistsSchema);

module.exports = Artists;