import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { SRListOrdersSucess } from '../types/ServiceResponse';

const listAllOrders = async ():Promise<SRListOrdersSucess> => {
  const ordersList = await OrderModel.findAll({ include: [{ model: ProductModel,
    as: 'productIds',
    attributes: ['id'],
  }], 
  });
  const convertedList = ordersList.map((order:any) => {
    const { id, userId } = order;
    const converted:any = {
      id,
      userId,
      productIds: [...order.productIds.map((product:Product) => product.id)],
    };
    return converted;
  });
  return { responseMessage: convertedList, statusCode: 200 };
};

const createOrder = async (userId:number, productIds:Array<number>):Promise<any> => {
  const thisOrder = await OrderModel.create({ userId });
  const orderId:number = thisOrder.dataValues.id;
  productIds.forEach((productId:number) => {
    ProductModel.update({ orderId }, { where: { id: productId } });
  });
  return { responseMessage: { userId, productIds }, statusCode: 201 };
};

export default {
  listAllOrders,
  createOrder,
};