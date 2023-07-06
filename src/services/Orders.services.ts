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

export default {
  listAllOrders,
};