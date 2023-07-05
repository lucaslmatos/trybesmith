import { ProductSequelizeModel } from '../database/models/product.model';

export type SRCreateSucess = {
  responseMessage: SRCreateSucessMessage,
  statusCode:number,
};

type SRCreateSucessMessage = {
  id: number,
  name: string,
  price: string,
};

export type SRListSucess = {
  responseMessage: Array<ProductSequelizeModel>,
  statusCode:number,
};
