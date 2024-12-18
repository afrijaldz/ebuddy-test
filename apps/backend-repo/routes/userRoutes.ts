import { Router } from 'express'

import { getUsers, updateUser } from '../controller/userController';

const router = Router();

router.post('/fetch-user-data', getUsers);
router.post('/update-user-data', updateUser);

export default router