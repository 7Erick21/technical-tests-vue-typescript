export interface IAPIResponse<T>  {
  responseMessage: string
  data: T;
  status: string;
}
