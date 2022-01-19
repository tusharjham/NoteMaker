const bcrypt = require("bcryptjs");
const express = require("express");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const userRoute = new express.Router();

userRoute.get("/api/use", (req, res) => {
  res.send("User selected");
});

userRoute.post("/api/userregister", async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      console.log("reached check");
      res.status(400);
      throw new Error("User already exists");
    }
    const userData = User.create({ name, email, password, pic });
    // const result = await userData.save();
    res.status(200).json({
      _id: userData._id,
      name,
      email,
      password,
      token: generateToken(userData._id),
    });
    // res.json(result);
  } catch (error) {
    console.log("catch block", error.toString());
    res.status(400).json(error.toString());
  }
});

userRoute.post("/api/userLogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogger = await User.findOne({ email });
    if (!userLogger) throw new Error("Invalid Username/Password");
    const check = await bcrypt.compare(password, userLogger.password);
    if (check) {
      res.status(200).json({
        _id: userLogger._id,
        name: userLogger.name,
        email,
        pic: userLogger.pic,
        token: generateToken(userLogger._id),
      });
    } else {
      throw new Error("Invalid Username/Password");
    }
  } catch (err) {
    res.status(400).send(err.toString());
  }
});

module.exports = userRoute;
