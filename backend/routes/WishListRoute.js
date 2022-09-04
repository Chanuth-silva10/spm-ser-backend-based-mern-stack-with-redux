const express = require("express");
const {
  addToWishlist,
  getWishlistData,
} = require("../controller/WishListController");

const router = express.Router();

router.route("/wishlist/add").post(addToWishlist);
router.route("/wishlist").get(getWishlistData);

module.exports = router;
