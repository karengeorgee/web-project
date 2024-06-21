// routes/menuRoute.js

const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController'); // Adjust path as needed

router.get("/", (req, res) => {
  couponController.showCouponPage(req, res);
});

module.exports = router;
