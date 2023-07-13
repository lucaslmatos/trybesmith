import { Request, Response } from 'express';
import OrdersServices from '../services/Orders.services';

const listAllOrders = async (_req:Request, res:Response):Promise<Response> => {
  const { responseMessage, statusCode } = await OrdersServices.listAllOrders();
  return res.status(statusCode).json(responseMessage);
};

const createOrder = async (req:Request, res:Response):Promise<Response> => {
  const { userId, productIds } = req.body;
  const { responseMessage, statusCode } = await OrdersServices.createOrder(userId, productIds);
  return res.status(statusCode).json(responseMessage);
};

export default {
  listAllOrders,
  createOrder,
};