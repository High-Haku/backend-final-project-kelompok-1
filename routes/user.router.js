const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
