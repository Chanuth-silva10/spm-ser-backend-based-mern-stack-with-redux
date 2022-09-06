/** @format */

const express = require("express");
const {
  addCatergory,
  getCatergory,
  updateCatagory,
} = require("../controller/CategoryController");

const router = express.Router();

router.route("/catergory/addCatergory").post(addCatergory); //assingning the file imported -addcatergory
router.route("/catergory/getCatergory").get(getCatergory);
router.route("/catergory/updateCatergory/:id").put(updateCatagory);

module.exports = router;
