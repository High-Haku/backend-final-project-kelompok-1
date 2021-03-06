const express = require("express");
const router = express.Router();
const { imageFilter, imageStorage } = require("../config/multerConfig");
const multer = require("multer");

const {
  getUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post(
  "/",
  multer({
    storage: imageStorage,
    limits: { fileSize: 1024 * 1024 * 2 },
    fileFilter: imageFilter,
  }).single("image"),
  addUser
);
router.patch(
  "/:id",
  multer({
    storage: imageStorage,
    limits: { fileSize: 1024 * 1024 * 2 },
    fileFilter: imageFilter,
  }).single("image"),
  updateUser
);
router.delete("/:id", deleteUser);

module.exports = router;
