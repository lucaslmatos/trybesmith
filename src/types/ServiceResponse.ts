export type SRCreateSucess = {
  responseMessage: SRCreateSucessMessage,
  statusCode:number
};

type SRCreateSucessMessage = {
  id: number,
  name: string,
  price: string
};
