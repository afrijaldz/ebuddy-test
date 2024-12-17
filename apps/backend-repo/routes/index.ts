import express, { IRouter } from "express";
import AuthMiddleware from "../middleware/authMiddleware";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const createRoutes = (): IRouter => {
  const router = express.Router();

  router.use("/auth", authRoutes);
  // router.use("/users", AuthMiddleware, userRoutes);

  return router;
};

export default createRoutes;
