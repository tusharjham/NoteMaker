const express = require("express");
const mongo = require("./config/db");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
mongo();
const PORT = 5000 || process.env.port;

app.get("/", (req, res) => {
  res.send("<h1>HEllo World</h1>");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  res.send(note);
});

app.listen(PORT, () => {
  console.log(`Server connected to port${PORT}`);
});
