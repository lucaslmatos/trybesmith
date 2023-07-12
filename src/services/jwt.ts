import jwt, { JwtPayload } from 'jsonwebtoken';

export type Payload = {
  id: number,
  username: string,
};

const sign = (payload: any): JwtPayload | string => jwt.sign(payload, 'secret');

// const verify = (token: string): JwtPayload | string => jwt.verify(token, 'secret');

export default {
  sign,
  // verify,
};