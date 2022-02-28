const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      res.status(400);
      throw new Error("User already exists");
    }
    const userData = await User.create({ name, email, password, pic });
    const token1 = generateToken(userData._id);
    res.cookie("login", token1, {
      httpOnly: true,
    });
    res.status(200).send({
      _id: userData._id,
      name,
      email,
      token: token1,
    });
  } catch (error) {
    res.status(400).json(error.toString());
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogger = await User.findOne({ email });
    if (!userLogger) throw new Error("Invalid Username/Password");
    const check = await bcrypt.compare(password, userLogger.password);
    if (check) {
      const token1 = generateToken(userLogger._id);
      res.cookie("login", token1, {
        httpOnly: true,
      });
      res.status(200).send({
        _id: userLogger._id,
        name: userLogger.name,
        email,
        token: token1,
      });
    } else {
      throw new Error("Invalid Username/Password");
    }
  } catch (err) {
    res.status(400).send(err.toString());
  }
};
const userLogout = async (req, res) => {
  try {
    res.clearCookie("login");
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err.toString());
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      if (req.body.email != user.email) {
        const email = req.body.email;
        const check = await User.findOne({ email });
        if (check) {
          throw new Error("The email already exists");
        }
      }
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.status(200).send(updateUser);
  } catch (err) {
    res.status(400).send(err.toString());
  }
};

module.exports = { userRegister, userLogin, userLogout, updateUser };
