const express = require("express");
const sellercontroller = require("../controller/sellercontroller");
const router = express.Router();  

router.post("/products", sellercontroller.addproducts);
router.get("/products", sellercontroller.getproducts);

module.exports = router;

