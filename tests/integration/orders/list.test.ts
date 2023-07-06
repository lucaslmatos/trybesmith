import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';

import app from '../../../src/app';
import orderMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('GET /orders ', function () { 
  beforeEach(function () { sinon.restore(); });
    it('Listar todos os Pedidos', async function () {
      // Arrange
      sinon.stub(OrderModel, 'findAll').resolves(orderMock.allOrders);
      // Act
      const httpResponse = await chai.request(app).get('/orders').send();
      // Assert
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(orderMock.allOrdersConverted);
  });
});
