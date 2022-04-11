const { Songs } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await Songs.find({}, "-__v")
    try {
      res.json({
        message: "Succes get All SOngs",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getById: async (req, res) => {
    const data = await Songs.findById(req.params.id, "-__v")
    try {
      res.json({
        message: "Succes get All SOngs By ID",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  addSong: async (req, res) => {
    const data = req.body;

      try {
        await Songs.create(data);
        res.json({
          message: "Succes add SOngs"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateSongById: async (req, res) => {
      await Songs.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "Succes Update SOngs"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deletesongById: async (req, res) => {

      await Songs.deleteOne({ _id: req.params.id });
      try {
        res.json({
          message: "Succes delete SOngs"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};