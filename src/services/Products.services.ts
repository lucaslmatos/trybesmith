import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { SRCreateSucess, SRListSucess } from '../types/ServiceResponse';

const addNewProduct = async (newProduct:Product):Promise<SRCreateSucess> => {
  const latestProduct = await ProductModel.create(newProduct);
  return { responseMessage: latestProduct.dataValues, statusCode: 201 };
};

const listAllProducts = async ():Promise<SRListSucess> => {
  const productsList = await ProductModel.findAll();
  return { responseMessage: productsList, statusCode: 200 };
};

export default {
  addNewProduct,
  listAllProducts,
};