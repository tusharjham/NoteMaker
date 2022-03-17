const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const path = require("path");

const { protect } = require("./middleware/auth");
const mongo = require("./config/db");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");

dotenv.config();
mongo();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/login", (req, res) => {
  try {
    res.send();
  } catch (err) {
    res.send(err.toString());
  }
});
app.use(userRoute);
app.use(noteRoute);

// --------------------deployment----------------------
const dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
// --------------------deployment----------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server connected to port${PORT}`);
});
