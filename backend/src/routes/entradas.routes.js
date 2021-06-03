import { Router } from 'express';
const router = Router();

import * as entradasController from '../controllers/entradas.controller';

router.post('/', entradasController.createEntrada);
router.get('/', entradasController.getEntradas);
router.get('/:id', entradasController.getEntradaById);
router.put('/:id', entradasController.updateEntradaById);
router.delete('/:id', entradasController.deleteEntradaById);

export default router;
