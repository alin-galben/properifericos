import { Router } from 'express';
const router = Router();

import * as rolesController from '../controllers/roles.controller';

router.post('/', rolesController.createRole);
router.get('/', rolesController.getRoles);

export default router;
