import { Router } from "express";

import { getUsers, updateUser } from "../controller/userController";

const router = Router();

router.get("/fetch-user-data", getUsers);
router.put("/update-user-data/:user_id", updateUser);

export default router;
