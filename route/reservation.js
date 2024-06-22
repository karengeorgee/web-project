import express from "express";
import {
  createReservation_post,
  getAllReservations_get,
  getReservationById_get,
  updateReservation_put,
  deleteReservation_delete,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/", createReservation_post);
router.get("/", getAllReservations_get);
router.get("/:id", getReservationById_get);
router.put("/:id", updateReservation_put);
router.delete("/:id", deleteReservation_delete);

export default router;
