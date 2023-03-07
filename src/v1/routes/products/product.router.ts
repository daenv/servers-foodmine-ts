import { Router } from "express";
import * as productController from "../../controllers/products/product.controller"
const router = Router();
// product Router
router.get("/", productController.getAllProduct)
router.put("/:id", productController.updateProduct)
router.get("/:id", productController.getProductById)
router.post("/", productController.createProduct)
router.get("/search?keyword=:keyword", productController.searchKeyword)
module.exports = router;