import { JwtPayload } from 'jsonwebtoken';
import { ProductSequelizeModel } from '../database/models/product.model';
import { OrderSequelizeModel } from '../database/models/order.model';

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

export type SRListOrdersSucess = {
  responseMessage: Array<OrderSequelizeModel>,
  statusCode:number,
};

export type GenericReturn = {
  responseMessage: string | JwtPayload,
  statusCode:number,
};

export type UserLog = {
  username:string,
  password:string,
};
