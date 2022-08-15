const express = require("express");
const router = express.Router();
const { tests } = require("../controller/TestsController");

router.route("/tests").get(tests);

module.exports = router;
