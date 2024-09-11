// routes/authRoutes.js
import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js";
import productController from "../controllers/product.controller.js";
const router = express.Router();

router.get('/api/product/list',productController.productList);
router.post('/api/product/create', authMiddleware.authenticateJWT,productController.addProduct);
router.patch('/api/product/update', authMiddleware.authenticateJWT,productController.updateProduct);
router.delete('/api/product/delete/:id', authMiddleware.authenticateJWT,productController.deleteProduct);

export default router;
