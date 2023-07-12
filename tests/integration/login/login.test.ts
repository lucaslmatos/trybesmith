import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginServices from '../../../src/services/login.services';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import JWT from '../../../src/services/jwt';

chai.use(chaiHttp);

describe('POST /login ', async function () { 
  beforeEach(function () { sinon.restore(); });
    it('Login com sucesso Controller', async function () {
      // Arrange
      const httpRequestBody = loginMock.validBody
      sinon.stub(loginServices, 'login').resolves(loginMock.validLoginResp);
      // Act
      const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(loginMock.validBodyResp);
    });
    it('Login com sucesso Services', async function () {
      // Arrange
      const httpRequestBody = loginMock.validBody
      sinon.stub(UserModel, 'findOne').resolves(loginMock.findOne);
      sinon.stub(JWT, 'sign').returns(loginMock.validLoginResp.responseMessage);
      // Act
      const serciceResponse = await loginServices.login(httpRequestBody);
      // Assert
      expect(serciceResponse.statusCode).to.equal(200);
      expect(serciceResponse.responseMessage).to.be.deep.equal(loginMock.validBodyResp.token);
    });
    it('Login com sucesso jwt', async function () {
      // Arrange
      const httpRequestBody = loginMock.validBody
      sinon.stub(UserModel, 'findOne').resolves(loginMock.findOne);
      // Act
      const serciceResponse = await loginServices.login(httpRequestBody);
      // Assert
      expect(serciceResponse.statusCode).to.equal(200);
    });
});
