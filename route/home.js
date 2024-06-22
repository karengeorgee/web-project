import express from "express";
import home from "../controller/home.js";

const router = express.Router();

router.get("/", home.index_get);
router.get("/reservation", home.reservation_get);
router.get("/mapmenu", home.mapMenu_get);
router.get("/mycoupons", home.myCoupons_get);

export default router;
