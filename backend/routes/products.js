const express = require("express");
const { getproducts, getsingleproduct } = require("../controller/productscontroller");
const router = express.Router();

router.route("/products").get(getproducts);
router.route("/products/:id").get(getsingleproduct);


module.exports = router;