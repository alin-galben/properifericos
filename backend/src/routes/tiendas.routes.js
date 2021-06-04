import { Router } from 'express';
const router = Router();

import * as tiendasController from '../controllers/tiendas.controller';

router.post('/', tiendasController.createTienda);
router.get('/', tiendasController.getTiendas);
router.get('/:id', tiendasController.getTiendaById);
router.put('/:id', tiendasController.updateTiendaById);
router.delete('/:id', tiendasController.deleteTiendaById);

export default router;