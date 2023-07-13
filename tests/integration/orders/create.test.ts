import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('POST /orders', async function () { 
  beforeEach(function () { sinon.restore(); });
  it('Criar novo pedido', async function () {
    // Arrange
    const httpRequestBody = {
      "productIds": [1, 2],
      "userId": 1
    }
    const mockCreateReturn = OrderModel.build(httpRequestBody);
    sinon.stub(OrderModel, 'create').resolves(mockCreateReturn);
    // Act
    const httpResponse = await chai.request(app).post('/orders').send(httpRequestBody).set({'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkhhZ2FyIn0sImlhdCI6MTY4OTIwNzU2OX0.sK7-AQP6vFVMDEtG409M6dPoPD3PLBwkSYuWLdxeFnU`});
    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal({
      "userId": 1,
      "productIds": [
        1,
        2
      ]
    });
});
});
