import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';

import app from '../../../src/app';
import productMock from '../../mocks/products.mock';
import { any } from 'joi';

chai.use(chaiHttp);

describe('GET /products ', function () { 
  beforeEach(function () { sinon.restore(); });
    it('Listar todos os Produtos', async function () {
      // Arrange
      sinon.stub(ProductModel, 'findAll').resolves(productMock.allProducts);
      // Act
      const httpResponse = await chai.request(app).get('/products').send();
      // Assert
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(productMock.allProducts);
  });
});
