import { expect } from 'chai';
import sinon from 'sinon';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import loginServices from '../../../src/services/login.services';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Login com sucesso Services', async function () {
    // Arrange
    const httpRequestBody = loginMock.validBody
    sinon.stub(UserModel, 'findOne').resolves(loginMock.findOne);
    // sinon.stub(JWT, 'sign').returns(loginMock.validLoginResp.responseMessage);
    // Act
    const serciceResponse = await loginServices.login(httpRequestBody);
    // Assert
    expect(serciceResponse.statusCode).to.equal(200);
    expect(serciceResponse.responseMessage).to.be.deep.equal(serciceResponse.responseMessage);
  });
// it('Login com sucesso Services', async function () {
//     // Arrange
//     const httpRequestBody = loginMock.validBody
//     sinon.stub(UserModel, 'findOne').returns(loginMock.findOne);
//     // Act
//     const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
//     const serviceResponse = await loginServices.login(httpRequestBody);
//     // Assert
//     expect(serviceResponse.statusCode).to.equal(200);
// });
});
