/** @format */

const express = require("express");
const { addCatergory } = require("../controller/CategoryController");

const router = express.Router();

router.route("/catergory/addCatergory").post(addCatergory); //assingning the file imported -addcatergory
module.exports = router;
