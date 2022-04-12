const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  addAlbum,
  updateAlbumById,
  deleteAlbumById,
} = require("../controllers/album.controller");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", addAlbum);

router.put("/:id", updateAlbumById);

router.delete("/:id", deleteAlbumById);

module.exports = router;
