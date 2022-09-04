const express = require("express");
const {
  addCart,
  updateCart,
  getCartData,
} = require("../controller/CartController");

const router = express.Router();

router.route("/addToCart").post(addCart);
router.route("/updateCart/:id").put(updateCart);
router.route("/cart").get(getCartData);

module.exports = router;
