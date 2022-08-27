const express = require("express");
const router = express.Router();
const { products } = require("../controller/ProductController");

router.route("/products").get(products);

module.exports = router;
