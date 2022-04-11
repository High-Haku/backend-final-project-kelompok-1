const express = require("express");
const router = express.Router();
const path = require("path");

// const usersRouter = require("./users.router");

// router.use("/users", usersRouter);

router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
