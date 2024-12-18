import { NextFunction, Request, Response } from "express";
import admin from 'firebase-admin'
import { RequestOptions } from "../utils/request";

const serviceAccount = require("../config/ebuddy-test-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const auth = admin.auth();

async function authMiddleware(request: RequestOptions, response: Response, next: NextFunction) {
  const token = request.headers.authorization?.split(' ')[1];

  if (!token) {
    response.status(401).json({ message: 'No token provided' });
    return
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    request.user_auth = decodedToken;
    next();
  } catch (error: any) {
    response.status(401).json({
      status: 'error',
      message: 'Invalid token or credentials',
    });
  }
}

export default authMiddleware
