import express from 'express';
import ProductsControllers from './controllers/ProductsControllers';
import Validations from './middlewares/validations';
import OrdersControllers from './controllers/OrdersControllers';

const app = express();

app.use(express.json());
app.post(
  '/products', 
  Validations.checkNewProductName,
  Validations.checkNewProductPrice,
  ProductsControllers.addNewProduct,
);
app.get('/products', ProductsControllers.listAllProducts);
app.get('/orders', OrdersControllers.listAllOrders);

export default app;
