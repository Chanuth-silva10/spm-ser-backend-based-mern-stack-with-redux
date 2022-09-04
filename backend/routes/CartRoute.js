const express = require("express");
const { addCart } = require("../controller/CartController");

const router = express.Router();

router.route("/addToCart").post(addCart);

module.exports = router;
