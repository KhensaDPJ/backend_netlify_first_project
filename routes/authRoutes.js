// routes/authRoutes.js
import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js";
import productController from "../controllers/product.controller.js";
const router = express.Router();

router.get('/product/list',productController.productList);
router.post('/product/create', authMiddleware.authenticateJWT,productController.addProduct);
router.patch('/product/update', authMiddleware.authenticateJWT,productController.updateProduct);
router.delete('/product/delete/:id', authMiddleware.authenticateJWT,productController.deleteProduct);

export default router;
