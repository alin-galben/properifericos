import { Router } from 'express';
const router = Router();

import * as productosController from '../controllers/productos.controller';

router.post('/', productosController.createProducto);
router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductoById);
router.put('/:id', productosController.updateProductoById);
router.delete('/:id', productosController.deleteProductoById);

export default router;
