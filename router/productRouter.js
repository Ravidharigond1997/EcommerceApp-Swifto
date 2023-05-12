import express from "express";
import { isAdmin, requireSingIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController } from "../controller/productController.js";

const router = express.Router();

router.post(
  "/create-product",
  requireSingIn,
  formidable(),
  isAdmin,
  createProductController
);

export default router;
