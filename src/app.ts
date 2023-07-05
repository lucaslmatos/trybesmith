import express from 'express';
import ProductsControllers from './controllers/ProductsControllers';

const app = express();

app.use(express.json());
app.post('/products', ProductsControllers.addNewProduct);
app.get('/products', ProductsControllers.listAllProducts);

export default app;
