const express = require("express");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAdminCategories,
} = require("../controller/CategoryController");
const { isAuthenticatedUser} = require("../middleware/auth");
const router = express.Router();

router.route("/categories").get(getAllCategories);
router
  .route("/admin/categories")
  .get(isAuthenticatedUser, getAdminCategories);

router
  .route("/category/new")
  .post(isAuthenticatedUser, createCategory);

router
  .route("/category/:id")
  .put(isAuthenticatedUser, updateCategory)
  .delete(isAuthenticatedUser, deleteCategory)
  .get(getSingleCategory);

module.exports = router;
