import { GenericReturn, UserLog } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import JWT from './jwt';

const login = async (user:UserLog):Promise<GenericReturn> => {
  const { id, username }:any = await UserModel.findOne({ where: { username: user.username } });
  const payload = { id, username };
  const newToken = JWT.sign({ payload });
  return { responseMessage: newToken, statusCode: 200 };
};

export default {
  login,
};