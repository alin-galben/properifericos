import { Router } from 'express';
const router = Router();

import * as enlacesController from '../controllers/enlaces.controller';

router.post('/', enlacesController.createEnlace);
router.get('/', enlacesController.getEnlaces);
router.get('/:id', enlacesController.getEnlaceById);
router.put('/:id', enlacesController.updateEnlaceById);
router.delete('/:id', enlacesController.deleteEnlaceById);

export default router;
