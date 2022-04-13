const express = require("express");
const router = express.Router();

const {
  getPlaylists,
  getPlaylistByID,
  addPlaylist,
  updatePLaylist,
  deletePlaylist,
} = require("../controllers/playlist.controller");

router.get("/", getPlaylists);
router.get("/:id", getPlaylistByID);

router.post("/", addPlaylist);
router.patch("/:id", updatePLaylist);
router.delete("/:id", deletePlaylist);

module.exports = router;
