const Playlists = require("../models/playlist.model");

const getPlaylists = async (req, res) => {
  try {
    const users = await Playlists.find({}, "-__v");
    res.json({
      message: "Get playlist success",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getPlaylistByID = async (req, res) => {
  try {
    const users = await Playlists.findById(req.params.id);
    res.json({
      message: "Get playlist by id success",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ messege: "playlist not found" });
  }
};

const addPlaylist = (req, res) => {
  const data = new Playlists(req.body);
  data
    .save()
    .then((data) => {
      res.json({
        msg: "playlist has been created",
        err: null,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        msg: "create playlist failed",
        err,
        data: null,
      });
    });
};

const deletePlaylist = async (req, res) => {
  try {
    const playlist = (await Playlists.findById(req.params.id, "-__v")) || false;
    if (!playlist)
      return res.status(404).json({ messege: "playlist not found" });

    await Playlists.deleteOne({ _id: req.params.id });
    res.json({
      message: "playlist has been deleted",
      playlist,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ messege: "invalid playlist id" });
  }
};

const updatePLaylist = async (req, res) => {
  try {
    const user = (await Playlists.findById(req.params.id, "-__v")) || false;
    if (!user) return res.status(404).json({ messege: "user not found" });

    await Playlists.updateOne({ _id: req.params.id }, req.body);
    res.json({
      message: "Update user Success",
      update: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ messege: "invalid user id" });
  }
};

module.exports = {
  getPlaylists,
  getPlaylistByID,
  addPlaylist,
  deletePlaylist,
  updatePLaylist,
};
