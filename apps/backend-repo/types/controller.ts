import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export interface RequestOptions extends Request {
  data?: any
  message?: any
  status?: string
  user_auth?: DecodedIdToken
}

export type ControllerParams = {
  request: RequestOptions;
  response?: Response;
  next: NextFunction;
};