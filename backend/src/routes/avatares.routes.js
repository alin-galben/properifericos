import { Router } from 'express';
const router = Router();

import * as avataresController from '../controllers/avatares.controller';

router.post('/', avataresController.createAvatar);
router.get('/', avataresController.getAvatares);
router.get('/:id', avataresController.getAvatarById);
router.put('/:id', avataresController.updateAvatarById);
router.delete('/:id', avataresController.deleteAvatarById);

export default router;
