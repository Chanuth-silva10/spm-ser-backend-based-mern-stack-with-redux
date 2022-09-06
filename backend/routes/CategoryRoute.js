/** @format */

const express = require("express");
const {
  addCatergory,
  getCatergory,
  updateCatagory,
  removeCategory,
} = require("../controller/CategoryController");

const router = express.Router();

router.route("/catergory/addCatergory").post(addCatergory); //assingning the file imported -addcatergory
router.route("/catergory/getCatergory").get(getCatergory);
router.route("/catergory/updateCatergory/:id").put(updateCatagory);
router.route("/catergory/removeCatergory/:id").delete(removeCategory);

module.exports = router;
