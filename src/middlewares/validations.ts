import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../services/jwt';

const checkNewProductName = (req:Request, res:Response, next:NextFunction):any => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  } 
  if (typeof (name) !== 'string') {
    console.log(name.type);
    
    return res.status(422).json({ message: '"name" must be a string' });
  } 
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const checkNewProductPrice = (req:Request, res:Response, next:NextFunction):any => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  } 
  if (typeof (price) !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  } 
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
};

const checkLoginUser = async (req:Request, res:Response, next:NextFunction):Promise<any> => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  } 
  const thisUser = await UserModel.findOne({ where: { username } });
  if (!(thisUser && bcrypt.compareSync(password, thisUser.dataValues.password))) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

const checkToken = async (req:Request, res:Response, next:NextFunction):Promise<any> => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    if (!jwt.verify(authorization.split(' ')[1])) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

const checkUserId = async (req:Request, res:Response, next:NextFunction):Promise<any> => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  } 
  const thisUser = await UserModel.findOne({ where: { id: userId } });
  if (!thisUser) {
    return res.status(404).json({ message: '"userId" not found' });
  }
  next();
};

const checkProductId = async (req:Request, res:Response, next:NextFunction):Promise<any> => {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }
  if (!(productIds instanceof Array)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  } 
  if (productIds.length === 0 || !productIds.every((productId) => typeof productId === 'number')) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }
  next();
};

export default {
  checkNewProductName,
  checkNewProductPrice,
  checkLoginUser,
  checkToken,
  checkUserId,
  checkProductId,
};