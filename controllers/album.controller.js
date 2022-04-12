const { Albums } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Albums.find({}, "-__v").populate("songs", "title -_id").populate("artists", "name -_id")
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
    try {
      const data = await Albums.findById(req.params.id, "-__v").populate("songs", "title -_id").populate("artists", "name -_id")
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
    
    try {
        const data = req.body;
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
    try {
        await Albums.updateOne({ _id: req.params.id }, { $set: req.body });
        res.json({
          message: "Succes Update Albums"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteAlbumById: async (req, res) => {

    try {
        await Albums.deleteOne({ _id: req.params.id });
        res.json({
          message: "Succes delete Albums"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};