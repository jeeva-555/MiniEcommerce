const express = require("express");
const { postorder } = require("../controller/ordercontroller");
const router = express.Router();

router.route("/order").post(postorder);

module.exports = router;