const express = require('express')
const router = express.Router();
const { getAll, getById, addSong, updateSongById, deletesongById } = require('../controllers/song.controller')

router.get('/', getAll)

router.get("/:id", getById);

router.post("/", addSong);

router.put("/:id", updateSongById);

router.delete("/:id", deletesongById);

module.exports = router;