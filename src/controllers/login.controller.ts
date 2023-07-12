import { Request, Response } from 'express';
import LoginServices from '../services/login.services';

const login = async (req:Request, res:Response):Promise<Response> => {
  const thisUser = req.body;
  const { responseMessage, statusCode } = await LoginServices.login(thisUser);
  return res.status(statusCode).json({ token: responseMessage });
};

export default {
  login,
};