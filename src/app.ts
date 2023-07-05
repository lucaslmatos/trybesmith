import express from 'express';
import ProductsControllers from './controllers/ProductsControllers';

const app = express();

app.use(express.json());
app.post('/products', ProductsControllers.addNewProduct);

export default app;
