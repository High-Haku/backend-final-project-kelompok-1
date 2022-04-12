const { Artists } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Artists.find({}, "-__v").populate("songs", "title -_id").populate("albums", "name -_id")
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
    try {
      const data = await Artists.findById(req.params.id, "-__v").populate("songs", "title -_id").populate("albums", "name -_id")
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
    
    try {
        const data = req.body;
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
    try {
        await Artists.updateOne({ _id: req.params.id }, { $set: req.body });
        res.json({
          message: "Succes Update Artist"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteArtistById: async (req, res) => {

    try {
        await Artists.deleteOne({ _id: req.params.id });
        res.json({
          message: "Succes delete Artist"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};