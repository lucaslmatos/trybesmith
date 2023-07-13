import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login ', async function () { 
  beforeEach(function () { sinon.restore(); });
    it('Login com sucesso ', async function () {
      // Arrange
      const httpRequestBody = loginMock.validBody
      const stub = UserModel.build(loginMock.findOne)
      sinon.stub(UserModel, 'findOne').resolves(stub);
      // Act
      const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.have.key('token');
    });
});
