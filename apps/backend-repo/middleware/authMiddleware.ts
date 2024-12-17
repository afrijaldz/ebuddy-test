import { NextFunction, Request, Response } from "express";

async function authMiddleware(request: Request, response: Response, next: NextFunction) {
  // const token = request.headers.authorization?.split(' ')[1];
  try {
    // const decoded = await jwt.verify(token, process.env.JWT_KEY);
    // request.user = decoded;
    next();
  } catch (error: any) {
    response.status(500).json({
      status: 'ERROR',
      message: error.message,
      meta: null,
      data: null,
    });
  }
}

export default authMiddleware
