import express from "express";
import { isAdmin, requireSingIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import {
  braintreePaymentController,
  braintreeTokenController,
  categoryProductController,
  createProductController,
  deleteProductContoller,
  filterProductController,
  getAllProductContoller,
  getPhotoContoller,
  getSingleProductContoller,
  perPagePRoductcontroller,
  productCountController,
  searchProductController,
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

//filter product based on category and prices
router.post("/filter-product", filterProductController);

//product count per page
router.get("/product-count", productCountController);

//pre page product
router.get("/product-list/:page", perPagePRoductcontroller);

//search based on keywords
router.get("/search/:keyword", searchProductController);

//category wise product
router.get("/product-category/:slug", categoryProductController);

//braintree payment
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSingIn, braintreePaymentController);
