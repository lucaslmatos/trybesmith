import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { SRCreateSucess } from '../types/ServiceResponse';

const addNewProduct = async (newProduct:Product):Promise<SRCreateSucess> => {
  const latestProduct = await ProductModel.create(newProduct);
  return { responseMessage: latestProduct.dataValues, statusCode: 201 };
};

export default {
  addNewProduct,
};