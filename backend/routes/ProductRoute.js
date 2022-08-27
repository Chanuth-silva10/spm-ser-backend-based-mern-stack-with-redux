const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controller/ProductController");

router.route("/products").get(getAllProducts);
router.route("/products/create").post(createProduct);
router.route("/product/:id").put(updateProduct);

module.exports = router;