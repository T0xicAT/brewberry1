import express from "express";
import {
  addOrderItems,
  getOrder,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrder);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;