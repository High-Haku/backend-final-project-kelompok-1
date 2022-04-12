const express = require("express");
const router = express.Router();
const path = require("path");
const authenticateJWT = require("../config/auth");

const {
  getTopChart,
  searchOnDeezer,
} = require("../controllers/deezer.controller");

// Router Import
const usersRouter = require("./user.router");
const playlistsRouter = require("./playlist.router");

const commentsRouter = require("./comment.route");
const messagesRouter = require("./message.route");
const postingRouter = require("./posting.route");

const songRouter = require("./song.route");
const albumRouter = require("./album.route");
const artistRoute = require("./artist.route");
const loginRoute = require("./login.route");

// route
router.use("/login", loginRoute);

router.use(authenticateJWT);

router.use("/users", usersRouter);
router.use("/playlists", playlistsRouter);

router.use("/song", songRouter);
router.use("/album", albumRouter);
router.use("/artist", artistRoute);

router.use("/comments", commentsRouter);
router.use("/messages", messagesRouter);
router.use("/posting", postingRouter);
// deezer route
router.get("/chart", getTopChart);
router.get("/search", searchOnDeezer);

router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
