import { Request, Response } from 'express';
import OrdersServices from '../services/Orders.services';

const listAllOrders = async (_req:Request, res:Response):Promise<Response> => {
  const { responseMessage, statusCode } = await OrdersServices.listAllOrders();
  return res.status(statusCode).json(responseMessage);
};

export default {
  listAllOrders,
};