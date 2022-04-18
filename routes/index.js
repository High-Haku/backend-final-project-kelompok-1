const express = require("express");
const router = express.Router();
const path = require("path");
const authenticateJWT = require("../config/auth");
const { getFileStream } = require("../config/s3");
const { getToken, deleteToken } = require("../controllers/token.controller");

const {
  getTopChart,
  searchOnDeezer,
} = require("../controllers/deezer.controller");

// Router Import
const usersRoute = require("./user.router");
const playlistsRoute = require("./playlist.router");
const songRoute = require("./song.route");
const albumRoute = require("./album.route");
const artistRoute = require("./artist.route");
const commentsRoute = require("./comment.route");
const messagesRoute = require("./message.route");
const postingRoute = require("./posting.route");
const loginRoute = require("./login.route");
const transactionsRoute = require("./transaction.route");
const spotifyRoute = require("./spotify.route");
const { route } = require("./user.router");

// images route
router.get("/images/:key", (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFileStream(key).on("error", (error) => {
      console.log(error);
      return res.sendStatus(404);
    });
    readStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// route
router.use("/login", loginRoute);
router.use("/users", usersRoute);
router.get("/token", getToken);
router.get("/logout", deleteToken);

// spotify route
router.use("/spotify", spotifyRoute);

// login route
router.use(authenticateJWT);
router.use("/users", usersRoute);
router.use("/playlists", playlistsRoute);
router.use("/songs", songRoute);
router.use("/albums", albumRoute);
router.use("/artists", artistRoute);
router.use("/comments", commentsRoute);
router.use("/messages", messagesRoute);
router.use("/posting", postingRoute);
router.use("/transactions", transactionsRoute);

// deezer route
router.get("/chart", getTopChart);
router.get("/search", searchOnDeezer);


module.exports = router;
