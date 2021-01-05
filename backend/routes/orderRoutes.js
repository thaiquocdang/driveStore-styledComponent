import express from "express"
const router = express.Router()
import {
  addOrderItems, getOrderById, updateOrderToPaid, getMyOrders
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js"

//route for add order (customer place an order)
router.route("/").post(protect, addOrderItems)

//route for get user's order
router.route("/myorders").get(protect, getMyOrders)

//route for get order details
router.route("/:id").get(protect, getOrderById)

//route for update order to Paid
router.route("/:id/pay").put(protect, updateOrderToPaid)



export default router;
