import express from "express";
import { getproducts, getProductByID, createProduct, updateProduct, deleteProduct,  } from "../Controllers/productController.js";

const router = express.Router();

router.get("/getdata", getproducts)
router.get("/getdata/:id", getProductByID)
router.post("/create", createProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)


export default router;