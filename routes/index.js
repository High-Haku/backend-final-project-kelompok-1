const express = require("express");
const router = express.Router();
const path = require("path");

const {
  getTopChart,
  searchOnDeezer,
} = require("../controllers/deezer.controller");

// Router Import
const usersRouter = require("./user.router");
const playlistsRouter = require("./playlist.router");

// route
router.use("/users", usersRouter);
router.use("/playlists", playlistsRouter);

// deezer route
router.get("/chart", getTopChart);
router.get("/search", searchOnDeezer);

router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
