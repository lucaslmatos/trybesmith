import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';

import app from '../../../src/app';
import productMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
    it('Adicionar produto válido', async function () {
      // Arrange
      const httpRequestBody = productMock.validBody
      const mockCreateReturn = ProductModel.build(productMock.validBodyResp);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(201);
      expect(httpResponse.body).to.be.deep.equal(productMock.validBodyResp);
  });
});
