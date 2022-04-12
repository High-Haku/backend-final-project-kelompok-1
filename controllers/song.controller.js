const Songs = require("../models/song.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Songs.find({}, "-__v").populate("albums", "name -_id");
      res.json({
        message: "Success get All Songs",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Songs.findById(req.params.id, "-__v").populate(
        "albums",
        "name -_id"
      );
      res.json({
        message: "Success get All Songs By ID",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  addSong: async (req, res) => {
    try {
      const data = req.body;
      await Songs.create(data);
      res.json({
        message: "Success add Songs",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateSongById: async (req, res) => {
    try {
      await Songs.updateOne({ _id: req.params.id }, { $set: req.body });
      res.json({
        message: "Success Update Songs",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  deletesongById: async (req, res) => {
    try {
      await Songs.deleteOne({ _id: req.params.id });
      res.json({
        message: "Succes delete Songs",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
};
