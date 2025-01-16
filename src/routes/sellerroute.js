// const express = require("express");
// const sellercontroller = require("../controllers/sellercontroller.js");
// const router = express.Router();  

// router.post("/products", sellercontroller.addproducts);
// router.get("/products", sellercontroller.getproducts);

// module.exports = router;

import express from 'express';
import sellercontroller from '../controllers/sellercontroller.js';

const router = express.Router();

router.post('/products', sellercontroller.addproducts);
router.get('/products', sellercontroller.getproducts);

export default router;
