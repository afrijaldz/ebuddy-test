import { Request } from "express";

export interface RequestOptions extends Request {
  data?: any
  message?: any
  status?: string
}