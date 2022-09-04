const express = require("express");
const { addToWishlist } = require("../controller/WishListController");

const router = express.Router();

router.route("/wishlist/add").post(addToWishlist);

module.exports = router;
