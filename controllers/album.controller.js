const { Albums } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await Albums.find({}, "-__v")
    try {
      res.json({
        message: "Succes get All Albums",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getById: async (req, res) => {
    const data = await Albums.findById(req.params.id, "-__v")
    try {
      res.json({
        message: "Succes get All Albums By ID",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  addAlbum: async (req, res) => {
    const data = req.body;

      try {
        await Albums.create(data);
        res.json({
          message: "Succes add Albums"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateAlbumById: async (req, res) => {
      await Albums.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "Succes Update Albums"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteAlbumById: async (req, res) => {

      await Albums.deleteOne({ _id: req.params.id });
      try {
        res.json({
          message: "Succes delete Albums"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};