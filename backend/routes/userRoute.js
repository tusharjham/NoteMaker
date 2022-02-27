const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
  updateUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");

const userRoute = new express.Router();

userRoute.route("/api/userregister").post(userRegister);
userRoute.route("/api/userLogin").post(userLogin);
userRoute.route("/api/userLogout").post(userLogout);
userRoute.route("/api/userUpdate").post(protect, updateUser);
module.exports = userRoute;
