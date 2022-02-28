const noteModel = require("../models/noteModel");

const getNote = async (req, res) => {
  try {
    const { _id } = req.user;
    const notes = await noteModel.find({ user: _id });
    if (!notes) {
      throw new Error("No note exist");
    }
    if (notes.length === 0) {
      res.status(200).send(notes);
    } else {
      res.status(200).send(notes);
    }
  } catch (err) {
    res.status(404).send(err.toString());
  }
};

const getSingleNote = async (req, res) => {
  try {
    const { id } = req.body;
    const note = await noteModel.findOne({ _id: id });
    res.status(200).send(note);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};

const createNote = async (req, res) => {
  try {
    const { heading, category, desc } = req.body;
    const user = req.user;
    const note = new noteModel({ heading, category, desc, user });
    await note.save();
    res.status(200).send(note);
  } catch (err) {
    res.status(404).send(err.toString());
  }
};
const updateNote = async (req, res) => {
  try {
    const { id, heading, category, desc } = req.body;
    const note = await noteModel.findOne({ _id: id });
    if (!note) {
      throw new Error("No note exist");
    }
    if (req.user._id.toString() != note.user.toString()) {
      throw new Error("You cant perform this action");
    }
    if (note) {
      note.heading = heading;
      note.category = category;
      note.desc = desc;
      await note.save();
    }
    res.status(200).send(note);
  } catch (err) {
    res.send(404).send(err.toString());
  }
};

const deleteNote = async (req, res) => {
  try {
    const id = req.body.data;
    const note = await noteModel.findOne({ _id: id });
    if (!note) {
      throw new Error("No note exist");
    }
    if (req.user._id.toString() != note.user.toString()) {
      throw new Error("You cant perform this action");
    }
    await note.remove();
    res.status(200).send("Note Deleted");
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
module.exports = { getNote, createNote, updateNote, deleteNote, getSingleNote };
