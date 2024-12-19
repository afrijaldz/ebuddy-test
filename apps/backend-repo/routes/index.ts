import express, { IRouter } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import { responseMiddleware } from "../middleware/responseMiddleware";
import authMiddleware from "../middleware/authMiddleware";

const createRoutes = (): IRouter => {
  const router = express.Router();

  router.use("/auth", authRoutes, responseMiddleware);
  router.use("/users", authMiddleware, userRoutes, responseMiddleware);

  return router;
};

export default createRoutes;
