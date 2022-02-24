const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

const { protect } = require("./middleware/auth");
const mongo = require("./config/db");
const notes = require("./data/notes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");

dotenv.config();
mongo();
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
  try {
    console.log(req.cookies);
    res.send();
  } catch (err) {
    res.send(err.toString());
  }
});
app.use(userRoute);
app.use(noteRoute);
const PORT = 5000 || process.env.port;

app.listen(PORT, () => {
  console.log(`Server connected to port${PORT}`);
});
