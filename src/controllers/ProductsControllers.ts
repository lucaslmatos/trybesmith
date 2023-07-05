import { Request, Response } from 'express';
import ProductsServices from '../services/Products.services';

const addNewProduct = async (req:Request, res:Response):Promise<Response> => {
  const newProduct = req.body;
  const { responseMessage, statusCode } = await ProductsServices.addNewProduct(newProduct);
  return res.status(statusCode).json(responseMessage);
};

export default {
  addNewProduct,
};