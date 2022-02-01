const express = require("express");
const noteModel = require("../models/noteModel");

const noteRoute = new express.Router();

noteRoute.get("/api/getNotes", async (req, res) => {
  try {
    const { user_id } = req.body;
    const notes = await noteModel.find({ user: user_id });
    if (!notes) {
      throw new Error("No note exist");
    }
    res.status(200).send(notes);
  } catch (err) {
    res.status(404).send(err.toString());
  }
});

noteRoute.post("/api/createNote", async (req, res) => {
  try {
    const { heading, category, desc, user } = req.body;
    const note = await new noteModel({ heading, category, desc, user });
    await note.save();
    res.send(note);
  } catch (err) {
    res.status(404).send(err.toString());
  }
});
noteRoute.put("/api/updateNote", async (req, res) => {
  try {
    const { id, user_id, heading, category, desc } = req.body;
    const note = await noteModel.findOne({ _id: id });
    if (!note) {
      throw new Error("No note exist");
    }
    if (user_id != note.user) {
      throw new Error("You cant perform this action");
    }
    if (note) {
      note.heading = heading;
      note.category = category;
      note.desc = desc;
      await note.save();
      res.status(200).send(note);
    }
    res.send(note);
  } catch (err) {
    res.send(404).send(err);
  }
});
noteRoute.post("/api/deleteNote", async (req, res) => {
  try {
    const { id, user_id } = req.body;
    const note = await noteModel.findOne({ _id: id });
    if (!note) {
      throw new Error("No note exist");
    }
    if (user_id != note.user) {
      throw new Error("You cant perform this action");
    }
    await note.remove();
    res.status(200).send("Note Deleted");
  } catch (err) {
    res.status(404).send(err.toString());
  }
});
module.exports = noteRoute;
