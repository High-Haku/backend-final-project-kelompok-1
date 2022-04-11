const Users = require("../models/users.model");
// const validator = require("validator");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({}, "-__v");
    res.json({
      message: "Get users data success",
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json({
      message: "Get data user by id success",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ messege: "user not found" });
  }
};

const addUser = (req, res) => {
  const data = new Users(req.body);
  data
    .save()
    .then((data) => {
      res.json({
        msg: "register success",
        err: null,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        msg: "register failed",
        err,
        data: null,
      });
    });
};

const deleteUser = async (req, res) => {
  try {
    const user = (await Users.findById(req.params.id, "-__v")) || false;
    if (!user) return res.status(404).json({ messege: "user not found" });

    await Users.deleteOne({ _id: req.params.id });
    res.json({
      message: "User has been deleted",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ messege: "invalid user id" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = (await Users.findById(req.params.id, "-__v")) || false;
    if (!user) return res.status(404).json({ messege: "user not found" });

    await Users.updateOne({ _id: req.params.id }, req.body);
    res.json({
      message: "Update user Success",
      update: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ messege: "invalid user id" });
  }
};

module.exports = { getUsers, getUserByID, addUser, deleteUser, updateUser };
