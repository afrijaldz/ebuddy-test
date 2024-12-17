import { Router } from 'express'

import { register} from '../controller/authController'

import {responseMiddleware} from '../middleware/responseMiddleware'

const router = Router();

// router.post('/login', authController().register, responseMiddleware);
router.post('/register', register, responseMiddleware);

export default router