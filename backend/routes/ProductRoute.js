const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controller/ProductController");

router.route("/products").get(getAllProducts);
router.route("/products/create").post(createProduct);

module.exports = router;