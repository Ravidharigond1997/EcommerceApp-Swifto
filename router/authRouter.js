import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrderscontroller,
  getAllOrderscontroller,
  updateOrderStatusController,
} from "../controller/authController.js";
import { isAdmin, requireSingIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//router
//Register || METHOD POST
router.post("/register", registerController);

//Login || METHOD POST
router.post("/login", loginController);

//Forgate password || post
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSingIn, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requireSingIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSingIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSingIn, updateProfileController);

//get orders
router.get("/orders", requireSingIn, getOrderscontroller);

//get all orders
router.get("/all-orders", requireSingIn, isAdmin, getAllOrderscontroller);

//update order status
router.put(
  "/order-status/:orderId",
  requireSingIn,
  isAdmin,
  updateOrderStatusController
);

export default router;
