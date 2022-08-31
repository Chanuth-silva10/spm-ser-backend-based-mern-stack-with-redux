const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { use } = require("../routes/UserRoute");
const sendToken = require("../utils/jwtToken");

// Register user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "Profile",
      url: "https://www.pexels.com/search/profile%20picture/",
    },
  });

  sendToken(user, 201, res);

});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter the email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
 

  if (!user) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }

  sendToken(user, 201, res);
});

//  Log out user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Log out success",
    });
  });