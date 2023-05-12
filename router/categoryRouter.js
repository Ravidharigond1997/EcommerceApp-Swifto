import express from "express";
import { isAdmin, requireSingIn } from "../middleware/authMiddleware.js";
import {
  categoryContoller,
  createCategoryController,
  deleteCategoryController,
  getSingleCategoryController,
  updateCategoryController,
} from "../controller/categoryContoller.js";

const router = express.Router();

//create category
router.post(
  "/create-category",
  requireSingIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSingIn,
  isAdmin,
  updateCategoryController
);

//get all gategory
router.get("/get-category", categoryContoller);

//get single category
router.get("/single-category/:slug", getSingleCategoryController);

//delete category
router.delete("/delete-category/:id", deleteCategoryController);

export default router;
