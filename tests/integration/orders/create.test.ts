import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import UserModel from '../../../src/database/models/user.model';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

chai.use(chaiHttp);

describe('POST /orders', async function () { 
  beforeEach(function () { sinon.restore(); });
  it('Criar novo pedido', async function () {
    // Arrange
    const httpRequestBody = {
      "productIds": [1, 2],
      "userId": 1
    }
    await UserModel.create({
      username: 'Hagar',
      vocation: 'Guerreiro',
      level:10,
      password: bcrypt.hashSync('terrível', SALT_ROUNDS),
    });
    await UserModel.create({
      username: 'Eddie',
      vocation: 'Guerreiro',
      level: 8,
      password: bcrypt.hashSync('sortudo', SALT_ROUNDS),
    });
    await UserModel.create({
      username: 'Helga',
      vocation: 'Curandeira',
      level: 9,
      password: bcrypt.hashSync('valquíria', SALT_ROUNDS),
    });
    await OrderModel.create({
      userId: 1,
    });
    await OrderModel.create({
      userId: 2,
    });
    await OrderModel.create({
      userId: 3,
    });
    const mockCreateReturn = OrderModel.build({id:1, userId:1});
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
