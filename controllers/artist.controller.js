const { Artists } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await Artists.find({}, "-__v")
    try {
      res.json({
        message: "Succes get All Artist",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getById: async (req, res) => {
    const data = await Artists.findById(req.params.id, "-__v")
    try {
      res.json({
        message: "Succes get All Artist By ID",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  addArtist: async (req, res) => {
    const data = req.body;

      try {
        await Artists.create(data);
        res.json({
          message: "Succes add Artist"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateArtistById: async (req, res) => {
      await Artists.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "Succes Update Artist"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteArtistById: async (req, res) => {

      await Artists.deleteOne({ _id: req.params.id });
      try {
        res.json({
          message: "Succes delete Artist"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};