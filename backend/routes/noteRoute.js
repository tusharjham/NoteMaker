const express = require("express");
const {
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getSingleNote,
} = require("../controllers/noteController");
const { protect } = require("../middleware/auth");

const noteRoute = new express.Router();

noteRoute.route("/api/getNotes").get(protect, getNote);
noteRoute.route("/api/createNote").post(protect, createNote);
noteRoute.route("/api/updateNote").put(protect, updateNote);
noteRoute.route("/api/deleteNote").delete(protect, deleteNote);
noteRoute.route("/api/getSingleNote").post(protect, getSingleNote);

module.exports = noteRoute;
