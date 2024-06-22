import express from "express";
import {
  createMenuItem_post,
  getAllMenuItems_get,
  getMenuItemById_get,
  updateMenuItem_put,
  deleteMenuItem_delete,
} from "../controller/menuItem.js";

const router = express.Router();

// Routes
router.post("/", createMenuItem_post);
router.get("/", getAllMenuItems_get);
router.get("/:id", getMenuItemById_get);
router.put("/:id", updateMenuItem_put);
router.delete("/:id", deleteMenuItem_delete);

export default router;
