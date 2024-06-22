import express from "express";
import admin from "../controller/admin.js";

const router = express.Router();

router.get("/:id", admin.home_get);

export default router;
