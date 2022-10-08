const router = require("express").Router();
const {
  createReview,
  updateReview,
  deletereview,
  findallreview,
  findonereview,
} = require("../controller/ReviewController");

router.route("/review").post(createReview);
router.route("/review/:id").put(updateReview);
router.route("/review/:id").delete(deletereview);
router.route("/review").get(findallreview);
router.route("/review/search/:searchID").get(findonereview);

module.exports = router;
