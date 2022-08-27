const Product = require("../models/ProductModel.js");

// create Product
exports.createProduct = async (req, res, next) => {

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    message: "Router is Working fine.",
  });
};