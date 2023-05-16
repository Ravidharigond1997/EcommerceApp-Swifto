import express from "express";
import { isAdmin, requireSingIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import {
  createProductController,
  deleteProductContoller,
  getAllProductContoller,
  getPhotoContoller,
  getSingleProductContoller,
  updateProductController,
} from "../controller/productController.js";

const router = express.Router();

//create product
router.post(
  "/create-product",
  requireSingIn,
  formidable(),
  isAdmin,
  createProductController
);

// get all product
router.get("/get-product", getAllProductContoller);

// get single product based on slug
router.get("/get-product/:slug", getSingleProductContoller);
export default router;

//getting photo
router.get("/product-photo/:pid", getPhotoContoller);

//Delete product
router.delete("/delete-product/:id", deleteProductContoller);

//updating product
router.put("/update-product/:pid", updateProductController);
