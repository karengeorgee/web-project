const express = require('express');
const router = express.Router();
const userController = require('../controllers/userDController');

router.get('/', userController.getUserDashboard);

module.exports = router;
