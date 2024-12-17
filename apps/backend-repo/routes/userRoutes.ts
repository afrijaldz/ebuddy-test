import express from 'express'

import userController from '../controller/userController'

import responseMiddleware from '../middleware/authMiddleware'

const router = express.Router();

router.post('/login', userController.login, responseMiddleware);
router.post('/register', userController.register, responseMiddleware);

export default router