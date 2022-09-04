const express = require("express");
const { addCart, updateCart } = require("../controller/CartController");

const router = express.Router();

router.route("/addToCart").post(addCart);
router.route("/updateCart/:id").put(updateCart);

module.exports = router;
