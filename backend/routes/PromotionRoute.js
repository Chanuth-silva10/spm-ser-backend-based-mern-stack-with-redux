const router = require("express").Router();
const {
  createpromo,
  findallpromo,
  updatepromo,
  updatepromostatus,
  deletepromo,
  filterpromobystatus,
  filterpromobytype,
  filterpromobyboth,
  findonepromo,
} = require("../controller/PromotionController");

router.route("/promotion").get(findallpromo);
router.route("/promotion").post(createpromo);
router.route("/promotion/:id").put(updatepromo);
router.route("/promotion/status/:id/:status").put(updatepromostatus);
router.route("/promotion/:id").delete(deletepromo);
router.route("/promotion/search/:searchID").get(findonepromo);
router.route("/promotion/report/bystatus/:status").get(filterpromobystatus);
router.route("/promotion/report/bytype/:type").get(filterpromobytype);
router.route("/promotion/report/byboth/:status/:type").get(filterpromobyboth);
module.exports = router;
