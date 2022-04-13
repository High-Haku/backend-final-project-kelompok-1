const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    realesDate: {
        type: Date,
        required: true
    },
    albums: {
        type: mongoose.Types.ObjectId,
        ref: "albums",
        required: true
    },
    fileMusic: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

const Songs = mongoose.model("songs", songsSchema);

module.exports = Songs;