const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/ProductController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/products").get(getAllProducts);
router.route("/products/create").post(isAuthenticatedUser,createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;