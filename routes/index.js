const express = require("express");
const router = express.Router();
const path = require("path");

// const usersRouter = require("./users.router");

// router.use("/users", usersRouter);

const songRouter = require("./song.route")
const albumRouter = require("./album.route")
const artistRoute = require("./artist.route")

router.use('/song', songRouter)
router.use('/album', albumRouter)
router.use('/artist', artistRoute)

router.get("*", (req, res) => {
  res.sendStatus(404);
});


module.exports = router;
