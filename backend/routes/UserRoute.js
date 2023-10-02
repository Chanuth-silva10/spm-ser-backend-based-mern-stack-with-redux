const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  userDetails,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/UserController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/me/update/info").put(isAuthenticatedUser, updateProfile);

router.route("/me").get(isAuthenticatedUser, userDetails);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, getAllUsers);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, getSingleUser)
  .put(isAuthenticatedUser, updateUserRole)
  .delete(isAuthenticatedUser, deleteUser);

module.exports = router;
