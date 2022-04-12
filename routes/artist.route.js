const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  addArtist,
  updateArtistById,
  deleteArtistById,
} = require("../controllers/artist.controller");

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", addArtist);

router.put("/:id", updateArtistById);

router.delete("/:id", deleteArtistById);

module.exports = router;
