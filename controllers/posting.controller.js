const Posting = require("../models/posting.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Posting.find({}, "-__v").sort({ postDate: -1 });
      res.json({
        message: "Succes get All Posting",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await Posting.findById(req.params.id, "-__v");
      res.json({
        message: "Succes get All posting by ID",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500), send(err);
    }
  },

  addPosting: async (req, res) => {
    try {
      const data = req.body;
      await Posting.create(data);
      res.json({
        message: "Succes add posting",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updatePostingById: async (req, res) => {
    try {
      await Posting.updateOne({ _id: req.params.id }, { $set: req.body });
      res.json({
        messege: "Succes Update posting",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  deletePostingById: async (req, res) => {
    try {
      await Posting.deleteOne({ _id: req.params.id });
      res.json({
        message: "Succes delete Message",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
};
