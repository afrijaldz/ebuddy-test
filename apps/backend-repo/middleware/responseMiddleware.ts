import { Response } from "express";
import { RequestOptions } from "../types/controller";

export const responseMiddleware = (req: RequestOptions, res: Response): void =>  {
  const { data } = req;
  const status = req.status ? req.status : 'success';
  const message = req.message ? req.message : '';
  const statusCode = req.statusCode as number

  res.status(statusCode).json({
    status,
    message,
    data,
  });
};
