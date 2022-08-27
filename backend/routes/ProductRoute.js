const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controller/ProductController");

router.route("/products").get(getAllProducts);
router.route("/products/create").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;