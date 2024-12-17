import { Router } from 'express'

import { register, login } from '../controller/authController'

import {responseMiddleware} from '../middleware/responseMiddleware'

const router = Router();

router.post('/login', login, responseMiddleware);
router.post('/register', register, responseMiddleware);

export default router