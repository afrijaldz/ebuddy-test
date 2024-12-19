import { NextFunction, Request, Response } from "express";
import { RequestOptions } from "../types/controller";
import { firebaseAdmin } from "../config/firebaseConfig";

const auth = firebaseAdmin.auth();

async function authMiddleware(
  request: RequestOptions,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    response.status(401).json({ message: "No token provided" });
    return;
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    request.user_auth = decodedToken;
    next();
  } catch (error: any) {
    response.status(401).json({
      status: "error",
      message: "Invalid token or credentials",
    });
  }
}

export default authMiddleware;
