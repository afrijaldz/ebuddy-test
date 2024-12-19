import { Router } from "express";

import { register, login } from "../controller/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);

export default router;
