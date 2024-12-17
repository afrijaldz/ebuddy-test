import { NextFunction, Request, Response } from 'express';
import authCollection from '../repository/authCollection'
import { RequestOptions } from '../utils/request';


export const register = async (request: RequestOptions, response: Response, next: NextFunction) => {
  const { email, password, displayName} = request.body

  try {
    const data = await authCollection().register(email, password, displayName)
    if (data) {
      request.data = data
      next()
    }
    
  } catch (error) {
    request.data = null;
    request.message = error;
    request.status = 'error';
    next();
  }
}