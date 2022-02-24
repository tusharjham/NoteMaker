const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
} = require("../controllers/userController");

const userRoute = new express.Router();

userRoute.route("/api/userregister").post(userRegister);
userRoute.route("/api/userLogin").post(userLogin);
userRoute.route("/api/userLogout").post(userLogout);

module.exports = userRoute;
