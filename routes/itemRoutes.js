// routes/menuRoutes.js

const express = require('express');
const menuController = require('../controllers/itemController'); // Adjust the path according to your project structure

const router = express.Router();

router.post("/", menuController.createMenuItem);
router.get("/", menuController.getAllMenuItems);
router.get("/:id", menuController.getMenuItemById);
router.put("/:id", menuController.updateMenuItem);
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
