const express = require("express");
const {
  createBrand,
  getAllBrands,
  updateBrand,
  deleteBrand,
  getSingleBrand,
  getAdminBrands,
} = require("../controller/BrandController");
const { isAuthenticatedUser} = require("../middleware/auth");
const router = express.Router();

router.route("/brands").get(getAllBrands);
router
  .route("/admin/brands")
  .get(isAuthenticatedUser, getAdminBrands);

router
  .route("/brand/new")
  .post(isAuthenticatedUser, createBrand);

router
  .route("/brand/:id")
  .put(isAuthenticatedUser, updateBrand)
  .delete(isAuthenticatedUser, deleteBrand)
  .get(getSingleBrand);

module.exports = router;
