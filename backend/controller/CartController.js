const Cart = require("../models/CartModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// add to cart

exports.addCart = catchAsyncErrors(async (req, res) => {
  const {
    productName,
    quantity,
    productImage,
    productPrice,
    userId,
    productId,
    Stock,
  } = req.body;

  const cart = await Cart.create({
    productName,
    quantity,
    productImage,
    productPrice,
    userId,
    productId,
    Stock,
  });

  res.status(200).json({ success: true, cart });
});

// update Cart
exports.updateCart = catchAsyncErrors(async (req, res, next) => {
  const { quantity } = req.body;
  const cart = await Cart.findByIdAndUpdate(req.params.id);

  if (!cart) {
    return next(new ErrorHandler("No cart found with this id", 404));
  }

  await cart.updateOne({
    quantity,
  });
});
