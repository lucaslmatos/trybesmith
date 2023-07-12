const validBody = {
  "username": "Hagar",
  "password": "terrível"
};


const validBodyResp = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkhhZ2FyIn0sImlhdCI6MTY4OTE5MDI2NX0.sW2n4M1PB-rd5KpKM97XqOP9D73uBHD_4LgywCvI3zA"
};

const validLoginResp = {
  responseMessage:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkhhZ2FyIn0sImlhdCI6MTY4OTE5MDI2NX0.sW2n4M1PB-rd5KpKM97XqOP9D73uBHD_4LgywCvI3zA",
  statusCode: 200,
};

const invalidBody1 = {
  
};

const invalidBodyResp1 = {
  message: "\"username\" and \"password\" are required",
};

const invalidLoginResp1 = {
  responseMessage:"\"username\" and \"password\" are required",
  statusCode: 400,
};

const findOne:any = {
  id:1,
  userName: 'Hagar',
};

export default {
  validBody,
  validBodyResp,
  validLoginResp,
  invalidBody1,
  invalidBodyResp1,
  invalidLoginResp1,
  findOne,
};