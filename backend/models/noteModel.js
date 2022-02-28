const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const noteModel = new mongoose.model("notesModel", noteSchema);

module.exports = noteModel;
