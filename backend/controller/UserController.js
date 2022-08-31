const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Register user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "Profile",
      url: "https://www.pexels.com/search/profile%20picture/"
    }
  });

  const token = user.getJwtToken();
  console.log(token);
  res.status(201).json({
    success: true,
    token
  });
});