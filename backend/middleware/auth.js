const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.login;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new Error("COOKIE EXPIRED");
    }
    req.user = await User.findOne({ _id: decoded.id });
    console.log("authentication succesful");
    next();
  } catch (err) {
    console.log("authentication failed");
    res.status(401).send(err.toString());
  }
};
module.exports = { protect };
