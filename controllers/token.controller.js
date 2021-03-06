const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getToken = (req, res) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(404).json({ message: "invalid token" });
      }
      res.json(user);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteToken = (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { getToken, deleteToken };
