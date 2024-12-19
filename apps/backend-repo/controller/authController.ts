import { NextFunction, Response } from "express";
import authCollection from "../repository/authCollection";
import { RequestOptions } from "../types/controller";

export const register = async (
  request: RequestOptions,
  _: Response,
  next: NextFunction
) => {
  const { email, password, displayName } = request.body;
  try {
    const data = await authCollection().register(email, password, displayName);
    if (data) {
      request.data = data;
      request.statusCode = 201;
      next();
    }
  } catch (error) {
    request.data = null;
    request.message = error;
    request.statusCode = 400;
    request.status = "error";
    next();
  }
};

export const login = async (
  request: RequestOptions,
  _: Response,
  next: NextFunction
) => {
  const { email, password } = request.body;

  try {
    const data: any = await authCollection().login(email, password);
    if (!data) {
      request.data = null;
      request.message = "User not found";
      request.statusCode = 401;
      request.status = "error";
      next();
    }
    request.data = data;
    request.statusCode = 200;
    next();
  } catch (error) {
    request.data = null;
    request.message = error;
    request.statusCode = error === "auth/invalid-credential" ? 401 : 400;
    request.status = "error";
    next();
  }
};
