import { Response } from "express";
import { RequestOptions } from "../utils/request";

export const responseMiddleware = (req: RequestOptions, res: Response): void =>  {
  const { data } = req;
  const status = req.status ? req.status : 'success';
  const message = req.message ? req.message : '';

  res.status(status === 'ok' ? 200 : 500).json({
    status,
    message,
    data,
  });
};
