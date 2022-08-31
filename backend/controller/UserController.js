const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { use } = require("../routes/UserRoute");

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

  const token = user.getJwtToken();
  console.log(token);
  res.status(201).json({
    success: true,
    token,
  });
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

  const token = user.getJwtToken();

  console.log(token);
  res.status(201).json({
    success: true,
    token,
  })

});